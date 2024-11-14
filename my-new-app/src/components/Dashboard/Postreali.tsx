import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NewsPost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://i.pinimg.com/564x/db/49/17/db4917650f8852d670b4aa4acc02ce0d.jpg' }} style={styles.profilePic} />
        <View style={styles.headerText}>
          <Text style={styles.newsTitle}>Noticias Manzanillo</Text>
          <Text style={styles.timeStamp}>8 hours ago</Text>
        </View>
      </View>
      <Text style={styles.content}>
        Bloquean Carril en el Boulevard Desde Las Hadas a Brisas... para Desfile. Usa otra Vialidad, este lunes 16 de septiembre.
      </Text>
      <View style={styles.reactions}>
        <TouchableOpacity style={styles.likeButton}>
          <FontAwesome name="thumbs-up" size={20} color="black" />
          <Text style={styles.likesText}>Leon Ruiz and 329 others</Text>
        </TouchableOpacity>
        <Text style={styles.stats}>86 comments · 34 shares</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="thumbs-up" size={20} color="black" />
          <Text style={styles.actionText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="comment-outline" size={20} color="black" />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="share-outline" size={20} color="black" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeStamp: {
    fontSize: 12,
    color: 'gray',
  },
  content: {
    fontSize: 14,
    marginBottom: 10,
  },
  reactions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  likesText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000',
  },
  stats: {
    fontSize: 12,
    color: 'gray',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000',
  },
});

export default NewsPost;