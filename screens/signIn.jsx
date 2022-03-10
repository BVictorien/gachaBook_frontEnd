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
import AsyncStorage from '@react-native-async-storage/async-storage';

///////////////////////////////////Function//////////////////////////////////////////////////
function SignIn(props) {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [listErrorsSignIn, setErrorsSignIn] = useState([]);

  var handleSubmitSignin = async (emailFromFront, passwordFromFront, token) => {
    const data = await fetch('http://192.168.10.136:3000/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}&token=${token}`,
    });

    const body = await data.json();
    // console.log(body.userId);
    if (body.result == true) {
      props.addToken(body.token);
      props.addUsername(body.user.username);
      props.getUserId(body.user._id);
      console.log(body);
      setUserExists(true);

      let userProfil = {
        count_rating: body.user.count_rating,
        points: body.user.points,
        level: body.user.level,
      };
      props.getUserProfil(userProfil);
      AsyncStorage.setItem('userProfil', JSON.stringify(userProfil));

      const hihi = async () => {
        let fechedUserBooks = await fetch(
          `http://192.168.10.136:3000/get-user-books?userId=${body.userId}`
        );
        let userBooks = await fechedUserBooks.json();

        AsyncStorage.setItem('userBooks', JSON.stringify(userBooks));
      };
      hihi();

      const haha = async () => {
        let fechedUserWishlist = await fetch(
          `http://192.168.10.136:3000/user-wishList?userId=${body.userId}`
        );
        let userWishList = await fechedUserWishlist.json();

        AsyncStorage.setItem('userWishList', JSON.stringify(userWishList));
      };
      haha();

      AsyncStorage.setItem('userId', JSON.stringify(body.userId));

      AsyncStorage.setItem('userName', JSON.stringify(body.user.username));

      props.navigation.navigate('BottomNavigator');
    } else {
      setErrorsSignIn(body.error);
    }
  };

  let tabErrorSignIn = listErrorsSignIn.map((error, i) => {
    return <Text style={styles.error}>{error}</Text>;
  });

  ///////////////////////////////////Return////////////////////////////////////
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/bg3.png')}
        resizeMode="cover"
        style={styles.bg}
      ></ImageBackground>
      <ScrollView>
        <View style={styles.header}>
          <Ionicons
            name="close"
            size={25}
            color="#032547"
            onPress={() => props.navigation.navigate('BottomNavigator')}
          />

          {/* <Text
            onPress={() =>
              props.navigation.navigate('SignUp', { screen: 'SignUp' })
            }
            style={styles.connexion}
          >
            Inscription
          </Text> */}
        </View>
        <View style={styles.logo}>
          <Image style={styles.image} source={require('../assets/pic3.png')} />
          <Text style={styles.title}>Connexion</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Input
            inputContainerStyle={{ borderBottomWidth: 0 }}
            containerStyle={{ width: 360 }}
            inputStyle={styles.input}
            placeholder="  Email"
            onChangeText={(val) => setSignInEmail(val)}
          />
          <Input
            inputContainerStyle={{ borderBottomWidth: 0 }}
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
          <Button
            buttonStyle={styles.signUp}
            title="Inscription"
            onPress={() =>
              props.navigation.navigate('SignUp', { screen: 'SignUp' })
            }
          />
          <Text style={styles.connexion}>Mot de passe oublié ? </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
/////////////////////////////////////////////Styles//////////////////////////////////////////////////
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
    // marginTop: 30,
    padding: 10,
  },
  logo: {
    alignItems: 'center',
  },
  title: {
    color: '#252525',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
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
    margin: 10,
  },
  google: {
    backgroundColor: 'red',
    borderRadius: 50,
    margin: 10,
  },
  signIn: {
    backgroundColor: '#032547',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
  },
  signUp: {
    backgroundColor: '#B0CAE2',
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
    getUserId: function (userId) {
      dispatch({ type: 'getUserId', userId: userId });
    },
    getUserProfil: function (userProfil) {
      dispatch({ type: 'getUser', userProfil });
    },
  };
}
export default connect(null, mapDispatchToProps)(SignIn);
