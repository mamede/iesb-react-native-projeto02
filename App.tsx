import { StatusBar } from "react-native";

// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";

// ROUTES
import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
