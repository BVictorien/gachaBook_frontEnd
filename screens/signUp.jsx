//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";

///////////////////////////////////Function//////////////////////////////////////////////////
function signUp(props) {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Button
          title="X"
          onPress={() => props.navigation.navigate("BottomNavigator")}
        />
        <Text style={styles.text}>Inscription</Text>
        <Button title="Connexion" />
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require("../assets/logo-gachaBook.png")}
        />
        <Text style={styles.text}>GachaBook</Text>
      </View>
      <View>
        <Input placeholder="Nom" />
        <Input placeholder="Email" />
        <Input placeholder="Mot de passe" />
        <Button buttonStyle={styles.buttton} title="Inscription avec Facebook" />
        <Button title="Inscription avec Google" />
        <Button title="Inscription" />
      </View>
    </View>
  );
}
///////////////////////////////////Styles//////////////////////////////////////////////////
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1E202A",
    justifyContent: "space-evenly",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: "white",
    fontSize: 35,
  },
  buttton: {
    borderRadius: 50,
    
  },
});

export default signUp;
