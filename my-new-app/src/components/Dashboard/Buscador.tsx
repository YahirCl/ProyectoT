import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="magnify" size={24} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Buscar"
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor="#666"
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F2F5', // Facebook-like light grey background
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000', // Text color
  }
});

export default SearchBar;
