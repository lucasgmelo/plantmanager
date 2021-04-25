import React, { useEffect } from "react";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import * as Notifications from "expo-notifications";
import Routes from "./src/routes";
import { PlantProps } from "./src/libs/storage";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  useEffect(() => {
    // const subscription = Notifications.addNotificationReceivedListener(
    //   async (notification) => {
    //     const data = notification.request.content.data.plant as PlantProps;
    //     console.log(data);
    //   }
    // );

    // return () => subscription.remove();

    async function notifications(){
      const data = await Notifications.getAllScheduledNotificationsAsync();
      console.log('i');
      console.log(data);
    }
notifications();
  }, []);

  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
}
