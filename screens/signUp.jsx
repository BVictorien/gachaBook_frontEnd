//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';

///////////////////////////////////Function//////////////////////////////////////////////////
function SignUp(props) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [listErrorsSignUp, setErrorsSignUp] = useState([]);

  const handleSubmitSignUp = async () => {
    const data = await fetch('http://192.168.10.124:3000/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `usernameFromFront=${signUpUsername}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}&token=${token}`,
    });
    const body = await data.json();
    if (body.result == true) {
      props.addToken(body.token);
      console.log(body.token);
      setUserExists(true);
      props.navigation.navigate('SignIn');
    } else {
      setErrorsSignUp(body.error);
    }
  };

  let tabErrorSignUp = listErrorsSignUp.map((error, i) => {
    return <Text style={styles.error}>{error}</Text>;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/bg2.png')}
        resizeMode="cover"
        style={styles.bg}
      ></ImageBackground>
      <ScrollView>
        <View style={styles.header}>
          <Ionicons
            name="close"
            size={25}
            color="#BDBDBD"
            onPress={() => props.navigation.navigate('BottomNavigator')}
          />

          <Text
            onPress={() => props.navigation.navigate('SignIn')}
            style={styles.connexion}
          >
            Connexion
          </Text>
        </View>
        <View style={styles.logo}>
          <Image style={styles.image} source={require('../assets/pic3.png')} />
          <Text style={styles.title}>Inscription</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Input
            containerStyle={{ width: 360 }}
            inputStyle={styles.input}
            placeholder="  Pseudo"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            onChangeText={(val) => setSignUpUsername(val)}
          />
          <Input
            containerStyle={{ width: 360 }}
            inputStyle={styles.input}
            placeholder="  Email"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            onChangeText={(val) => setSignUpEmail(val)}
          />
          <Input
            containerStyle={{ width: 360 }}
            inputStyle={styles.input}
            placeholder="  Mot de passe"
            secureTextEntry={true}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            onChangeText={(val) => setSignUpPassword(val)}
          />
          {tabErrorSignUp}
          <Button
            buttonStyle={styles.signUp}
            title="Inscription"
            onPress={() => handleSubmitSignUp()}
          />
          <Text style={{ fontWeight: 'bold' }}>ou</Text>
          <Text style={{ fontWeight: 'bold' }}>S'inscrire avec :</Text>
          <View style={styles.button}>
            <Button
              buttonStyle={styles.facebook}
              icon={<Ionicons name="logo-facebook" size={24} color="white" />}
            />
            <Button
              buttonStyle={styles.google}
              icon={<Ionicons name="logo-google" size={24} color="white" />}
            />
            <Button
              buttonStyle={styles.google}
              icon={<Ionicons name="logo-google" size={24} color="white" />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
///////////////////////////////////Styles//////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBE6E7',
    justifyContent: 'space-evenly',
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('window').height / 0.5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
  },
  logo: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 35,
  },
  title: {
    color: '#252525',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
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
    margin: 10,
  },
  google: {
    backgroundColor: 'red',
    borderRadius: 50,
    margin: 10,
  },
  signUp: {
    backgroundColor: '#032547',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
  },
  connexion: {
    color: '#032547',
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 5,
  },
  error: {
    color: '#FF7',
    marginBottom: 25,
    fontStyle: 'italic',
    fontSize: 25,
    textShadowColor: 'rgba(252, 252, 252, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  button: {
    flexDirection: 'row',
  },
});

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: 'addToken', token: token });
    },
  };
}
export default connect(null, mapDispatchToProps)(SignUp);
