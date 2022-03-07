/////////////////////////////////////Import//////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { Input, Text, Icon, Button } from "react-native-elements";
import LatestBooks from "../components/LatestBooks";
import NearestBooks from "../components/NearestBooks";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen(props) {
  /////////////////////////////////////States and var///////////////////////////////////////
  let logout;
  
  const [search, setSearch] = useState("");
  const [last, setLast] = useState([]);
  var arrayTest = [
    {
      __v: 0,
      _id: "62223cf602fb57ba75864bc5",
      author: "Lucien Febvre",
      barcode: "9782130418795",
      condition: "",
      description: "",
      disponibility: true,
      editor: "Presses Universitaires de France - PUF",
      image:
        "http://books.google.com/books/content?id=vWwpAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      importDate: "2022-03-04T16:23:18.659Z",
      language: "fr",
      nb_pages: "210",
      price: "",
      sellerID: ["621f8666029586e9aebc8ad9"],
      title: "Martin Luther, un destin",
      year: "",
    },
    {
      __v: 0,
      _id: "6220dd156529d6f89749e6a7",
      author: "Brad Feld",
      barcode: "9781119594826",
      condition: "",
      description: "",
      disponibility: true,
      editor: "John Wiley ",
      image:
        "http://books.google.com/books/content?id=1jejDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      language: "en",
      nb_pages: "368",
      price: "",
      sellerID: ["621f8666029586e9aebc8ad9"],
      title: "Venture Deals",
      year: "",
    },
    {
      __v: 0,
      _id: "6220dd216529d6f89749e6aa",
      author: "Olivier Andrieu",
      barcode: "9782212143614",
      condition: "",
      description: "",
      disponibility: true,
      editor: "Editions Eyrolles",
      image:
        "http://books.google.com/books/content?id=R-dhDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      language: "fr",
      nb_pages: "675",
      price: "",
      sellerID: ["621f8666029586e9aebc8ad9"],
      title: "Réussir son référencement web",
      year: "",
    },
    {
      __v: 0,
      _id: "6220dd316529d6f89749e6ad",
      author: "Ilia Alshanetsky",
      barcode: "9780973862102",
      condition: "",
      description: "",
      disponibility: true,
      editor: "php/architect NanoBooks",
      image:
        "http://books.google.com/books/content?id=qNKbAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      language: "en",
      nb_pages: "197",
      price: "",
      sellerID: ["621f8666029586e9aebc8ad9"],
      title: "PHP Architect's Guide to PHP Security",
      year: "",
    },
    {
      __v: 0,
      _id: "6220de546529d6f89749e6ba",
      author: "E. L. Bisson",
      barcode: "9781645702238",
      condition: "",
      description: "",
      disponibility: true,
      editor: "Tamarind Hill Press",
      image:
        "http://books.google.com/books/content?id=d9dKxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      language: "en",
      nb_pages: "154",
      price: "",
      sellerID: ["621f86a0029586e9aebc8add"],
      title: "Windmills and Wishes",
      year: "",
    },
  ];
  var array = [];

  /////////////////////////////////////Methods///////////////////////////////////
  /*--------------------------------------------------*/
  const updateSearch = (search) => {
    setSearch(search);
  };
  /*--------------------------------------------------*/
  const handleSearch = () => {
    // console.log('Test réussi')
    props.navigation.navigate("BottomNavigator", { screen: "Search" });
  };

  // isConnected = false;
  // let logout;
  // if (isConnected) {
  //   logout = <Text style={styles.logout}>Déconnexion</Text>
  // } else {
  //   logout = <Text style={styles.login}>Connexion</Text>;
  // }
  /*--------------------------------------------------*/
  logout = (
    <Text
      style={styles.login}
      onPress={() => props.navigation.navigate("SignIn", { screen: "SignIn" })}
    >
      Connexion
    </Text>
  );
  /*--------------------------------------------------*/
  const BookDetailsCard = (x, y) => {
    return (
      <View style={styles.homeBook}>
        <Image
          onPress={() => props.navigation.navigate("BookScreen")}
          style={styles.imageBook}
          resizeMode="cover"
          source={{
            uri: x,
          }}
        />
        <Text style={styles.titleCard}>{y}</Text>
        <View style={styles.descriptionCard}>
          <Text style={styles.priceCard}>$19.99</Text>
          <Text style={styles.kmCard}>7km</Text>
        </View>
      </View>
    );
  };

  /*--------------------------------------------------*/
  const disconnect = () => {
    props.disconnect();
    AsyncStorage.clear();
  };
  /*--------------------------------------------------*/
  if (!props.userId) {
    logout = (
      <Text
        style={styles.login}
        onPress={() =>
          props.navigation.navigate("SignIn", { screen: "SignIn" })
        }
      >
        Connexion
      </Text>
    );
  } else {
    logout = (
      <Text onPress={() => disconnect()} style={styles.login}>
        Deconnexion
      </Text>
    );
  }
  /*--------------------------------------------------*/
  useEffect(() => {
    let fechedLastBooks = async () => {
      let data = await fetch(`http:/192.168.10.144:3000/latest-books`);

      let lastBooks = await data.json();
      setLast(lastBooks);
      console.log("ARRRRRRAAAYYYYYY", lastBooks);
    };
    fechedLastBooks();
  }, []);
  /*--------------------------------------------------*/
  const viw = last.map((lastbook, i) => {
    return (
      <View style={styles.homeBook} key={i}>
        <Image
          onPress={() => props.navigation.navigate("BookScreen")}
          style={styles.imageBook}
          resizeMode="cover"
          source={{
            uri: lastbook.image,
          }}
        />
        <Text style={styles.titleCard}>{lastbook.title}</Text>
        <View style={styles.descriptionCard}>
          <Text style={styles.priceCard}>$19.99</Text>
          <Text style={styles.kmCard}>7km</Text>
        </View>
      </View>
    );
  });
  /*--------------------------------------------------*/
  /////////////////////////////////////Return/////////////////////////////////////
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.search}>
          <Text style={{ color: "#252525", fontWeight: "bold", fontSize: 30 }}>
            GachaBook
          </Text>
          {logout}
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            height: 50,
            marginLeft: 15,
            marginRight: 15,
            marginTop: 30,
            borderRadius: 30,
          }}
        >
          <Input
            placeholder="   Cherchez un livre..."
            onChangeText={updateSearch}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            rightIcon={
              <Icon
                name="search"
                size={30}
                color="#E9940A"
                onPress={() => handleSearch()}
              />
            }
          />
        </View>

        <View style={styles.logo}>
          <Image style={styles.image} source={require("../assets/pic1.png")} />
        </View>

        <View>
          <Text style={styles.title}>Livres en ventes :</Text>
          <ScrollView horizontal={true}>
            <View style={styles.sliderHorizontal}>{viw}</View>
          </ScrollView>
        </View>
        <View>
          <Text style={styles.title}>Prêt de chez vous :</Text>
          <ScrollView horizontal={true}>
            <View style={styles.sliderHorizontal}></View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBE6E7",
    // width: '100%',
  },
  logout: {
    color: "#E9940A",
    marginLeft: 75,
    marginTop: 9,
    fontSize: 20,
  },
  login: {
    color: "#007576",
    marginLeft: "auto",
    marginTop: 9,
    marginRight: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    shadowColor: "#F69D0C",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  search: {
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 15,
  },
  books: {
    flexDirection: "row",
  },
  title: {
    padding: 0,
    color: "#252525",
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  imageBook: {
    width: 100,
    height: 130,
    borderRadius: 10,
  },
  sliderHorizontal: {
    flexDirection: "row",
  },
  descriptionCard: {
    flexDirection: "row",
  },
  homeBook: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
  },
  priceCard: {
    paddingRight: 5,
  },
  titleCard: {
    fontWeight: "bold",
  },
});
/////////////////////////////////////Redux////////////////////////////////////////////
/*---------------------------------------------*/
function mapStateToProps(state) {
  return {
    token: state.token,
    userId: state.userIdReducer,
    username: state.username,
  };
}
/*---------------------------------------------*/
function mapDispatchToProps(dispatch) {
  return {
    disconnect: function () {
      dispatch({
        type: "disconnect1",
      });
      dispatch({
        type: "disconnect2",
      });
      dispatch({
        type: "disconnect3",
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
