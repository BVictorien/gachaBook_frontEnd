/////////////////////////////////////Import//////////////////////////////////////////////////
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Input,
  Card,
  Image,
  Text,
} from "react-native-elements";
import CustomSwitch from "../components/CustomSwitch";
import { Ionicons } from "@expo/vector-icons";

import BookDetails from "../components/BookDetails";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

/////////////////////////////////////Function////////////////////////////////////////////////
const UserScreen = (props) => {
  /////////////////////////////////////State declaration////////////////////////
  const [userBooks, setUserBooks] = useState([]);
  const [userProfil, setUserProfil] = useState([]);
  /////////////////////////////////////Methods//////////////////////////////////
  /*--------------------------------------------------- */
  useEffect(() => {
    const hoho = async () => {
      let fechedUser = await fetch(
        `http://192.168.10.136:3000/profil?userID=${props.bookDetails[0].sellerID}`
      );
      let userWishList = await fechedUser.json();
      setUserProfil(userWishList);
      console.log("USSSSSEEEERRRRR", userWishList);

      let fechedUserBooks = await fetch(
        `http://192.168.10.136:3000/get-user-books?userId=${props.bookDetails[0].sellerID}`
      );
      let userBooks = await fechedUserBooks.json();

      setUserBooks(userBooks);
    };
    hoho();
  }, []);

  /*--------------------------------------------------- */

  const vizw = userBooks.map((x) => {
    return (
      <TouchableOpacity
        style={[styles.bookItem, styles.shadowCard]}
        onPress={() => props.navigation.navigate("BookScreen")}
      >
        <Card.Divider />
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: x.image }}
        />
        <View>
          <Text style={styles.name}>{x.title}</Text>
          <Text style={styles.description}>{x.author}</Text>
        </View>

        <Card.Divider />
      </TouchableOpacity>
    );
  });

  /*--------------------------------------------------- */
  /*--------------------------------------------------- */
  /////////////////////////////////////return/////////////////////////////////////
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.banner}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("BookScreen");
            }}
          >
            <Ionicons
              name={(iconName = "arrow-back")}
              size={30}
              color={"#007576"}
              style={styles.backText}
            />
          </TouchableOpacity>
          <View style={styles.avatar}>
            {/* <Avatar
              size={150}
              rounded
              icon={{ name: 'adb', type: 'material' }}
              containerStyle={{ backgroundColor: 'red' }}
            ></Avatar> */}
            <Avatar
              size={200}
              rounded
              source={{
                uri: "https://randomuser.me/api/portraits/women/57.jpg",
              }}
              // title="Bj"
              containerStyle={{ backgroundColor: "grey" }}
            >
              {/* <Avatar.Accessory size={23} /> */}
            </Avatar>
          </View>
        </View>
        <View style={styles.stars}>
          <Text>{userProfil.username}</Text>
          <Text>Niveau : {userProfil.level}</Text>
          <Text>Points : {userProfil.points}</Text>
        </View>
        <Button
          buttonStyle={styles.buttonSend}
          title="Contacter le vendeur"
          onPress={() => props.navigation.navigate("Chat")}
          icon={{
            name: "envelope",
            type: "font-awesome",
            size: 15,
            color: "white",
          }}
          iconRight
        ></Button>

        {vizw}
      </View>
    </ScrollView>
  );
};

/////////////////////////////////////Redux////////////////////////////////////////////////
function mapStateToProps(state) {
  return {
    username: state.username,
    userId: state.userIdReducer,
    userProfil: state.userProfilReducer,
    bookDetails: state.scanBookReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    sendBookDetail: function (
      title,
      author,
      language,
      pageCount,
      barcode,
      editor,
      imageLink,
      description,
      year,
      id,
      price,
      sellerID
    ) {
      dispatch({
        type: "BookDetail",
        title,
        author,
        language,
        pageCount,
        barcode,
        editor,
        imageLink,
        description,
        year,
        id,
        price,
        sellerID,
      });
    },
    getUserProfil: function (userProfil) {
      dispatch({ type: "getUser", userProfil });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);

/////////////////////////////////////Styles////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DBE6E7",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  avatar: {
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  banner: {
    backgroundColor: "#007576",
    height: 175,
    width: "100%",
  },
  stars: {
    justifyContent: "center",
    marginTop: 100,
  },
  buttonSend: {
    backgroundColor: "#007576",
    alignItems: "center",
    width: 300,
    height: 50,
    marginTop: 10,
    borderRadius: 50,
  },
  containerFavorites: {
    width: 350,
  },
  textBack: {
    marginTop: 40,
    // color: '#007576',
    marginRight: "auto",
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    // paddingTop: 30,
  },
  bookItem: {
    // backgroundColor: '#CADCE6',
    backgroundColor: "#fff",
    flexDirection: "row",
    width: 350,
    marginBottom: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 3,
  },
  name: {
    color: "#032547",
    padding: 5,
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 21,
  },
  description: {
    color: "#032547",
    paddingLeft: 5,
  },
  icons: {
    marginLeft: "auto",
    color: "#032547",
    // flexDirection: 'row',
    padding: 5,
    justifyContent: "center",
    marginRight: 15,
  },
  image: {
    width: 60,
    height: 80,
    marginRight: 10,
    margin: 10,
    // borderRadius: 50,
  },
});
