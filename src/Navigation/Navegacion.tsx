import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";


import Login from "../Componentes/Login";
import PageCarnet from "../pages/PageCarnet";
import PageInicio from "../pages/PageInicio";
import PageNotificaciones from "../pages/PageNotificaciones";
import PageRegistro from "../pages/PageRegistro";
import PageServicios from "../pages/PageServicios";
import PageRecuperarPassword from "../pages/RecuperarPassword";

const Stack = createNativeStackNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
  animation: 'fade',
  animationDuration: 3000,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro"component={PageRegistro} />
        <Stack.Screen name="RecuperarPassword"component={PageRecuperarPassword} />
        <Stack.Screen name="PageInicio"component={PageInicio} />
        <Stack.Screen name="Servicios"component={PageServicios} />
        <Stack.Screen name="Carnet"component={PageCarnet} />
        <Stack.Screen name="Notificaciones"component={PageNotificaciones} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}