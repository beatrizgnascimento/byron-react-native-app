import React from "react";
import Rotas from "./src/rotas/navigation";
import { useFonts } from "expo-font";
import { CinzelDecorative_400Regular } from "@expo-google-fonts/cinzel-decorative";
import { EBGaramond_400Regular } from "@expo-google-fonts/eb-garamond";

function App() {
  let [fontsLoaded, fontError] = useFonts({
    CinzelDecorativeRegular: CinzelDecorative_400Regular,
    EBGaramond_400Regular: EBGaramond_400Regular,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return <Rotas />;
}

export default App;
