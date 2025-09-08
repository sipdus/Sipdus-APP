import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

const DATA = [
  { id: "1", title: "Glicemia", image: require("../assets/glicemia.png") },
  { id: "2", title: "BPM", image: require("../assets/BPM.png") },
  { id: "3", title: "Oximetria", image: require("../assets/SP02.png") },
  { id: "4", title: "Colesterol", image: require("../assets/colesterol.png") },
  { id: "5", title: "Refeições", image: require("../assets/refeicao.png") },
];

export default function TelaInicial() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* TOPO BRANCO COM MENU, LOGO E NOTIFICAÇÃO */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Image source={require("../assets/menu.png")} style={styles.iconLarge} />
        </TouchableOpacity>
        <Text style={styles.logo}></Text>
        <TouchableOpacity>
          <Image source={require("../assets/notificacao.png")} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      {/* SAUDAÇÃO (AINDA NO FUNDO BRANCO) */}
      <View style={styles.greetingWhite}>
        <Text style={styles.helloText}>Olá, <Text style={{ fontWeight: 'bold' }}>(User)</Text></Text>
      </View>

      {/* ÁREA AZUL COM OS CARDS */}
      <View style={styles.blueContainer}>
      <Text style={styles.subtitleText}>Suas informações:</Text>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
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
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00BCD4",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 10,
  },
  iconLarge: {
    width: 150,
    height: 200,
    resizeMode: "contain",
    marginTop: -120,
  },
  socialIcon: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginTop: -90,
  },
  greetingWhite: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: -80,
    alignItems: "center",
  },
  helloText: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitleText: {
    color: "#00000",
    fontSize: 20,
    marginTop: 4,
    marginLeft:10,
    marginTop:2,
  },
  blueContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: "#00BCD4",
    borderTopLeftRadius: 25,  // só o canto superior esquerdo arredondado
    borderTopRightRadius: 0,  // canto superior direito sem curva
    paddingTop: 20,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 120, // espaço extra para não colar no footer
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  cardImage: {
    width: 40,
    height: 40,
    marginRight: 16,
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
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
    width: 36,
    height: 30,
    marginBottom: 4,
    resizeMode: "contain",
  },
  footerIconLarge: {
    width: 42,
    height: 32,
    marginBottom: 4,
    resizeMode: "contain",
  },
  footerText: {
    fontSize: 12,
    color: "#000000",
  },
});
