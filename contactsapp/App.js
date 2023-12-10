import React from "react";
import MainTabs from "./navigators/MainTabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  )
}

// registerRootComponent(App);
