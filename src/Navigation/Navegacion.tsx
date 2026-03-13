import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Barranav from "../Componentes/Barranav"

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Barranav" 
          component={Barranav}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}