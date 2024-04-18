import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  CinzelDecorative_400Regular,
} from "@expo-google-fonts/cinzel-decorative";

export default function Cadastro({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("./../../imagens/logo.png")}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d464a",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontFamily: "CinzelDecorativeRegular",
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 10,
    color: "white",
    backgroundColor: "white",
    marginBottom: 10,
    fontFamily: "CinzelDecorativeRegular",
    borderColor: "white",
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 35,
  },
  button: {
    width: 300,
    height: 40,
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 10,
    color: "white",
    backgroundColor: "#faf9e6",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "CinzelDecorativeRegular",
    borderColor: "white",
  },
  textoBotao: {
    fontFamily: "CinzelDecorativeRegular",
  },
});
