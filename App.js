import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Login";
import Cadastro from "./src/Cadastro"

const Stack = createStackNavigator();

export default function App() {
  return (
 <NavigationContainer>
  <Stack.Navigator inicialRouteName = "Login">
    <Stack.Screen name="Login" component={Login} options={{headerTitle: ""}} />
    <Stack.Screen name = "Cadastro" component={Cadastro} options={{headerTitle: ""}} />
  </Stack.Navigator>
 </NavigationContainer>
  );
}