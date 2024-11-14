import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Buscador from './Buscador';
import Notis from './Notis';

const Navbar = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para controlar la visibilidad del modal

  const handleUserPress = () => {
    navigation.navigate('Perfil'); // Asegúrate de que 'Perfil' es el nombre de la ruta de tu perfil
  };

  return (
    <View style={styles.navbar}>
      <View >
        <Buscador />
      </View>
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="home" size={30} color="#ffffff" /> {/* Tamaño del icono ajustado */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={handleUserPress}>
          <Icon name="user" size={30} color="#ffffff" /> {/* Tamaño del icono ajustado */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => setIsModalVisible(true)}>
          <Icon name="bell" size={30} color="#ffffff" /> {/* Tamaño del icono ajustado */}
        </TouchableOpacity>
        <Notis isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#3b5998',
    paddingHorizontal: 10,
  },
  leftContainer: {
    justifyContent: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '18%', // Aumenta el margen derecho para separar los iconos
    flex: 1,
  },
  iconButton: {
    marginLeft: 15, // Aumenta el margen izquierdo para separar los iconos
  },
});

export default Navbar;