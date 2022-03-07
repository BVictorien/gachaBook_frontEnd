//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";

import { Ionicons } from "@expo/vector-icons";

import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

///////////////////////////////////Function//////////////////////////////////////////////////
function SignIn(props) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [listErrorsSignIn, setErrorsSignIn] = useState([]);

  var handleSubmitSignin = async (emailFromFront, passwordFromFront, token) => {
    const data = await fetch("http://192.168.10.144:3000/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}&token=${token}`,
    });

    const body = await data.json();
    // console.log(body.userId);
    if (body.result == true) {
      props.addToken(body.token);
      props.addUsername(body.user.username);
      props.getUserId(body.userId);
      setUserExists(true);

      const hihi = async () => {
        let fechedUserBooks = await fetch(
          `http://192.168.10.144:3000/get-user-books?userId=${body.userId}`
        );
        let userBooks = await fechedUserBooks.json();

        AsyncStorage.setItem("userBooks", JSON.stringify(userBooks));
      };
      hihi();

      const haha = async () => {
        let fechedUserWishlist = await fetch(
          `http://192.168.10.144:3000/user-wishList?userId=${body.userId}`
        );
        let userWishList = await fechedUserWishlist.json();

        AsyncStorage.setItem("userWishList", JSON.stringify(userWishList));
      };
      haha();

      props.navigation.navigate("BottomNavigator");
    } else {
      setErrorsSignIn(body.error);
    }
  };

  let tabErrorSignIn = listErrorsSignIn.map((error, i) => {
    return <Text style={styles.error}>{error}</Text>;
  });

  ///////////////////////////////////Return////////////////////////////////////
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Ionicons
          name="close"
          size={25}
          color="#BDBDBD"
          onPress={() => props.navigation.navigate("BottomNavigator")}
        />

        <Text
          onPress={() =>
            props.navigation.navigate("SignUp", { screen: "SignUp" })
          }
          style={styles.connexion}
        >
          Inscription
        </Text>
      </View>
      <View style={styles.logo}>
        <Image style={styles.image} source={require("../assets/pic3.png")} />
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
        <Text style={styles.connexion}>Mot de passe oublié ? </Text>
      </View>
    </View>
  );
}
/////////////////////////////////////////////Styles//////////////////////////////////////////////////
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#DBE6E7",
    justifyContent: "space-evenly",
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
  },
  title: {
    color: "#252525",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },

  text: {
    color: "white",
    fontSize: 35,
  },
  inscription: {
    color: "white",
    fontSize: 35,
    marginLeft: 35,
  },
  buttonContainer: {
    alignItems: "center",
  },
  facebook: {
    borderRadius: 50,
    margin: 10,
  },
  google: {
    backgroundColor: "red",
    borderRadius: 50,
    margin: 10,
  },
  signIn: {
    backgroundColor: "#007576",
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
  },
  connexion: {
    color: "#007576",
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    backgroundColor: "white",
  },
  error: {
    color: "#FF7",
    marginBottom: 25,
    fontStyle: "italic",
    fontSize: 25,
    textShadowColor: "rgba(252, 252, 252, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  button: {
    flexDirection: "row",
    marginBottom: 10,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: "addToken", token: token });
    },
    addUsername: function (username) {
      dispatch({ type: "addUsername", username: username });
    },
    getUserId: function (userId) {
      dispatch({ type: "getUserId", userId: userId });
    },
  };
}
export default connect(null, mapDispatchToProps)(SignIn);
