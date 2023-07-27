import React from "react";

// NAVIGATION
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import { Login } from "../screens/login";
import { Home } from "../screens/home";
import { Details } from "../screens/details";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Listagem de projetos",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Detalhes do projeto",
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default Routes;
