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
import { EBGaramond_400Regular } from "@expo-google-fonts/eb-garamond";

export default function Cadastro({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCadastro = () => {
    const request = {
      name: name,
      email: email,
      password: password,
      role: false,
    };

    fetch("http://capacitacao.byronsolutions.com:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((response) => {
        if (response.ok) {
          navigation.navigate("PaginaInicial");
        } else {
          alert("Erro ao criar o cadastro. Por favor, tente novamente.");
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error);
        alert(
          "Ocorreu um erro o tentar criar o cadastro. Por favor, tente novamente."
        );
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./../../imagens/logo.png")}
        style={styles.image}
      />
      <TextInput
        style={[styles.input, { fontFamily: "EBGaramond_400Regular" }]}
        placeholder="NOME"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={[styles.input, { fontFamily: "EBGaramond_400Regular" }]}
        placeholder="EMAIL"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={[styles.input, { fontFamily: "EBGaramond_400Regular" }]}
        placeholder="SENHA"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={handleCadastro}>
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
    color: "black",
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
