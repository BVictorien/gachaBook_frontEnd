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
        style={[styles.bookItem, styles.shadowCard]}
        onPress={() => this.props.navigation.navigate('BookScreen')}
      >
        <Card.Divider />
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require('../assets/nicolas.jpg')}
        />
        <View>
          <Text style={styles.name}>Titre</Text>
          <Text style={styles.description}>Auteur</Text>
        </View>
        {/* <View style={styles.icons}>
          <Ionicons
            name={(iconName = 'heart')}
            size={25}
            color={'red'}
            style={{ padding: 7 }}
          />
          <Ionicons
            name={(iconName = 'basket')}
            size={25}
            color={'#252525'}
            style={{ padding: 7 }}
          />
        </View> */}
        <Card.Divider />
      </TouchableOpacity>
    );
  }
}
//////////////////////////////////////Styles///////////////////////////////////////////////
const styles = StyleSheet.create({
  bookItem: {
    // backgroundColor: '#CADCE6',
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: 350,
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 3,
  },
  name: {
    color: '#252525',
    padding: 5,
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 21,
  },
  description: {
    color: '#252525',
    paddingLeft: 5,
  },
  icons: {
    marginLeft: 'auto',
    color: '#252525',
    // flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
    marginRight: 15,
  },
  image: {
    width: 60,
    height: 80,
    marginRight: 10,
    margin: 10,
    // borderRadius: 50,
  },
  // shadowCard: {
  //   shadowColor: '#171717',
  //   shadowOffset: { width: -2, height: 4 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 3,
  // },
});
