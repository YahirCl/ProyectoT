import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Seguidores from '../components/Dashboard/Seguidores';
import Postreali from '../components/Dashboard/Postreali';
import Post from '../components/Dashboard/Post';
import Buscador from '../components/Dashboard/Buscador';
import Perfil from '../components/Dashboard/Perfil';
import Navbar from '../components/Dashboard/Navbar';
import Vista from '../components/Post/Vista';
import ImagePost from '../components/Dashboard/ImagePost';

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState('Inicio'); // Estado para manejar la sección seleccionada

  const renderContent = () => {
    switch (selectedSection) {
      case 'Inicio':
        return (
          <>
          
          </>
        );
      case 'Perfil':
        return <View style={styles.contentText}><Perfil /> </View>;
      default:
        return null;
    }
  };

  return (
  <View>
    <Navbar />
      <View style={styles.container}>
        <View style={styles.sidebar}>
          <ImagePost />
        </View>
          <ScrollView style={styles.mainFeed} contentContainerStyle={styles.mainFeedContent}>
           {renderContent()}
            <Post/>
            <Postreali />
            <Postreali />
            <Postreali />

          </ScrollView>
      <View style={styles.trending}>
        <Seguidores />
      </View>
      </View>
    </View  >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#F0F3F4',
    padding: 10,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sidebarText: {
    color: '#fff',
    fontSize: 20, // Aumenta el tamaño del texto
    marginLeft: 10,
  },
  mainFeed: {
    flex: 1,
    padding: 10,
  },
  mainFeedContent: {
    paddingBottom: 20, // Añade un poco de espacio al final
  },
  contentText: {
    fontSize: 18,
    },
  trending: {
    width: '20%',
    backgroundColor: '#F0F3F4',
    padding: 10,
  },
});

export default Dashboard;
