import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import topo from "../../assets/assets/topo.png";
import logo from "../../assets/assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhes da Cesta</Text>
      <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View style={estilos.fazenda}>
          <Image source={logo} style={estilos.imagemFazenda} />
          <Text style={estilos.nomeFazenda}>Peter Rock Farm</Text>
        </View>
        <Text style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha!
        </Text>
        <Text style={estilos.preco}>R$40</Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    lineHeight: 42,
    fontSize: 36,
    color: "#464646",
    width: "100%",
    fontFamily: "MontSerratBold",
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: "MontSerratRegular",
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    lineHeight: 36,
    fontSize: 22,
    color: "white",
    padding: 16,
    fontFamily: "MontSerratBold",
  },
});
