import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Login";
import Cadastro from "./src/Cadastro";
import TelaInicial from "./src/TelaInicial";
import GlicemiaScreen from "./src/Glicemia";
import BPMScreen from "./src/BPM";
import OximetriaScreen from "./src/Oximetria";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TelaInicial" 
          component={TelaInicial} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="GlicemiaScreen" 
          component={GlicemiaScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BPMScreen" 
          component={BPMScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="OximetriaScreen" 
          component={OximetriaScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
