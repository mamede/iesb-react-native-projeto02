import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// RN
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// STYLES
import { styles } from "./Home.styles";

// TYPES
import { IData, IUser, IOwner } from "./Home.types";

// CONFIG
import { GITHUB_TOKEN } from "../../config/envs";

function Home() {
  const [user, setUser] = useState<IUser>();
  const [listRepos, setListRepos] = useState<IData[]>([]);
  const navigation = useNavigation();

  const URL = "https://api.github.com";
  useEffect(() => {
    fetch(`${URL}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(`RESPOSTA: ${JSON.stringify(json)}`);
        setUser(json);
      })
      .catch((e) => {
        console.log(`Erro: ${e}`);
        Alert.alert(`Erro: ${e}`);
      });
  });

  useEffect(() => {
    fetch(`${URL}/users/mamede/repos`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(`REPOSITORIOS: ${JSON.stringify(json)}`);
        setListRepos(json);
      });
    navigation.navigate("Details", { data: listRepos });
  }, []);

  const handleFilter = (name: string) => () => {
    const listReposFilter = listRepos.filter((filter) => filter.name === name);
    console.log(
      "------------------------333333333333333--------------------------",
      listReposFilter
    );
    navigation;
  };
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
      <View style={styles.imageView}>
        <Image source={{ uri: user?.avatar_url }} style={styles.image} />
        <Text style={{ fontSize: 24 }}>{user?.name}</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{user?.bio}</Text>
      </View>
      <FlatList
        data={listRepos}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={handleFilter(item.name)}>
            <View
              key={index}
              style={{ backgroundColor: "#FFF", marginTop: 8, padding: 8 }}
            >
              <Text>{item.name}</Text>
              <Text>{item.language || "Linguagem não encontrada"}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={{ padding: 8 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Repositórios
            </Text>
          </View>
        }
        ListEmptyComponent={<ActivityIndicator size={"large"} color={"red"} />}
      />
    </SafeAreaView>
  );
}

export { Home };
