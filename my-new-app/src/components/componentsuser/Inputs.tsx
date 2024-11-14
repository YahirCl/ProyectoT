import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

function Inputs({ secureTextEntry = false, placeholder = '', value, onChangeText }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value} // Aquí pasamos el valor del input
                onChangeText={onChangeText} // Aquí pasamos la función para manejar el cambio de texto
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '40%',
        marginBottom : 12,
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 3,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
});

export default Inputs;
