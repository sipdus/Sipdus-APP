import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function GlicemiaScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Glicemia</Text>
        <Text style={styles.headerSubtitle}>Suas aferições</Text>
      </View>

      {/* Gráfico único */}
      <View style={styles.graphContainer}>
        <View style={styles.graphBox}>
          <Text style={styles.axisY}>Glicemia (mg/dL)</Text>
          <Text style={styles.axisX}>Tempo (dias)</Text>
          <View style={styles.graphPlaceholder}>
            <Text style={styles.graphText}>[ Gráfico aqui ]</Text>
          </View>
        </View>

        {/* Texto de média */}
        <Text style={styles.mediaText}>A média da sua glicemia é --- mg/dL</Text>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={require("../assets/home.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/servicos.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/config.png")} style={styles.footerIcon} />
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
  header: {
    backgroundColor: "#00bcd4",
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#fff",
    fontSize: 15,
    marginTop: 4,
  },
  graphContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  graphBox: {
    width: windowWidth * 0.9,
    backgroundColor: "#e9f7f8",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    position: "relative",
  },
  axisY: {
    position: "absolute",
    left: 10,
    top: 10,
    transform: [{ rotate: "-90deg" }],
    fontSize: 11,
    color: "#555",
  },
  axisX: {
    position: "absolute",
    bottom: 10,
    right: 20,
    fontSize: 11,
    color: "#555",
  },
  graphPlaceholder: {
    height: 120,
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
  mediaText: {
    fontSize: 16,
    color: "#333",
    marginTop: 20,
    fontWeight: "500",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  footerIcon: {
    width: 28,
    height: 28,
  },
});
