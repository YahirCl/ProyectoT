import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const EmotionalSupportImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://i.pinimg.com/736x/bc/f6/2e/bcf62ea75b0effc1020cf50cdda93aaa.jpg',
    'https://i.pinimg.com/736x/3e/c6/4e/3ec64e9754ff01fd853a18a28ce63679.jpg',
    'https://i.pinimg.com/736x/05/77/6f/05776f99609e0ad9bf297e351f90ba25.jpg',
    'https://i.pinimg.com/736x/2f/a9/6f/2fa96fc6b828d98a015b321de4ec769b.jpg',
    'https://i.pinimg.com/736x/e3/25/2b/e3252b442a47d03654b1597cc201c1bd.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 10 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: images[currentImageIndex] }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    
  },
});

export default EmotionalSupportImages;
