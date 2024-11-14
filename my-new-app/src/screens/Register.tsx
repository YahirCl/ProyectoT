import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Inputs from '../components/componentsuser/Inputs';
import BotonIniciar from '../components/componentsuser/BotonIniciar';
import TextoIniciar from '../components/componentsuser/TextoIniciar';

function Register() {
  const [nombre, setNombre] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  // Estados para los errores
  const [errorNombre, setErrorNombre] = useState('');
  const [errorNombreUsuario, setErrorNombreUsuario] = useState('');
  const [errorContrasena, setErrorContrasena] = useState('');
  const [errorConfirmarContrasena, setErrorConfirmarContrasena] = useState('');

  // Expresión regular para solo letras y espacios
  const soloLetras = (texto) => /^[A-Za-z\s]+$/.test(texto);

  // Expresión regular para validar contraseñas: al menos 8 caracteres, una letra y un número o símbolo
  const validarContrasena = (contrasena) => /^(?=.*[A-Za-z])(?=.*[0-9!@#\$%\^&\*])[A-Za-z0-9!@#\$%\^&\*]{8,}$/.test(contrasena);

  const validarFormulario = () => {
    let isValid = true;

    // Validar nombre
    if (!nombre) {
      setErrorNombre('El campo Nombre es obligatorio');
      isValid = false;
    } else if (!soloLetras(nombre)) {
      setErrorNombre('El nombre solo puede contener letras');
      isValid = false;
    } else {
      setErrorNombre('');
    }

    // Validar nombre de usuario
    if (!nombreUsuario) {
      setErrorNombreUsuario('El campo Nombre de usuario es obligatorio');
      isValid = false;
    } else if (!soloLetras(nombreUsuario)) {
      setErrorNombreUsuario('El nombre de usuario solo puede contener letras');
      isValid = false;
    } else {
      setErrorNombreUsuario('');
    }

    // Validar contraseña
    if (!contrasena) {
      setErrorContrasena('El campo Contraseña es obligatorio');
      isValid = false;
    } else if (!validarContrasena(contrasena)) {
      setErrorContrasena('La contraseña debe tener al menos 8 caracteres, una letra y un número o símbolo');
      isValid = false;
    } else {
      setErrorContrasena('');
    }

    // Validar confirmar contraseña
    if (contrasena !== confirmarContrasena) {
      setErrorConfirmarContrasena('Las contraseñas no coinciden');
      isValid = false;
    } else {
      setErrorConfirmarContrasena('');
    }

    // Si todo es válido, proceder con la creación de la cuenta
    if (isValid) {
      console.log('Cuenta creada exitosamente');
      // Aquí va la lógica para crear la cuenta (llamar API, etc.)
    }
  };

  return (
    <View style={styles.container}>
      <Image
                source={require('../assets/images/logo1.png')} // Reemplaza con la ruta de tu imagen
                style={styles.logo}
            />
      <Text style={styles.title}></Text>
      <View style={styles.innerContainer}>
        {/* Input de Nombre */}
        <Inputs 
          placeholder="Introduce tu nombre" 
          value={nombre} 
          onChangeText={setNombre} 
        />
        {errorNombre ? <Text style={styles.errorText}>{errorNombre}</Text> : null}

        {/* Input de Nombre de usuario */}
        <Inputs 
          placeholder="Introduce tu nombre de usuario" 
          value={nombreUsuario} 
          onChangeText={setNombreUsuario} 
        />
        {errorNombreUsuario ? <Text style={styles.errorText}>{errorNombreUsuario}</Text> : null}

        {/* Input de Contraseña */}
        <Inputs 
          placeholder="Introduce una contraseña" 
          secureTextEntry={true} 
          value={contrasena} 
          onChangeText={setContrasena} 
        />
        {errorContrasena ? <Text style={styles.errorText}>{errorContrasena}</Text> : null}

        {/* Input de Confirmar Contraseña */}
        <Inputs 
          placeholder="Repite la contraseña" 
          secureTextEntry={true} 
          value={confirmarContrasena} 
          onChangeText={setConfirmarContrasena} 
        />
        {errorConfirmarContrasena ? <Text style={styles.errorText}>{errorConfirmarContrasena}</Text> : null}

        {/* Botón para crear la cuenta */}
        <BotonIniciar text="Crear cuenta" onPress={validarFormulario} />
        
        {/* Texto para iniciar sesión */}
        <TextoIniciar text="Ya tengo una cuenta, Iniciar sesión." route={'Login'} />
      </View>
    </View>   
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  innerContainer: {
    width: '50%',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  logo: {
    width: 400, // Ajusta el tamaño según tus necesidades
    height: 400,
    marginBottom: 10,
  },
});
