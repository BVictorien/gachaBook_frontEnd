/////////////////////////////////////Import//////////////////////////////////////////////////
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
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
  }, []);
  /*-------------------------------------------------------- */
  const updateWishList = async () => {
    const data = await fetch("http://192.168.10.151:3000/update-whishlist", {
      method: "PUT",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `userId=${props.userId}&bookId=${id}`,
    });
  };
  /*-------------------------------------------------------- */
  ////////////////////////////////////Return/////////////////////////////////////////
  return (
    <ScrollView style={{ flex: 1, marginTop: 10 }}>
      <View style={styles.container}>
        <View style={styles.headNavigation}>
          <Ionicons
            onPress={() => {
              props.navigation.navigate("BottomNavigator");
            }}
            name={(iconName = "arrow-back")}
            size={30}
            color={"#007576"}
            style={styles.textBack}
          />
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
          <Image>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: image }}
            />
          </Image>
        </View>

        <View style={styles.containerbois}>
          <Image
            style={styles.imageBois}
            resizeMode="cover"
            source={require("../assets/bois.png")}
          />
        </View>
        <View style={styles.imageView}></View>
        <View style={styles.containerDetails}>
          <View style={styles.bookdetails}>
            <View style={styles.title}>
              <Text style={styles.name}>{title}</Text>
              <View style={styles.icons}>
                <Ionicons
                  style={{ paddingLeft: 5 }}
                  name={(iconName = "basket")}
                  size={25}
                  color={"grey"}
                />
              </View>
            </View>
            <Text style={styles.author}>{author}</Text>
            <View style={styles.navigation}>
              <View style={styles.link}>
                <Text style={{ color: "#949494" }}>Propre</Text>
                <Text style={{ color: "rgba(148, 148, 148,0.65)" }}>Etat</Text>
              </View>
              <Text style={styles.barre}>|</Text>
              <View style={styles.link}>
                <Text style={{ color: "#949494" }}>{pageCount}</Text>
                <Text style={{ color: "rgba(148, 148, 148,0.65)" }}>
                  Nombre de page
                </Text>
              </View>
              <Text style={styles.barre}>|</Text>
              <View style={styles.link}>
                <Text style={{ color: "#949494" }}>{language}</Text>
                <Text style={{ color: "rgba(148, 148, 148,0.65)" }}>
                  Langage
                </Text>
              </View>
              <Text style={styles.barre}>|</Text>
              <View style={styles.link}>
                <Text style={{ color: "#949494" }}>{price} ₲</Text>
                <Text style={{ color: "rgba(148, 148, 148,0.65)" }}>Price</Text>
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
export default connect(mapStateToProps, null)(BookScreen);
/////////////////////////////////////Styles//////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBE6E7",

    color: "#fff",
    height: "100%",
    width: "100%",
  },
  headNavigation: {
    flexDirection: "row",
  },
  heart: {
    marginTop: 15,
    marginRight: 20,
    marginLeft: "auto",
    paddingTop: 30,
  },
  containerBook: {
    alignItems: "center",
    marginTop: 15,
    justifyContent: "center",
  },
  containerbois: {},
  imageView: {
    alignItems: "center",
    margin: 20,
  },
  image: {
    width: 200,
    height: 300,
  },
  imageBois: {
    alignItems: "center",
    padding: 20,
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
  },
  barre: {
    backgroundColor: "black",
    width: 1,
  },
  textBack: {
    marginTop: 15,
    color: "#007576",
    marginRight: "auto",
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 30,
  },
});
