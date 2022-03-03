//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, Input, Text, Card } from "react-native-elements";

const BookDetailsCard = () => {
  return (
    <View style={styles.bookItem}>
      <Card.Divider />
      <Image
        style={styles.imageBook}
        resizeMode="cover"
        source={require("../assets/nicolas.jpg")}
      />
      <View>
        <Text style={styles.name}>Titre</Text>
        <Text style={styles.description}>Descriptions du livre</Text>
      </View>
      <View style={styles.icons}>
        <Button buttonStyle={styles.points} title="6pts" />
      </View>
      <Card.Divider />
    </View>
  );
};

function PaymentEnCours(props) {
  return (
    <View style={styles.background}>
      <Text
        onPress={() => {
          props.navigation.navigate("BottomNavigator");
        }}
        style={styles.textBack}
      >
        back
      </Text>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require("../assets/logoGachaBook.png")}
        />
        <Text style={styles.text}>GachaBook</Text>
      </View>

      <Text style={styles.text2}>Achats en cours</Text>

      <BookDetailsCard />
      <BookDetailsCard />
      <BookDetailsCard />

      <View style={styles.buttons}>
        <Button buttonStyle={styles.button1} title="Valider" />
        <Button buttonStyle={styles.button2} title="Annuler" />
      </View>
    </View>
  );
}

export default PaymentEnCours;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1E202A",
    marginTop: 30,
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
  text2: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 20,
    color: "white",
    fontSize: 20,
  },
  imageBook: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  description: {
    color: "#fff",
  },
  icons: {
    flexDirection: "row",
    marginLeft: "auto",
    alignItems: "center",
  },
  points: {
    marginLeft: 10,
    backgroundColor: "#6D7D8B",
  },
  name: {
    color: "#fff",
  },
  bookItem: {
    backgroundColor: "#1E202A",
    flexDirection: "row",
    marginBottom: 6,
    padding: 10,
  },
  buttons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  button1: {
    backgroundColor: "#519F44",
    borderRadius: 50,
    marginRight: 15,
    width: 170,
  },
  button2: {
    backgroundColor: "#E50909",
    borderRadius: 50,
    width: 170,
  },
  textBack: {
    marginTop: 30,
    marginLeft: 15,
    color: "#F5960D",
  },
});
