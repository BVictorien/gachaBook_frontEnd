//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Button, Card, Badge } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const CartScreen = () => {
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
        <Button buttonStyle={styles.points} title="6pts" />
      </View>
      <Card.Divider />
    </View>
  );
}

const CartScreen = (props) => {
  //////////////////////////////////////States and vars///////////////////////////

  /////////////////////////////////////Return////////////////////////////////////
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.inscription}>Panier</Text>
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require("../assets/logoGachaBook.png")}
        />
        <Text style={styles.text}>GachaBook</Text>
      </View>
      <ScrollView>
        <View>
          <BookDetailsCard />
          <BookDetailsCard />
          <BookDetailsCard />
          <BookDetailsCard />
          <BookDetailsCard />
        </View>
      </ScrollView>
      <View style={styles.total}>
        <Text style={styles.totalText}>Total</Text>
        <Text>69 pts</Text>
      </View>
      <View style={styles.buttons}>
        <Button buttonStyle={styles.payer} title="Payer" />
        <Button
          buttonStyle={styles.reap}
          title="Réaprovisionner votre compte"
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1E202A",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
  },
  connexion: {
    color: "#F5960D",
  },
  description: {
    color: "#fff",
  },
  bookItem: {
    backgroundColor: "#1E202A",
    flexDirection: "row",
    marginBottom: 6,
    padding: 10,
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
    alignItems: "center",
  },
  points: {
    marginLeft: 10,
  },
  total: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    flexDirection: "row",
    marginLeft: "auto",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 50,
  },
  totalText: {
    marginRight: 50,
  },
  buttons: {
    alignItems: "center",
    marginBottom: 20,
  },
  payer: {
    backgroundColor: "#F5960D",
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
  },
  reap: {
    backgroundColor: "#6D7D8B",
    borderRadius: 50,
    width: 300,
  },
});
