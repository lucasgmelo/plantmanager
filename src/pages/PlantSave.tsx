import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SvgFromUri } from "react-native-svg";

import waterDrop from "../assets/waterdrop.png";

import colors from "../../styles/colors";
import { Button } from "../components/Button";
import fonts from "../../styles/fonts";

export function PlantSave() {
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri="" height={150} width={150} />
        <Text style={styles.plantName}>Nome da Planta</Text>
        <Text style={styles.plantAbout}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quasi
          minima nemo harum error, dolorem qui distinctio repellendus facilis.
        </Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterDrop} style={styles.tipImage} />
          <Text style={styles.tipText}>
            Lorem ipsum dolor sit amet.
            quam? wtf men hahahahah
          </Text>
        </View>
        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        <Button title="Cadastrar planta" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.white,
  },
  plantInfo: {
      flex: 1,
      paddingHorizontal: 30,
      paddingVertical: 50,
      alignItems: "center",
      backgroundColor: colors.shape,
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20,
  },
  plantName: {
      fontFamily: fonts.heading,
      fontSize: 24,
      color: colors.heading,
      marginTop: 15
  },
  plantAbout: {
      textAlign: "center",
      fontFamily: fonts.text,
      color: colors.heading,
      fontSize: 17,
      marginTop: 10,
  },
  tipContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.blue_light,
      padding: 20,
      borderRadius: 20,
      position: 'relative',
      bottom: 70,
  },
  tipImage: {
      width: 56,
      height: 56,
  },
  tipText: {
      flex: 1,
      marginLeft: 20,
      fontFamily: fonts.text,
      color: colors.blue,
      fontSize: 17,
      textAlign: 'justify',
  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5

  }
});
