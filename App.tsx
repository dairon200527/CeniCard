import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navegacion from "./src/Navigation/Navegacion";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navegacion/>
    </SafeAreaProvider>
  )
  
}