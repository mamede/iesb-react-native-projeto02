import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

// COMPONENTS
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  Image,
  FlatList
} from "react-native";

// ENVS
import { GITHUB_TOKEN } from "../../config/envs";

// STYLES
import { styles } from "./Details.styles";

// TYPES
import { IFollowers } from "../../shared/types/GithubInterfaces.types";

function Details(props: any) {
  const followersURL = props.route.params.followersUrl;
  const [followers, setFollowers] = useState<IFollowers[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && followers.length === 0) {
      fetch(`${followersURL}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setFollowers(json);
        })
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
      <View>
        <FlatList
          data={followers}
          renderItem={({ item, index }) => (
            <View
              key={index}
              style={styles.imageView}
            >
              <Text>{item.login}</Text>
              <Image source={{ uri: item.avatar_url }} style={styles.image} />
            </View>
          )}
          keyExtractor={(item) => item.login}
          ListHeaderComponent={
            <View style={{ padding: 8 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Seguidores
              </Text>
            </View>
          }
          ListEmptyComponent={<ActivityIndicator size={"large"} color={"red"} />}
        />
      </View>
    </SafeAreaView>
  );
}

export { Details };
