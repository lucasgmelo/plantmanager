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
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SvgFromUri } from "react-native-svg";

import waterDrop from "../assets/waterdrop.png";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Button } from "../components/Button";

export function PlantSave() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.plantInfo}>
        <SvgFromUri uri="" height={150} width={150} />
        <Text style={styles.plantName}>Nome da Planta</Text>
        <Text style={styles.plantAbout}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quasi
          minima nemo harum error, dolorem qui distinctio repellendus facilis.
        </Text>
      </ScrollView>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterDrop} style={styles.tipImage} />
          <Text style={styles.tipText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            quam?
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
    alignItems: "center",
    backgroundColor: colors.shape,
    padding: 30,
  },
});
