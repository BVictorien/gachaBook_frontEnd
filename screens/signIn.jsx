//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

///////////////////////////////////Function//////////////////////////////////////////////////
function signIn(props) {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Ionicons
          name="close"
          size={25}
          color="#BDBDBD"
          onPress={() => props.navigation.navigate('BottomNavigator')}
        />

        <Text style={styles.inscription}>Connexion</Text>
        <Text
          onPress={() => props.navigation.navigate('SignIn')}
          style={styles.connexion}
        >
          Inscription
        </Text>
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require('../assets/logoGachaBook.png')}
        />
        <Text style={styles.text}>GachaBook</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Input
          containerStyle={{ width: 370 }}
          inputStyle={styles.input}
          placeholder="Email"
        />
        <Input
          containerStyle={{ width: 370 }}
          inputStyle={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
        />
        <Button
          buttonStyle={styles.facebook}
          title={'Connexion avec Facebook'}
          icon={
            <Ionicons
              name="logo-facebook"
              size={24}
              color="white"
              style={{ marginRight: 20 }}
            />
          }
        />
        <Button
          buttonStyle={styles.google}
          title="Connexion avec Google    "
          icon={
            <Ionicons
              name="logo-google"
              size={24}
              color="white"
              style={{ marginRight: 20 }}
            />
          }
        />
        <Button buttonStyle={styles.signUp} title="Connexion" />
        <Text style={styles.connexion}>Mot de passe oublier ? </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#1E202A',
    justifyContent: 'space-evenly',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'white',
    fontSize: 35,
  },
  inscription: {
    color: 'white',
    fontSize: 35,
    marginLeft: 35,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  facebook: {
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
  },
  google: {
    backgroundColor: 'red',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
  },
  signUp: {
    backgroundColor: '#F5960D',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
  },
  connexion: {
    color: '#F5960D',
  },
  input: {
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
///////////////////////////////////Styles//////////////////////////////////////////////////

export default signIn;
