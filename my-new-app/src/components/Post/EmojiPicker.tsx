import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const emotions = [
  { emoji: '😃', label: 'contento' },  
  { emoji: '😡', label: 'enojado' },
  { emoji: '😂', label: 'divertido' },
  { emoji: '😎', label: 'genial' },
  { emoji: '😜', label: 'loco' },
  { emoji: '😱', label: 'asustado' },
  { emoji: '😢', label: 'triste' },
  { emoji: '😳', label: 'avergonzado' }, 
  { emoji: '😴', label: 'cansado' },
  { emoji: '🤢', label: 'enfermo' }, 
  { emoji: '😊', label: 'feliz' },
  { emoji: '😍', label: 'amado' },
  { emoji: '😔', label: 'desganado' },
  { emoji: '😁', label: 'agradecido' },
  { emoji: '🤩', label: 'encantador' },
  { emoji: '🙏', label: 'bendecido' },
  { emoji: '🤔', label: 'pensativo' },
  {emoji : '🤯', label: 'sorprendido'},

];

 
const EmojiPicker = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState(emotions[0]);

  const handleSelect = (emotion) => {
    setSelectedEmotion(emotion);
    setExpanded(false); // Cierra el menú de selección de emojis
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.emojiButton}
        onPress={toggleExpanded}
      >
        <Text style={styles.emoji}>{selectedEmotion.emoji}</Text>
        <Text style={styles.label}>{selectedEmotion.label}</Text>
      </TouchableOpacity>
      {expanded && (
        <ScrollView style={styles.dropdown} horizontal showsHorizontalScrollIndicator={false}>
          {emotions.map((emotion, index) => (
            <TouchableOpacity
              key={index}
              style={styles.emojiButton}
              onPress={() => handleSelect(emotion)}
            >
              <Text style={styles.emoji}>{emotion.emoji}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  emojiButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  dropdown: {
    marginTop: 10,
    backgroundColor: 'white',
  },
  emoji: {
    fontSize: 24,
  },
  label: {
    color: 'black',
    marginTop: 5,
    fontSize  : 15,
  },
});

export default EmojiPicker;
