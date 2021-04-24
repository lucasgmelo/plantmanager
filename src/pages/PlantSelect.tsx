import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { EnviromentButton } from "../components/EnviromentButton";
import { Header } from "../components/Header";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import { Load } from '../components/Load'

interface EnviromentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [enviromentSelected, setEnviromentSelected] = useState("all");
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(true);
  const [loadedAll, setLoadedAll] = useState(false);

  function handleEnviromentSelected(currentEnviroment: string) {
    setEnviromentSelected(currentEnviroment);

    if (currentEnviroment === "all") return setFilteredPlants(plants);

    const filtered = plants.filter(plant => plant.environments.includes(currentEnviroment))

    setFilteredPlants(filtered)
  }

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await axios.get(
        "http://192.168.5.80:4444/plants_environments?_sort=title&_order=asc"
      );
      setEnvironments([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    }

    fetchEnviroment();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await axios.get(
        `http://192.168.5.80:4444/plants?_sort=name&_order=asc&_page=${page}&_limit=8`
      );

      if(!data) return setLoading(true);

      if(page > 1){
        setPlants(oldValue => [...oldValue, ...data])
        setFilteredPlants(oldValue => [...oldValue, ...data])
      } else {
        setPlants(data);
        setFilteredPlants(data);
      }

      setLoading(false);
      setLoadingMore(false);
    }

    fetchPlants();
  }, []);

  if(loading) return <Load />
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <EnviromentButton
              key={item.key}
              title={item.title}
              active={item.key === enviromentSelected}
              onPress={() => handleEnviromentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => (
            <PlantCardPrimary key={item.id} data={item} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 20,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  enviromentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "center",
  },
});
