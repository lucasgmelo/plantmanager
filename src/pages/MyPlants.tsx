import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import waterDrop from "../assets/waterdrop.png";
import { Header } from "../components/Header";
import { PlantCardSecondary } from "../components/PlantCardSecondary";
import { loadPlant, PlantProps } from "../libs/storage";

export function MyPlants() {
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setnextWatered] = useState("");

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setnextWatered(
        `Não esqueça de regar a ${plantsStoraged[0].name} em ${nextTime}`
      );

      setPlants(plantsStoraged);
    }

    loadStorageData();
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image style={styles.spotlightImage} source={waterDrop} />
        <Text style={styles.spotlightText}>{nextWatered}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Próximas a serem regadas</Text>

        <FlatList
          data={plants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PlantCardSecondary data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  spotlight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spotlightImage: {
    width: 60,
    height: 60,
  },
  spotlightText: {
    flex: 1,
    color: colors.blue,
    padding: 20,
    textAlign: "justify",
    fontSize: 14,
  },
  plants: {
    flex: 1,
    width: "100%",
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20,
  },
});
