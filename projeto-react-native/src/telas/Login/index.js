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

export default function Login({ navigation }) {
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
      <TouchableOpacity style={styles.button}>
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
    color: "white",
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
