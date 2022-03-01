import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { Image } from 'react-native-elements';

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import BookDetails from '../components/BookDetails';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, marginTop: 50 }}>
        <View style={styles.topContainer}>
          <Text style={{ color: '#fff' }}>Hello</Text>
          <Text style={{ color: '#fff' }}>Nicolas Jevtic</Text>
        </View>

        <View style={styles.navigation}>
          <View style={styles.link}>
            <AntDesign
              name="scan1"
              size={24}
              color="#6D7D8B"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: '#fff' }}>Scan</Text>
          </View>
          <View style={styles.link}>
            <EvilIcons
              name="location"
              size={24}
              color="#6D7D8B"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: '#fff' }}>Get Point</Text>
          </View>
          <View style={styles.link}>
            <FontAwesome
              name="credit-card-alt"
              size={24}
              color="#6D7D8B"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: '#fff' }}>My Card</Text>
          </View>
        </View>
        <Text style={styles.title}>Mes livres en ventes :</Text>
        <ScrollView horizontal={true}>
          <View style={styles.sliderHorizontal}>
            <Image
              style={styles.imageBook}
              resizeMode="cover"
              source={require('../assets/favicon.png')}
            />
            <Image
              style={styles.imageBook}
              resizeMode="cover"
              source={require('../assets/favicon.png')}
            />
            <Image
              style={styles.imageBook}
              resizeMode="cover"
              source={require('../assets/favicon.png')}
            />
            <Image
              style={styles.imageBook}
              resizeMode="cover"
              source={require('../assets/favicon.png')}
            />
            <Image
              style={styles.imageBook}
              resizeMode="cover"
              source={require('../assets/favicon.png')}
            />
          </View>
        </ScrollView>
        <Text style={styles.title}>Mes Favoris :</Text>
        <View style={styles.containerFavorites}>
          <BookDetails style={{ width: '100%', height: '25%' }}></BookDetails>
          <BookDetails style={{ width: '100%', height: '25%' }}></BookDetails>
          <BookDetails style={{ width: '100%', height: '25%' }}></BookDetails>
          <BookDetails style={{ width: '100%', height: '25%' }}></BookDetails>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E202A',
    color: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  topContainer: {
    marginTop: 30,
    marginLeft: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(192, 195, 219,0.24)',
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#ffff',
    margin: 10,
    fontSize: 20,
  },
  imageBook: {
    width: 100,
    height: 100,
    margin: 20,
  },
  sliderHorizontal: {
    flexDirection: 'row',
  },
  // containerFavorites: {
  //   justifyContent: 'center',
  // },
});
