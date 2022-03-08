import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import { Input, Icon } from 'react-native-elements';

import BookDetails from '../components/BookDetails';

function SearchScreen(props) {
  const [search, setSearch] = useState('');
  const updateSearch = (search) => {
    setSearch(search);
  };

  useEffect(() => {
    async function askPermissions() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        Location.watchPositionAsync({ distanceInterval: 2 }, (location) => {
          // console.log(location);
        });
      }
    }
    askPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Input
          placeholder="   Cherchez un livre..."
          onChangeText={updateSearch}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          rightIcon={<Icon name="search" size={30} color="#252525" />}
        />
      </View>
      <MapView
        style={{ width: '100%', height: '45%' }}
        // style={{ flex: 1 }}
        initialRegion={{
          latitude: 48.866667,
          longitude: 2.333333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}>Autour de moi :</Text>
      </View>
      <ScrollView style={{ flex: 1, marginTop: 10 }}>
        <View style={styles.container}>
          <BookDetails
            navigation={props.navigation}
            style={{ width: '100%', height: '25%' }}
          ></BookDetails>
          <BookDetails
            navigation={props.navigation}
            style={{ width: '100%', height: '25%' }}
          ></BookDetails>
          <BookDetails
            navigation={props.navigation}
            style={{ width: '100%', height: '25%' }}
          ></BookDetails>
          <BookDetails
            navigation={props.navigation}
            style={{ width: '100%', height: '25%' }}
          ></BookDetails>
        </View>
      </ScrollView>
    </View>
    // </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBE6E7',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#252525',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  search: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,

    margin: 10,
    marginTop: 40,
    borderRadius: 30,
  },
});
