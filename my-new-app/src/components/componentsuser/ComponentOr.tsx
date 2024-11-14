import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ComponentOr() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Or</Text>
      <View style={styles.line} />
    </View>
  );
}

export default ComponentOr;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 2, // Aumenta el grosor de la línea
    backgroundColor: "balck", // Cambia el color a negro
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
});