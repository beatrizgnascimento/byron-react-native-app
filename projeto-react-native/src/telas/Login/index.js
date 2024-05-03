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

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    const request = {
      email: email,
      password: password,
    };

    fetch("http://capacitacao.byronsolutions.com:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Credenciais inválidas. Por favor, tente novamente");
        }
      })
      .then((data) => {
        setLoading(false);
        if (data && data.token) {
          navigation.navigate("PaginaInicial", {
            token: data.token,
            userId: data.profileId,
          });
          console.log("Id do usuário", data.data.id);
          console.log("Token do user", data.token);
        } else {
          throw new Error("Dados do token ausentes");
        }
      })
      .catch((error) => {
        alert(
          "Ocorreu um erro ao tentar fazer login. Por favor, tente novamente"
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
        placeholder="EMAIL"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={[styles.input, { fontFamily: "EBGaramond_400Regular" }]}
        placeholder="SENHA"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Ainda não possui uma conta?</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text
            style={[
              styles.signUpLink,
              { fontFamily: "CinzelDecorativeRegular" },
            ]}
          >
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
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
    borderColor: "white",
    marginTop: 20,
    paddingLeft: 10,
    color: "black",
    backgroundColor: "white",
    marginBottom: 10,
    fontFamily: "CinzelDecorativeRegular",
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
  forgotPasswordContainer: {
    flexDirection: "column",
    marginTop: 20,
    marginRight: 180,
  },
  forgotPasswordText: {
    color: "white",
    fontSize: 10,
    fontFamily: "CinzelDecorativeRegular",
  },
  signUpContainer: {
    flexDirection: "column",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    color: "white",
    fontSize: 12,
    fontFamily: "CinzelDecorativeRegular",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpLink: {
    fontFamily: "CinzelDecorativeRegular",
    color: "white",
    fontSize: 12,

    textDecorationLine: "underline",
    marginTop: 0,
    justifyContent: "center",
  },
});
