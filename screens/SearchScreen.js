import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as Location from 'expo-location';
// import MapView, { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';

function SearchScreen() {
  useEffect(() => {
    async function askPermissions() {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        Location.watchPositionAsync({ distanceInterval: 2 }, (location) => {
          console.log(location);
        });
      }
    }
    askPermissions();
  }, []);

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 48.866667,
        longitude: 2.333333,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
