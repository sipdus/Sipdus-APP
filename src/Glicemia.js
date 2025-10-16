import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";

const windowWidth = Dimensions.get("window").width;

export default function GlicemiaScreen({ navigation, ble }) {
  const { glucose } = ble || {};

  const glicemiaData = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    datasets: [
      {
        data: [95, 102, 88, 110, 97, 120, glucose ?? 100],
        color: () => "#007B83",
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/volta.png")} style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.greetingWhite}>
        <Text style={styles.helloText}>
          <Text style={{ fontWeight: "bold" }}>(User):</Text>
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.blueContainer}>
          <Text style={styles.titleText}>Glicemia</Text>
          <Text style={styles.subtitleText}>Suas aferições:</Text>

          <View style={styles.graphContainer}>
            <View style={styles.graphBox}>
              <LineChart
                data={glicemiaData}
                width={windowWidth * 0.85}
                height={220}
                chartConfig={{
                  backgroundColor: "#e9f7f8",
                  backgroundGradientFrom: "#e9f7f8",
                  backgroundGradientTo: "#e9f7f8",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  propsForDots: { r: "4", strokeWidth: "2", stroke: "#007B83" },
                }}
                bezier
                style={{ borderRadius: 10 }}
              />
              <Text style={styles.graphText}>
                Última leitura: {glucose ?? "---"} mg/dL
              </Text>
            </View>

            <Text style={styles.mediaText}>A média da sua glicemia é --- mg/dL</Text>
          </View>
        </View>
      </ScrollView>

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
  container: { flex: 1, backgroundColor: "#fff" },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },

  backIcon: { width: 160, height: 70, resizeMode: "contain" },

  greetingWhite: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 2,
  },

  helloText: { color: "#000", fontSize: 20, fontWeight: "bold" },

  blueContainer: {
    flex: 1,
    backgroundColor: "#00BCD4",
    borderTopLeftRadius: 25,
    paddingTop: 20,
    paddingBottom: 100,
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

  graphContainer: { marginTop: 30, alignItems: "center" },

  graphBox: {
    width: windowWidth * 0.9,
    backgroundColor: "#e9f7f8",
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: "center",
  },

  graphText: {
    color: "#000",
    marginTop: 10,
    fontWeight: "500",
  },

  mediaText: {
    fontSize: 18,
    color: "#000",
    marginTop: 25,
    fontWeight: "bold",
    textAlign: "center",
  },

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

  footerItem: { alignItems: "center" },

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

  footerText: { fontSize: 14, fontWeight: "600", color: "#000000" },
});
