import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import * as Location from 'expo-location';
// import MapView, { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';

import BookDetails from '../components/BookDetails';

function SearchScreen() {
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
      <MapView
        style={{ width: '100%', height: '50%' }}
        // style={{ flex: 1 }}
        initialRegion={{
          latitude: 48.866667,
          longitude: 2.333333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Text style={styles.title}>Around Me</Text>
      <ScrollView style={{ flex: 1, marginTop: 10 }}>
        <BookDetails style={{ width: '100%', height: '25%' }}></BookDetails>
        <BookDetails style={{ width: '100%', height: '25%' }}></BookDetails>
        <BookDetails style={{ width: '100%', height: '25%' }}></BookDetails>
        <BookDetails style={{ width: '100%', height: '25%' }}></BookDetails>
      </ScrollView>
    </View>
    // </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E202A',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    color: '#ffff',
    margin: 10,
    fontSize: 20,
  },
});
