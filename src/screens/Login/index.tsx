import React from "react";

// NAVIGATION
import { useNavigation } from "@react-navigation/native";

// RN
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

// STYLES
import { styles } from "./Login.styles";

function Login() {
  const navigation = useNavigation();

  const login = () => {
    navigation.navigate("Home");
  };

  const forgetMyPassword = () => {
    Alert.alert("Atenção", "Cliquei em esqueci minha senha");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <SafeAreaView />
      <Text style={styles.title}>Login</Text>
      <View style={styles.containerInputs}>
        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          keyboardType="email-address"
          maxLength={25}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          secureTextEntry
          maxLength={10}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={login}
          activeOpacity={0.8}
        >
          <Text style={styles.label}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.whiteBackground]}
          onPress={forgetMyPassword}
        >
          <Text style={[styles.label, styles.blackLabel]}>
            Esqueceu a sua senha?
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.divider}>
        ------------------ ou ------------------
      </Text>
      <View style={styles.containerFooter}>
        <TouchableOpacity style={[styles.button, styles.socialButton]}>
          <Text style={[styles.label, styles.socialLabel]}>
            Login com o Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.whiteBackground]}>
          <Text style={[styles.label, styles.blackLabel, styles.underline]}>
            Não possui uma conta?{" "}
            <Text style={styles.boldWeight}>Crie agora mesmo</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export { Login };
