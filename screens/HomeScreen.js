/////////////////////////////////////Import//////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { Input, Text, Icon, Button } from "react-native-elements";
import LatestBooks from "../components/LatestBooks";
import NearestBooks from "../components/NearestBooks";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
function HomeScreen(props) {
  /////////////////////////////////////States and var///////////////////////////////////////
  let logout;

  const [search, setSearch] = useState("");
  const [last, setLast] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
    };
    fechedLastBooks();
  }, [refresh]);
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
          <FontAwesome
            name="refresh"
            size={35}
            color="#FFF"
            style={{ marginRight: 35, marginTop: 5 }}
            onPress={() => setRefresh(!refresh)}
          />
        </View>
        <View>
          <Text style={styles.title}>Livres en ventes :</Text>
          <ScrollView horizontal={true}>
            <View style={styles.sliderHorizontal}>{viw}</View>
          </ScrollView>
        </View>
        <View>
          <Text style={styles.title}>Près de chez vous :</Text>
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
    addToken: function (token) {
      dispatch({ type: "addToken", token: token });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
