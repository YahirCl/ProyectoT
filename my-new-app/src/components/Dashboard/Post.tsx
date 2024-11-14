import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EmojiPicker from '../Post/EmojiPicker';  // Asegúrate de tener esta importación correcta

const PostCreator = ({ navigation }) => {
  const [postText, setPostText] = useState('');

  const handleEmojiSelect = (emotion) => {
    setPostText(prevText => `${prevText}${emotion.emoji}`);
  };

  const handlePost = async () => {
    if (postText.trim()) {
      try {
        const response = await fetch('https://tu-api.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: postText }),
        });

        if (response.ok) {
          setPostText('');
          Alert.alert('Post creado', 'Tu post ha sido enviado al dashboard.');
          navigation.navigate('Dashboard'); // Aquí rediriges al dashboard
        } else {
          Alert.alert('Error', 'Hubo un problema al crear el post.');
        }
      } catch (error) {
        Alert.alert('Error', 'No se pudo conectar con el servidor.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
      </View>
      <TextInput
        style={styles.input}
        multiline
        placeholder="¿Cómo te sientes?"
        placeholderTextColor="#888"
        value={postText}
        onChangeText={setPostText}
        
      />
      <View style={styles.footer}>
      <EmojiPicker onSelect={handleEmojiSelect} />
        <TouchableOpacity onPress={handlePost} style={styles.postButton}>
          <Text style={styles.postButtonText}>Postear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderColor : 'black',
    borderWidth : 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    color: '#fff',
    fontSize: 16,
    minHeight: 100,
    borderColor: '#333',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  postButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PostCreator;
