//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

//////////////////////////////////////Function///////////////////////////////////////////////
function Store(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/bg1.png')}
        resizeMode="cover"
        style={styles.bg}
      ></ImageBackground>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('BottomNavigator');
          }}
        >
          <Ionicons
            name={(iconName = 'arrow-back')}
            size={30}
            color={'#032547'}
            style={styles.backText}
          />
        </TouchableOpacity>
        <View style={styles.containerStore}>
          <View style={styles.logo}>
            <Image
              style={styles.image}
              source={require('../assets/pic5.png')}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.point}>5 €</Text>
            <Text style={styles.prix}>10 ₲</Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.point}>10 €</Text>
            <Text style={styles.prix}>20 ₲</Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.point}>15 €</Text>
            <Text style={styles.prix}>30 ₲</Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.point}>20 €</Text>
            <Text style={styles.prix}>40 ₲</Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.point}>25 €</Text>
            <Text style={styles.prix}>50 ₲</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
}
export default Store;
//////////////////////////////////////Style///////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#DBE6E7',
    // justifyContent: 'center',
    // marginTop: 30,
    // width: '100%',
    // height: '100%',
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('window').height / 0.5,
  },
  backButton: {
    marginTop: 15,
    color: '#032547',
    marginRight: 'auto',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
  },

  containerStore: {
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
    backgroundColor: '#032547',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
    marginTop: 10,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    width: '100%',
  },
  backText: {
    marginTop: 15,
    color: '#032547',
    marginTop: 50,
    marginRight: 'auto',
    marginLeft: 20,
    // fontSize: 20,
    fontWeight: 'bold',
  },
});
