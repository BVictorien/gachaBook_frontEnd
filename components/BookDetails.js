//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image, Card } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';
// import BookDetails from '../components/BookDetails';

//////////////////////////////////////Functions///////////////////////////////////////////////
export default class BookDetails extends Component {
  /**/

  render() {
    return (
      <TouchableOpacity
        style={styles.bookItem}
        onPress={() => this.props.navigation.navigate('BookScreen')}
      >
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
          <Ionicons name={(iconName = 'heart')} size={25} color={'#F5960D'} />
          <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
        </View>
        <Card.Divider />
      </TouchableOpacity>
    );
  }
}
//////////////////////////////////////Styles///////////////////////////////////////////////
const styles = StyleSheet.create({
  bookItem: {
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
