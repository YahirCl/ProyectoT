import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native";

function BotonGoogle() {
  const handleLogin = () => {
    // Aquí iría la lógica de inicio de sesión
    // Por ejemplo, podrías hacer una llamada a una API para autenticar al usuario
    Alert.alert("Inicio de sesión", "Has iniciado sesión correctamente");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Continua Con Google</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BotonGoogle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});