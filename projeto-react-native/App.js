import React from "react";
import Rotas from "./src/rotas/navigation";
import {
  useFonts,
  CinzelDecorative_400Regular,
} from "@expo-google-fonts/cinzel-decorative";

function App() {
  let [fontsLoaded, fontError] = useFonts({
    CinzelDecorativeRegular: CinzelDecorative_400Regular,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return <Rotas />;
}

export default App;
