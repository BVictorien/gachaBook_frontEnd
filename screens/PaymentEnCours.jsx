//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Input, Text, Card } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

//////////////////////////////////////Function//////////////////////////////////////////////
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
        <View style={styles.buttons}>
          <Button buttonStyle={styles.button1} title="Valider" />
          <Button buttonStyle={styles.button2} title="Annuler" />
        </View>
      </View>
      <View style={styles.icons}>
        <Button buttonStyle={styles.points} title="6pts" />
      </View>

      <Card.Divider />
    </View>
  );
};
//////////////////////////////////////Function//////////////////////////////////////////////
function PaymentEnCours(props) {
  //////////////////////////////////////Methods//////////////////////////////////////////////
  /*----------------------------------------------------------- */
  const payment = async (sellerID, price, bookId) => {
    const data = await fetch("http://192.168.10.136:3000/update-seller", {
      method: "PUT",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `sellerID=${sellerID}&price=${price}`,
    });
    let updateUser = await fetch("http://192.168.10.136:3000/update-profil", {
      method: "PUT",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `userId=${props.userId}&count_rating=${props.userProfil.userProfil.count_rating}&points=${props.userProfil.userProfil.points}`,
    });
    let userProfil = {
      count_rating: props.userProfil.userProfil.count_rating,
      points: props.userProfil.userProfil.points,
      level: props.userProfil.userProfil.level,
    };

    AsyncStorage.setItem("userProfil", JSON.stringify(userProfil));

    let deleteBook = await fetch(
      `http://192.168.10.136:3000/delete-book?bookId=${bookId}`,
      {
        method: "DELETE",
      }
    );
  };

  /*----------------------------------------------------------- */
  useEffect(() => {
    console.log(props);
  }, []);
  /*----------------------------------------------------------- */
  const viw42 = props.cart.map((x, i) => {
    console.log(x);
    return (
      <View key={i} style={styles.bookItem}>
        <Card.Divider />
        <Image
          style={styles.imageBook}
          resizeMode="cover"
          source={{ uri: x.imageLink }}
        />
        <View>
          <Text style={styles.name}>{x.title}</Text>
          <Text style={styles.description}>{x.author}</Text>
          <View style={styles.buttons}>
            <Button
              onLongPress={() => {
                props.payFCart(x.id, x.price);
                payment(x.sellerID, x.price, x.id);
              }}
              buttonStyle={styles.button1}
              title="Valider"
            />
            <Button
              onLongPress={() => props.deleteFCart(x.id, x.price)}
              buttonStyle={styles.button2}
              title="Annuler"
            />
          </View>
        </View>
        <View style={styles.icons}>
          <Button buttonStyle={styles.points} title={x.price} />
        </View>

        <Card.Divider />
      </View>
    );
  });

  /*----------------------------------------------------------- */

  //////////////////////////////////////Return//////////////////////////////////////////////
  return (
    <View style={styles.background}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("BottomNavigator");
        }}
      >
        <Ionicons
          name={(iconName = "arrow-back")}
          size={30}
          color={"#007576"}
          style={styles.backText}
        />
      </TouchableOpacity>
      <View style={styles.logo}>
        <Image style={styles.image} source={require("../assets/pic7.png")} />
        {/* <Text style={styles.title}>Inscription</Text> */}
      </View>

      {viw42}
    </View>
  );
}

//////////////////////////////////////Redux//////////////////////////////////////////////
/*-------------------------------------------------------------*/
function mapStateToProps(state) {
  return {
    token: state.token,
    userId: state.userIdReducer,
    username: state.username,
    bookDetails: state.scanBookReducer,
    cart: state.cartReducer,
    total: state.cartTotalReducer,
    userProfil: state.userProfil,
    userProfil: state.userProfilReducer,
  };
}
/*-------------------------------------------------------------*/
function mapDispatchToProps(dispatch) {
  return {
    deleteFCart: function (bookId, price) {
      dispatch({ type: "deleteFCart", bookId });
      dispatch({ type: "subCart", price });
    },
    payFCart: function (bookId, price) {
      dispatch({ type: "deleteFCart", bookId });
      dispatch({ type: "subCart", price });
      dispatch({ type: "payer", price });
    },
  };
}
/*-------------------------------------------------------------*/
export default connect(mapStateToProps, mapDispatchToProps)(PaymentEnCours);

//////////////////////////////////////Styles//////////////////////////////////////////////
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#DBE6E7",
    // justifyContent: 'space-evenly',
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
    marginTop: 30,
    marginBottom: 30,
  },

  image: {
    // width: 100,
    // height: 100,
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
    color: "#252525",
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
    color: "#252525",
  },
  bookItem: {
    backgroundColor: "#DBE6E7",
    flexDirection: "row",
    marginBottom: 6,
    padding: 10,
  },
  buttons: {
    marginTop: 10,
    flexDirection: "row",
    // justifyContent: 'center',
  },
  button1: {
    backgroundColor: "#007576",
    borderRadius: 50,
    marginRight: 5,
    // width: 170,
  },
  button2: {
    backgroundColor: "#E50909",
    borderRadius: 50,
    // width: 170,
  },
  backText: {
    marginTop: 15,
    color: "#007576",
    marginRight: "auto",
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 30,
  },
});
