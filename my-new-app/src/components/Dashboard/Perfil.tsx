import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Postreali from '../Dashboard/Postreali';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Cover image and profile details */}
      <Image source={{ uri: 'https://i.pinimg.com/564x/9f/dd/c8/9fddc816eeeb47c1f43ea33c25015ccf.jpg' }} style={styles.coverImage} />
      <View style={styles.profileSection}>
        <Image source={{ uri: 'https://i.pinimg.com/564x/9f/dd/c8/9fddc816eeeb47c1f43ea33c25015ccf.jpg' }} style={styles.avatar} />
        <Text style={styles.profileName}>Yahir CL</Text>
        <Text style={styles.friendCount}>537 amigos</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Editar perfil</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* User Info */}
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>Vive en Manzanillo, Colima</Text>
        <Text style={styles.infoText}>De Manzanillo, Colima</Text>
        <Text style={styles.infoText}></Text>
      </View>

      {/* User Posts Section */}
      <View style={styles.postsSection}>
        <Text style={styles.sectionTitle}>Publicaciones</Text>
        <View style={styles.post}>
          <Postreali />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: -50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  friendCount: {
    color: 'gray',
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginLeft: 'auto',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
  },
  infoSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  infoText: {
    fontSize: 16,
    color: 'gray',
  },
  postsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  post: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  postContent: {
    fontSize: 16,
  },
});

export default ProfileScreen;
