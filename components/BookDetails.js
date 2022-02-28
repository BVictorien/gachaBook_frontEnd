import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image, Card } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';

export default class BookDetails extends Component {
  render() {
    return (
      <View style={styles.bookItem}>
        <Card.Divider />
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require('../assets/favicon.png')}
        />
        <View>
          <Text style={styles.name}>Titre</Text>
          <Text style={styles.description}>Descriptions du livre</Text>
        </View>
        <View style={styles.icons}>
          <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
          <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
        </View>
        <Card.Divider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bookItem: {
    width: 300,
    backgroundColor: '#1E202A',
    flexDirection: 'row',
    marginBottom: 6,
    padding: 10,
  },
  name: {
    color: '#fff',
  },
  description: {
    color: '#fff',
  },
  icons: {
    marginLeft: 'auto',
    color: '#fff',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
});
