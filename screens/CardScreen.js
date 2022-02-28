//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Button, Input, Card } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

//////////////////////////////////////Function///////////////////////////////////////////////
function BookDetailsCard() {
  return (
    <View style={styles.bookItem}>
      <Card.Divider />
      <Image
        style={styles.imageBook}
        resizeMode="cover"
        source={require("../assets/favicon.png")}
      />
      <View>
        <Text style={styles.name}>Titre</Text>
        <Text style={styles.description}>Descriptions du livre</Text>
      </View>
      <View style={styles.icons}>
        <Ionicons name={(iconName = "trash")} size={25} color={"gray"} />
        <Button title="6pts" />
      </View>
      <Card.Divider />
    </View>
  );
}

const CardScreen = (props) => {
  //////////////////////////////////////States and vars///////////////////////////

  /////////////////////////////////////Return////////////////////////////////////
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.connexion}>Back</Text>
        <Text style={styles.inscription}>Panier</Text>
        <Text style={styles.inscription}> </Text>
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require("../assets/logo-gachaBook.png")}
        />
        <Text style={styles.text}>GachaBook</Text>
      </View>
      <BookDetailsCard />
    </View>
  );
};

export default CardScreen;
//////////////////////////////////////Style///////////////////////////////////////////////
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1E202A",
    justifyContent: "space-evenly",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  inscription: {
    color: "white",
    fontSize: 35,
    marginLeft: 35,
  },
  connexion: {
    color: "#F5960D",
  },
  description: {
    color: "#fff",
  },
  bookItem: {
    width: 300,
    backgroundColor: "#1E202A",
    flexDirection: "row",
    marginBottom: 6,
    padding: 10,
    justifyContent: "space-between",
  },
  name: {
    color: "#fff",
  },
  imageBook: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  icons: {
    flexDirection: "row",
    marginLeft: "auto",
  },
});
