import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";

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
import { IData, IUser } from "../../shared/types/GithubInterfaces.types";

// CONFIG
import { GITHUB_TOKEN, GITHUB_USER } from "../../config/envs";

function Home() {
  const [user, setUser] = useState<IUser>();
  const [listRepos, setListRepos] = useState<IData[]>([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const URL = "https://api.github.com";
  useEffect(() => {
    if (isFocused && !user) {

      fetch(`${URL}/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setUser(json);
        })
        .catch((e) => {
          Alert.alert(`Erro: ${e}`);
        });
    }

  }, [isFocused]);

  useEffect(() => {
    if (isFocused && listRepos.length === 0) {
      fetch(`${URL}/users/${GITHUB_USER}/repos`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setListRepos(json);
        });
    }
  }, [isFocused]);

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
          <TouchableOpacity onPress={() => {
            navigation.navigate("Details", { followersUrl: user?.followers_url });
          }}>
            <View
              key={index}
              style={{ backgroundColor: "#FFF", marginTop: 8, padding: 8 }}
            >
              <Text>{item.name}</Text>
              <Text>{item.language || "Linguagem não encontrada"}</Text>
            </View>
          </TouchableOpacity>
        )
        }
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          < View style={{ padding: 8 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Repositórios
            </Text>
          </View >
        }
        ListEmptyComponent={< ActivityIndicator size={"large"} color={"red"} />}
      />
    </SafeAreaView >
  );
}

export { Home };
