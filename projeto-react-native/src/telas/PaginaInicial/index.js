import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { CinzelDecorative_400Regular } from "@expo-google-fonts/cinzel-decorative";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Carrinho from "../Carrinho";
import { EBGaramond_400Regular } from "@expo-google-fonts/eb-garamond";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import axios from "axios";

const Tab = createBottomTabNavigator();

const TabRoutes = ({ products, addProductToCart }) => {
  const renderItem = ({ item }) =>
    item.id === 1 ? null : (
      <View style={styles.item}>
        <Image
          source={{
            uri: "http://capacitacao.byronsolutions.com:4000/" + item.image,
            onLoad: () => console.log("Imagem do produto:", item.image),
          }}
          style={styles.productImage}
        />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productStock}>Estoque: {item.stock}</Text>
        <Text style={styles.productPrice}>R$ {item.price}</Text>
        <TouchableOpacity
          style={styles.btnBuy}
          onPress={() => {
            addProductToCart(item.id);
            console.log("Nome:", item.nome);
            console.log("ID:", item.id);
          }}
        >
          <Text style={styles.textBtn}>Comprar</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerImage}>
          <Image
            source={require("./../../imagens/logoHeader.png")}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.lady}>
          <Image
            source={require("./../../imagens/imagem1.jpg")}
            style={styles.lady1}
          />
          <Text style={styles.ladyText}>
            Sinta a elegância em cada fragrância
          </Text>
        </View>
        <View style={styles.container3}>
          <View>
            <Image
              source={require("./../../imagens/perfume.jpg")}
              style={styles.perfumeimg}
            />
            <Text style={styles.textperfume}>
              Descubra uma experiência sensorial única com os perfumes Elegance.{" "}
              {"\n"}
              {"\n"}Cada fragrância é cuidadosamente criada para envolver seus
              sentidos, revelando uma harmonia de notas que expressam
              sofisticação e personalidade.
            </Text>
          </View>
        </View>
        <View style={styles.container4}>
          <Text style={styles.textTitle}>Os mais vendidos</Text>
          <View style={styles.carousel}>
            {products && (
              <FlatList
                data={products.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
              />
            )}
            {products && (
              <FlatList
                data={products.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                marginTop={-100}
                marginBottom={100}
              />
            )}
          </View>
        </View>
      </View>
      <View style={styles.container5}>
        <View style={styles.imagesContainer}>
          <Image
            source={require("./../../imagens/quemsomos.png")}
            style={styles.quemSomos}
          />

          <Image
            source={require("./../../imagens/faleconosco.png")}
            style={styles.faleConosco}
          />
        </View>
        <View style={styles.imagesContainer}>
          <Text style={styles.faleConoscoText}>Fale Conosco</Text>
          <Text style={styles.quemSomosText}>Quem somos</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default function PaginaInicial({ navigation, route }) {
  const [products, setProducts] = useState([]);
  console.log(products);
  const { userId, token } = route.params || {};
  console.log("Route params:", route.params);
  const [isPressing, setIsPressing] = useState(false);

  useEffect(() => {
    fetch("http://capacitacao.byronsolutions.com:4000/products")
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error(error));
  }, []);

  const addProductToCart = async (product) => {
    const request = {
      userId: userId,
      token: token,
    };
    console.log("USER ID", userId);
    console.log("TOKEN", token);
    try {
      console.log("UserId:", userId);
      console.log("Token: ", token);
      const response = await axios.post(
        "http://capacitacao.byronsolutions.com:4000/cart/add",
        userId,
        product,

        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      const { data } = response;
      console.log(response);
      if (data && data.token) {
        console.log("Produto adicionado ao carrinho:", response.data),
          {
            product: product.id,
            userId: data.data.id,
          };
      } else {
        throw new Error("Dados do token ausentes");
      }
    } catch (error) {
      console.log("Erro ao adicionar produto ao carrinho:", error);
    }
  };

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
        {() => (
          <TabRoutes products={products} addProductToCart={addProductToCart} />
        )}
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
    backgroundColor: "#FFFFFF",
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
  container2: {
    flex: 1,
    flexDirection: "column",
  },
  lady: {
    width: "100%",
    height: "35%",
    objectFit: "cover",
  },
  lady1: {
    width: "100%",
    height: "50%",
    objectFit: "cover",
  },
  ladyText: {
    position: "absolute",
    marginTop: 220,
    left: 20,
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "CinzelDecorativeRegular",
    width: 300,
  },
  container3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -190,
    marginBottom: 121,
  },
  perfumeimg: {
    height: 190,
    width: 160,
    alignItems: "flex-start",
    marginRight: 100,
    marginTop: -30,
    justifyContent: "space-evenly",
  },
  textperfume: {
    fontSize: 10,
    width: 200,
    alignItems: "flex-end",
    marginTop: -150,
    fontSize: 10,
    width: 180,
    fontFamily: "EBGaramond_400Regular",
    marginLeft: 180,
  },
  container4: {
    backgroundColor: "#1d464a",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 1000,
    backgroundColor: "#1d464a",
  },
  textTitle: {
    fontFamily: "CinzelDecorativeRegular",
    color: "white",
    marginTop: "40%",
  },
  productImage: {
    width: 179,
    height: 191,
    marginBottom: 10,
    marginRight: -5,
    marginLeft: -7,
  },
  productName: {
    fontFamily: "CinzelDecorativeRegular",
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    fontSize: 14,
  },
  productStock: {
    fontFamily: "EBGaramond_400Regular",
    color: "#8F8F8F",
    fontSize: 12,
  },
  productPrice: {
    fontFamily: "CinzelDecorativeRegular",
    fontSize: 16,
    color: "white",
    alignItems: "flex-end",
    textAlign: "right",
    fontWeight: "500",
  },
  btnBuy: {
    height: 40,
    marginTop: 20,
    paddingLeft: 10,
    color: "white",
    backgroundColor: "#FAF9E6",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  textBtn: {
    fontFamily: "CinzelDecorativeRegular",
    alignItems: "center",
    alignSelf: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
    justifyContent: "center",
    paddingRight: 20,
  },
  carousel: {
    marginTop: -10,
    marginBottom: 30,
  },
  container5: {
    display: "flex",
    flexDirection: "row",
    marginTop: -140,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 1200,
  },
  quemSomos: {
    width: 180,
    height: 200,
    marginRight: 20,
  },
  faleConosco: {
    width: 180,
    height: 200,
  },

  quemSomosText: {
    fontSize: 15,
    fontFamily: "CinzelDecorativeRegular",
    color: "black",
    borderWidth: 1,
    borderColor: "white",
  },
  faleConoscoText: {
    fontSize: 15,
    fontFamily: "CinzelDecorativeRegular",
    color: "white",
    position: "absolute",
    borderWidth: 1,
    borderColor: "white",
  },
});
