import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/load.json'

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function Header() {
  return (
    <View style={styles.container}>
        <LottieView 
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
      backgroundColor: 'transparent',
      width: 200,
      height: 200,
  }
});
