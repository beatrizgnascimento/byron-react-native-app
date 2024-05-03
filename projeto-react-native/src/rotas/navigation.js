import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "../telas/Cadastro";
import Login from "../telas/Login";
import PaginaInicial from "../telas/PaginaInicial";
import Carrinho from "../telas/Carrinho";
import { ImageBackground } from "react-native";

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
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen
          name="TabRoutes"
          component={Login}
          options={{
            ImageBackground: "src/imagens/headerLogo.png",
          }}
        />
        <Stack.Screen
          name="PaginaInicial"
          component={PaginaInicial}
          options={{
            tabBarStyle: { display: "none" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
