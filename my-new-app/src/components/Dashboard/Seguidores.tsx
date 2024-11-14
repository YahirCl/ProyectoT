import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

// Definición de tipos para los props de cada usuario
type UserProps = {
  id: string;
  name: string;
  username: string;
  verified: boolean;
  image: string;
};

// Datos de ejemplo, puedes reemplazarlo con tus datos dinámicos
const users: UserProps[] = [
  {
    id: '1',
    name: 'MedioTiempo',
    username: '@mediotiempo',
    verified: true,
    image: 'https://i.pinimg.com/736x/41/3c/bf/413cbf2c7ba27e13b2d3a9eb815f5264.jpg', // Reemplaza con una URL real
  },
  {
    id: '2',
    name: 'DANIKONGI',
    username: '@DaniKongi',
    verified: true,
    image: 'https://i.pinimg.com/474x/a5/e7/b5/a5e7b5f3a5b985136906a3fae64b4b60.jpg', // Reemplaza con una URL real
  },
  {
    id: '3',
    name: 'GX Fit1nho',
    username: '@Fit1nho',
    verified: true,
    image: 'https://i.pinimg.com/564x/d0/b6/ff/d0b6ffcf89c04dc05f26b89af1f81eb2.jpg', // Reemplaza con una URL real
  },
];

const FollowSuggestions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A quién seguir</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
            </View>
            {item.verified && (
              <Text style={styles.verifiedIcon}>✔️</Text>
            )}
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Seguir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity>
        <Text style={styles.showMoreText}>Mostrar más</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    color: '#888',
  },
  verifiedIcon: {
    color: '#1DA1F2',
    fontSize: 18,
  },
  followButton: {
    backgroundColor: '#1DA1F2',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  followButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  showMoreText: {
    color: '#1DA1F2',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default FollowSuggestions;
