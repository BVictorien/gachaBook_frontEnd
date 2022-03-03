//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React, {useState} from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';

import {connect} from 'react-redux';

///////////////////////////////////Function//////////////////////////////////////////////////
function SignIn(props) {

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [listErrorsSignIn, setErrorsSignIn] = useState([]);


  var handleSubmitSignin = async (emailFromFront, passwordFromFront, token) => {
    const data = await fetch('http://192.168.10.117:3000/sign-in', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}&token=${token}`
    });

    const body = await data.json()
    if(body.result == true){
      props.addToken(body.token)
      props.addUsername(body.user.username)
      console.log(body.user.username)
      setUserExists(true)
      props.navigation.navigate('Profile')
    }  else {
      setErrorsSignIn(body.error)
    }
  }

  let tabErrorSignIn = listErrorsSignIn.map((error, i) => {
    return(<Text style={styles.error}>{error}</Text>)
  })

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
          onPress={() => props.navigation.navigate('SignUp', {screen: 'SignUp'})}
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
          onChangeText={(val) => setSignInEmail(val)}
        />
        <Input
          containerStyle={{ width: 370 }}
          inputStyle={styles.input}
          placeholder="Mot de passe"
          onChangeText={(val) => setSignInPassword(val)}
          secureTextEntry={true}
        />
        {tabErrorSignIn}
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
        <Button buttonStyle={styles.signIn} title="Connexion" onPress={() => handleSubmitSignin(signInEmail, signInPassword, props.token)}/>
        <Text style={styles.connexion}>Mot de passe oublié ? </Text>
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
  signIn: {
    backgroundColor: '#F5960D',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
  },
  connexion: {
    color: '#F5960D',
    fontStyle: 'italic',
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
});

function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      dispatch({type: 'addToken', token: token})
    },
    addUsername: function(username){
      dispatch({type: 'addUsername', username: username})
    }
  }
}
export default connect(
  null,
  mapDispatchToProps
)(SignIn)
