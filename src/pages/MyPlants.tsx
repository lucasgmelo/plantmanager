// import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

import waterDrop from "../assets/waterdrop.png";
import { FlatList } from "react-native-gesture-handler";
import { loadPlant, PlantProps } from "../libs/storage";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";


export function MyPlants() {
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setnextWatered] = useState('');

    useEffect(() => {
        async function loadStorageData(){
            const plantsStoraged = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt}
            );

            setnextWatered(`
            Não esqueça de regar a ${plantsStoraged[0].name} às ${nextTime} horas`)
        }

        loadStorageData();
    }, []);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image styles={styles.spotlightImage} source={waterDrop} />
        <Text style={styles.spotlightText}>qualquer coisa</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
            Próximas a serem regadas
        </Text>

        <FlatList 
        data={}
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
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: "center",
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading,
  },
  emoji: {
    fontSize: 78,
  },
  footer: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 50,
  },
});
