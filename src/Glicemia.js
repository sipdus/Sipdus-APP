import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function GlicemiaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* TOPO BRANCO COM VOLTA (imagem inclui o texto "Sipdus") */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/volta.png")} style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      {/* USER CENTRALIZADO */}
      <View style={styles.greetingWhite}>
        <Text style={styles.helloText}>
          <Text style={{ fontWeight: "bold" }}>(User):</Text>
        </Text>
      </View>

      {/* ÁREA AZUL */}
      <View style={styles.blueContainer}>
        <Text style={styles.titleText}>Glicemia</Text>
        <Text style={styles.subtitleText}>Suas aferições:</Text>

        {/* Gráfico */}
        <View style={styles.graphContainer}>
          <View style={styles.graphBox}>
            <View style={styles.graphPlaceholder}>
              <Text style={styles.graphText}>[ Gráfico aqui ]</Text>
            </View>
          </View>

          {/* Média */}
          <Text style={styles.mediaText}>A média da sua glicemia é --- mg/dL</Text>
        </View>
      </View>

      {/* RODAPÉ */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Image source={require("../assets/inicio.png")} style={styles.footerIconLarge} />
          <Text style={styles.footerText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image source={require("../assets/servicos.png")} style={styles.footerIcon} />
          <Text style={styles.footerText}>Serviços</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image source={require("../assets/configuracoes.png")} style={styles.footerIcon} />
          <Text style={styles.footerText}>Config.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // TOPO
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },

  backIcon: {
    width: 160, // ← aumentei bastante o tamanho
    height: 70,
    resizeMode: "contain",
  },

  // USER CENTRALIZADO
  greetingWhite: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 5,
    marginBottom: -3,
  },

  helloText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },

  // ÁREA AZUL
  blueContainer: {
    flex: 1,
    backgroundColor: "#00BCD4",
    borderTopLeftRadius: 25,
    paddingTop: 20,
  },

  titleText: {
    color: "#000",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },

  subtitleText: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },

  // GRÁFICO
  graphContainer: {
    marginTop: 45,
    alignItems: "center",
  },

  graphBox: {
    width: windowWidth * 0.9,
    backgroundColor: "#e9f7f8",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },

  graphPlaceholder: {
    height: 200,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 10,
  },

  graphText: {
    color: "#aaa",
  },

  // MÉDIA
  mediaText: {
    fontSize: 18,
    color: "#000",
    marginTop: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  // RODAPÉ
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ccc",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  footerItem: {
    alignItems: "center",
  },

  footerIcon: {
    width: 45,
    height: 38,
    marginBottom: 4,
    resizeMode: "contain",
  },

  footerIconLarge: {
    width: 52,
    height: 40,
    marginBottom: 4,
    resizeMode: "contain",
  },

  footerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
  },
});
