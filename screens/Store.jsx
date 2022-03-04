//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

//////////////////////////////////////Function///////////////////////////////////////////////
function Store(props) {
  return (
    <View style={styles.background}>
      <Text
        onPress={() => {
          props.navigation.navigate('BottomNavigator');
        }}
        style={styles.backButton}
      >
        back
      </Text>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={styles.image} source={require('../assets/pic5.png')} />
        </View>
        <View style={styles.input}>
          <Text style={styles.point}>15 points</Text>
          <Text style={styles.prix}>7 €</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.point}>25 points</Text>
          <Text style={styles.prix}>10 €</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.point}>35 points</Text>
          <Text style={styles.prix}>15 €</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.point}>50 points</Text>
          <Text style={styles.prix}>20 €</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.point}>100 points</Text>
          <Text style={styles.prix}>25 €</Text>
        </View>
        <Button
          onPress={() => {
            props.navigation.navigate('paymentCard');
          }}
          buttonStyle={styles.button}
          title="Recharger mon compte"
        />
        <Image source={require('../assets/cardBrand.png')} />
      </View>
    </View>
  );
}
export default Store;
//////////////////////////////////////Style///////////////////////////////////////////////
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#DBE6E7',
    // justifyContent: 'center',
    // marginTop: 30,
    width: '100%',
    height: '100%',
  },
  backButton: {
    marginTop: 15,
    color: '#007576',
    marginRight: 'auto',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
  },

  container: {
    alignItems: 'center',
  },
  title: {
    color: 'white',
    // fontSize: 25,
    fontWeight: 'bold',
  },
  title2: {
    color: 'white',
    // fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '95%',
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    // marginLeft: 20,
    // marginRight: 20,
    width: '80%',
  },
  point: {
    color: '#BDBDBD',
    // fontSize: 25,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  prix: {
    color: '#BDBDBD',
    marginLeft: 'auto',
    // fontSize: 25,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007576',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
    marginTop: 10,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
    width: '100%',
  },
});
