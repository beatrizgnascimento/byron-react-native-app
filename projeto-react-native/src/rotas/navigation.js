import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "../telas/Cadastro";
import Login from "../telas/Login";

const Stack = createNativeStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitle: "",
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
