import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import BotonGoogle from '../components/componentsuser/BotonGoogle';
import ComponentOr from '../components/componentsuser/ComponentOr';
import Inputs from '../components/componentsuser/Inputs';
import BotonIniciar from '../components/componentsuser/BotonIniciar';
import TextoIniciar from '../components/componentsuser/TextoIniciar';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [errorUsuario, setErrorUsuario] = useState('');
    const [errorContrasena, setErrorContrasena] = useState('');

    const validarFormulario = async () => {
        let isValid = true;

        if (!usuario) {
            setErrorUsuario('El campo Usuario es obligatorio');
            isValid = false;
        } else {
            setErrorUsuario('');
        }

        if (!contrasena) {
            setErrorContrasena('El campo Contraseña es obligatorio');
            isValid = false;
        } else {
            setErrorContrasena('');
        }

        if (isValid) {
            try {
                const response = await autenticarUsuario(usuario, contrasena);
                if (response.success) {
                    Alert.alert('Login exitoso', 'Bienvenido a XpresaT');
                } else {
                    Alert.alert('Error', 'Usuario o contraseña incorrectos');
                }
            } catch (error) {
                Alert.alert('Error', 'Hubo un problema con la autenticación');
            }
        }
    };

    return (
        <View style={styles.container}>
            {/* Imagen agregada aquí */}
            <Image
                source={require('../assets/images/logo1.png')} // Reemplaza con la ruta de tu imagen
                style={styles.logo}
            />
            <Text style={styles.title}></Text>
            <View style={styles.innerContainer}>
                <BotonGoogle />
                <ComponentOr />
                
                <Inputs
                    placeholder="Usuario"
                    value={usuario}
                    onChangeText={setUsuario}
                />
                {errorUsuario ? <Text style={styles.errorText}>{errorUsuario}</Text> : null}

                <Inputs
                    secureTextEntry={true}
                    placeholder="Contraseña"
                    value={contrasena}
                    onChangeText={setContrasena}
                />
                {errorContrasena ? <Text style={styles.errorText}>{errorContrasena}</Text> : null}

                <BotonIniciar text="Iniciar sesión" onPress={validarFormulario} />
                <TextoIniciar text={"¿No tienes cuenta? Regístrate."} route={'Register'} />
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 400, // Ajusta el tamaño según tus necesidades
        height: 400,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
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
});
