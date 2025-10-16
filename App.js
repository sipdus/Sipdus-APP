// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useBLE from "./src/hooks/useBLE";

// === Telas do seu app ===
import Login from "./src/Login";
import Cadastro from "./src/Cadastro";
import TelaInicial from "./src/TelaInicial";
import GlicemiaScreen from "./src/Glicemia";
import BPMScreen from "./src/BPM";
import OximetriaScreen from "./src/Oximetria";

const Stack = createStackNavigator();

export default function App() {
  // 🔹 Inicializa o BLE uma vez e compartilha com todas as telas
  const ble = useBLE();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login">
          {(props) => <Login {...props} ble={ble} />}
        </Stack.Screen>

        <Stack.Screen name="Cadastro" component={Cadastro} />

        <Stack.Screen name="TelaInicial">
          {(props) => <TelaInicial {...props} ble={ble} />}
        </Stack.Screen>

        <Stack.Screen name="GlicemiaScreen">
          {(props) => <GlicemiaScreen {...props} ble={ble} />}
        </Stack.Screen>

        <Stack.Screen name="BPMScreen">
          {(props) => <BPMScreen {...props} ble={ble} />}
        </Stack.Screen>

        <Stack.Screen name="OximetriaScreen">
          {(props) => <OximetriaScreen {...props} ble={ble} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
