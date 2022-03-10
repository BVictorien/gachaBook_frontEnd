/////////////////////////////////////Import//////////////////////////////////////////////////
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image, Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

/////////////////////////////////////Function//////////////////////////////////////////////////
function BookScreen(props) {
  ////////////////////////////////////States declaration////////////////////////////
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [barcode, setBarcode] = useState("");
  const [editor, setEditor] = useState("");
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [year, setYear] = useState();
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [sellerID, setSellerID] = useState();

  ////////////////////////////////////Methods//////////////////////////////////////
  /*-------------------------------------------------------- */
  useEffect(() => {
    
    setTitle(props.bookDetails[0].title);
    setAuthor(props.bookDetails[0].author);
    setLanguage(props.bookDetails[0].language);
    setPageCount(props.bookDetails[0].pageCount);
    setBarcode(props.bookDetails[0].barcode);
    setEditor(props.bookDetails[0].editor);
    setImage(props.bookDetails[0].imageLink);
    setDescription(props.bookDetails[0].description);
    setYear(props.bookDetails[0].year);
    setId(props.bookDetails[0].id);
    setPrice(props.bookDetails[0].price);
    setSellerID(props.bookDetails[0].sellerID);
  }, []);
  /*-------------------------------------------------------- */
  const updateWishList = async () => {
    const data = await fetch("http://192.168.10.136:3000/update-whishlist", {
      method: "PUT",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `userId=${props.userId}&bookId=${id}`,
    });
  };
  /*-------------------------------------------------------- */
  ////////////////////////////////////Return/////////////////////////////////////////
  return (
    // <ScrollView style={{ flex: 1 }}>
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/bg2.png")}
        resizeMode="cover"
        style={styles.bg}
      ></ImageBackground>
      <ScrollView>
        <View>
          <View style={styles.headNavigation}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("BottomNavigator");
              }}
            >
              <Ionicons
                name={(iconName = "arrow-back")}
                size={30}
                color={"#000"}
                style={styles.backText}
              />
            </TouchableOpacity>
            <Text style={styles.titrePage}>Detail du livre</Text>
            <TouchableOpacity
              onPress={() => {
                updateWishList();
              }}
            >
              <Ionicons
                style={styles.heart}
                name={(iconName = "heart")}
                size={30}
                color={"red"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerBook}>
            <View style={styles.cadreBook}>
              {/* <View style={styles.imgBg}></View> */}
              <Image>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: image }}
                />
              </Image>
            </View>
          </View>

          {/* <View style={styles.containerbois}>
          <Image
          style={styles.imageBois}
          resizeMode="cover"
            source={require('../assets/bois.png')}
            />
          </View> */}
          <View style={styles.imageView}></View>
          <View style={styles.containerDetails}>
            <View style={styles.bookdetails}>
              <View style={styles.title}>
                <Text style={styles.name}>{title}</Text>
                <View style={styles.icons}>
                  <TouchableOpacity
                    onPress={() => {
                      props.addToCart(
                        props.bookDetails[0],
                        props.bookDetails[0].price
                      );
                    }}
                  >
                    <Ionicons
                      style={{ paddingLeft: 5 }}
                      name={(iconName = "basket")}
                      size={25}
                      color={"grey"}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.author}>{author}</Text>
              <View style={styles.navigation}>
                <View style={styles.link}>
                  <Text style={{ color: "#032547", fontWeight: "bold" }}>
                    Propre
                  </Text>
                  <Text style={{ color: "rgba(148, 148, 148,0.80)" }}>
                    Etat
                  </Text>
                </View>
                <Text style={styles.barre}>|</Text>
                <View style={styles.link}>
                  <Text style={{ color: "#032547", fontWeight: "bold" }}>
                    {pageCount}
                  </Text>
                  <Text style={{ color: "rgba(148, 148, 148,0.80)" }}>
                    Nombre de page
                  </Text>
                </View>
                <Text style={styles.barre}>|</Text>
                <View style={styles.link}>
                  <Text style={{ color: "#032547", fontWeight: "bold" }}>
                    {language}
                  </Text>
                  <Text style={{ color: "rgba(148, 148, 148,0.80)" }}>
                    Langage
                  </Text>
                </View>
                <Text style={styles.barre}>|</Text>
                <View style={styles.link}>
                  <Text style={{ color: "#032547", fontWeight: "bold" }}>
                    {price} ₲
                  </Text>
                  <Text style={{ color: "rgba(148, 148, 148,0.80)" }}>
                    Prix
                  </Text>
                </View>
              </View>
              <Text style={styles.description}>{description}</Text>
              <Button
                buttonStyle={styles.contact}
                title="Contacter le vendeur"
                onPress={() => props.navigation.navigate("UserScreen")}
              />
              <View style={{ height: 100 }}></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/////////////////////////////////////Redux///////////////////////////////////////////////////
function mapStateToProps(state) {
  return {
    token: state.token,
    userId: state.userIdReducer,
    username: state.username,
    bookDetails: state.scanBookReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUsername: function (username) {
      dispatch({ type: "addUsername", username: username });
    },
    addToCart: function (book, price) {
      dispatch({ type: "addCart", book: book });
      dispatch({ type: "addTotal", price: price });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BookScreen);
/////////////////////////////////////Styles//////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#DBE6E7',

    color: "#fff",
    // minHeight: '100vh',
    // width: '100%',
    // width: Dimensions.get('window').width / 1,
    // padding: 10,
    // justifyContent: 'center',
  },
  headNavigation: {
    // width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bg: {
    flex: 1,
    justifyContent: "center",
    height: Dimensions.get("window").height / 1,
  },
  heart: {
    marginRight: 20,
    marginLeft: "auto",
    marginTop: 15,
    paddingTop: 30,
    borderColor: "black",
  },
  titrePage: {
    marginTop: 15,
    justifyContent: "center",
    paddingTop: 30,
    color: "black",
    fontWeight: "bold",
    fontSize: 21,
  },
  cadreBook: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    // paddingLeft: 'auto',
    backgroundColor: "rgba(245, 245, 245,0.20)",
    width: 220,
    height: 320,
  },
  containerBook: {
    // justifyContent: 'center',
    alignItems: "center",
  },

  image: {
    width: 200,
    height: 300,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(245, 245, 245,0.53)",
    padding: 15,
    marginTop: 20,
    // margin: 25,
    borderRadius: 20,
  },
  link: {
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    flexDirection: "row",
  },

  containerDetails: {
    margin: 10,
    // marginTop: -10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bookdetails: {
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    justifyContent: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 21,
  },
  author: {
    color: "grey",
    fontWeight: "bold",
  },
  description: {
    color: "gray",
    // marginTop: 20,
    marginBottom: 20,
    // margin: 20,
    // width: '90%',
    padding: 20,
  },
  icons: {
    marginLeft: "auto",
  },
  contact: {
    backgroundColor: "#007576",
    borderRadius: 50,
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    // height: Dimensions.get('window').height / 10,
  },
  barre: {
    backgroundColor: "black",
    width: 1,
  },
  backText: {
    marginTop: 15,
    color: "black",
    // marginRight: 'auto',
    marginLeft: 20,
    // marginRight: 'auto',
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 30,
  },
});
