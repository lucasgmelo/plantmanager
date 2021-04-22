import { Inter_400Regular, Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import React from 'react';
import Routes from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
   Inter_400Regular,
   Inter_600SemiBold
  });

  if(!fontsLoaded) return (
    <AppLoading />
  )

  return (
    <Routes />
  );
}
