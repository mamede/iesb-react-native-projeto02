import React from "react";

// NAVIGATION
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import { Login } from "../screens/login";
import { Home } from "../screens/home";

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
      </Stack.Navigator>
    </>
  );
};

export default Routes;
