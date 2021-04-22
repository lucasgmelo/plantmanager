import React from 'react';
import AppLoading from 'expo-app-loading'
import { Welcome } from './src/pages/Welcome';
import {useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if(!fontsLoaded) return (
    <AppLoading />
  )

  return (
    <Welcome />
  );
}
