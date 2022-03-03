//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';

///////////////////////////////////Function//////////////////////////////////////////////////
function SignIn(props) {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [listErrorsSignIn, setErrorsSignIn] = useState([]);

  var handleSubmitSignin = async (emailFromFront, passwordFromFront, token) => {
    const data = await fetch('http://192.168.10.117:3000/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}&token=${token}`,
    });

    const body = await data.json();
    if (body.result == true) {
      props.addToken(body.token);
      props.addUsername(body.user.username);
      console.log(body.user.username);
      setUserExists(true);
      props.navigation.navigate('Profile');
    } else {
      setErrorsSignIn(body.error);
    }
  };

  let tabErrorSignIn = listErrorsSignIn.map((error, i) => {
    return <Text style={styles.error}>{error}</Text>;
  });

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Ionicons
          name="close"
          size={25}
          color="#BDBDBD"
          onPress={() => props.navigation.navigate('BottomNavigator')}
        />

        <Text
          onPress={() =>
            props.navigation.navigate('SignUp', { screen: 'SignUp' })
          }
          style={styles.connexion}
        >
          Inscription
        </Text>
      </View>
      <View style={styles.logo}>
        <Image style={styles.image} source={require('../assets/pic3.jpg')} />
      </View>
      <View style={styles.buttonContainer}>
        <Input
          containerStyle={{ width: 360 }}
          inputStyle={styles.input}
          placeholder="  Email"
          onChangeText={(val) => setSignInEmail(val)}
        />
        <Input
          containerStyle={{ width: 360 }}
          inputStyle={styles.input}
          placeholder="  Mot de passe"
          onChangeText={(val) => setSignInPassword(val)}
          secureTextEntry={true}
        />
        {tabErrorSignIn}
        <View style={styles.button}>
          <Button
            buttonStyle={styles.facebook}
            icon={<Ionicons name="logo-facebook" size={24} color="white" />}
          />
          <Button
            buttonStyle={styles.google}
            icon={<Ionicons name="logo-google" size={24} color="white" />}
          />
        </View>
        <Button
          buttonStyle={styles.signIn}
          title="Connexion"
          onPress={() =>
            handleSubmitSignin(signInEmail, signInPassword, props.token)
          }
        />
        <Text style={styles.connexion}>Mot de passe oublié ? </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#DBE6E7',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 30,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 340,
    height: 200,
    borderRadius: 5,
    // marginTop: 20,
  },
  image: {
    width: 250,
    height: 170,
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
    // padding: 20,
  },
  facebook: {
    borderRadius: 50,
    // width: 300,
    margin: 10,
  },
  google: {
    backgroundColor: 'red',
    borderRadius: 50,
    // width: 300,
    margin: 10,
  },
  signIn: {
    backgroundColor: '#007576',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
  },
  connexion: {
    color: '#007576',
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 5,
    backgroundColor: 'white',
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
    marginBottom: 10,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: 'addToken', token: token });
    },
    addUsername: function (username) {
      dispatch({ type: 'addUsername', username: username });
    },
  };
}
export default connect(null, mapDispatchToProps)(SignIn);
