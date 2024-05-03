import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { CinzelDecorative_400Regular } from "@expo-google-fonts/cinzel-decorative";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EBGaramond_400Regular } from "@expo-google-fonts/eb-garamond";
import { useNavigation } from "@react-navigation/native";
import PaginaInicial from "../PaginaInicial";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerImage}>
        <Image
          source={require("./../../imagens/logoHeader.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};
export default function Carrinho({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PaginaInicial")}
            >
              <Image
                source={require("./../../imagens/home.png")}
                style={{ width: 30, height: 30, marginTop: 6 }}
              />
            </TouchableOpacity>
          ),
        }}
      >
        {() => <TabRoutes />}
      </Tab.Screen>

      <Tab.Screen
        name="Carrinho"
        component={TabRoutes}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>
              <Image
                source={require("./../../imagens/carrinho.png")}
                style={{ width: 24, height: 24, marginTop: 9 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d464a",
  },
  header: {
    height: 85,
    backgroundColor: "#1d464a",
  },
  headerImage: {
    alignContent: "flex-start",
    marginTop: 30,
    width: 200,
  },
  image: {
    width: 90,
    height: 41,
    marginBottom: 2,
    marginTop: 10,
    marginLeft: 22,
    width: 115,
    marginTop: 2,
  },
});
