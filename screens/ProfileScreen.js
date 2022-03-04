/////////////////////////////////////IMPORTS//////////////////////////////////////////////////////////
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Input, Image } from "react-native-elements";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Svg, { G, Circle } from 'react-native-svg';

import BookDetails from '../components/BookDetails';
import { EvilIcons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from 'react-redux';

/////////////////////////////////////Functions//////////////////////////////////////////////////////////
const ProfileScreen = (props) => {
const radius = 80;
const circleCircumference = 2 * Math.PI * radius;
const coins = 77;
const points = 95;
const restToHundred = 100 - points;
const totalCoins = coins + restToHundred;
const totalPoints = points + restToHundred;
const displacementCoins =
  circleCircumference - (circleCircumference * coins) / 100;
const displacementPoints =
  circleCircumference - (circleCircumference * points) / 100;
  var userBooks = {};
  var myImage;
  /////////////////////////////////////State declarations///////////////////////////////////////////////
  const [refresh, setRefresh] = useState(false);
  const [myBooks, setMyBooks] = useState([]);
  /////////////////////////////////////Methodes/////////////////////////////////////////////////////////
  /*-------------------------------------------------------*/
  // useEffect(() => {
  //   const fetchBook = async () => {
  //     let userBooks = await fetch(
  //       `http://192.168.10.174:3000/get-user-books?userId=${props.userId}`
  //     );
  //     setMyBooks(await userBooks.json());
  //   };
  //   fetchBook();
  //   console.log(myBooks);
  // }, [refresh]);
  /*-------------------------------------------------------*/
  // useEffect(() => {
  //   AsyncStorage.getItem("userBooks", function (error, data) {
  //     userBooks = JSON.parse(data);
  //     console.log(userBooks.books[2].image);
  //   });

  //   /*-------------------------------------------------------*/
  //   userBooks.books.map((x) => (
  //     <Image
  //       onPress={() => props.navigation.navigate("BookScreen")}
  //       style={styles.imageBook}
  //       resizeMode="cover"
  //       source={{
  //         uri: require("../assets/favicon.png"),
  //       }}
  //     />
  //   ));
  // }, [refresh]);

  /////////////////////////////////////Return///////////////////////////////////////////////////////////
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.bothCharts}>
          <View style={styles.graphWrapper}>
            <Svg height="90" width="90" viewBox="0 0 180 180">
              <G rotation={-90} originX="90" originY="90">
                {totalCoins === 0 ? (
                  <Circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke="#F1F6F9"
                    fill="transparent"
                    strokeWidth="40"
                  />
                ) : (
                  <>
                    <Circle
                      cx="50%"
                      cy="50%"
                      r={radius}
                      stroke="#0AC3B4"
                      fill="transparent"
                      strokeWidth="15"
                      strokeDasharray={circleCircumference}
                      strokeDashoffset={displacementCoins}
                      rotation={0}
                      originX="90"
                      originY="90"
                      strokeLinecap="round"
                    />
                  </>
                )}
              </G>
            </Svg>
            <Text style={styles.label}>{coins} coins</Text>
          </View>

          <View>
            <Text style={styles.username}>{props.username}</Text>
            <View style={styles.aligntop}>
              <Text style={styles.level}>Niveau </Text>
              <Text style={styles.number}> 17 </Text>
            </View>
          </View>

          <View style={styles.graphWrapper}>
            <Svg height="90" width="90" viewBox="0 0 180 180">
              <G rotation={-90} originX="90" originY="90">
                {totalPoints === 0 ? (
                  <Circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke="#F1F6F9"
                    fill="transparent"
                    strokeWidth="40"
                  />
                ) : (
                  <>
                    <Circle
                      cx="50%"
                      cy="50%"
                      r={radius}
                      stroke="#EC8D05"
                      fill="transparent"
                      strokeWidth="15"
                      strokeDasharray={circleCircumference}
                      strokeDashoffset={displacementPoints}
                      rotation={0}
                      originX="90"
                      originY="90"
                      strokeLinecap="round"
                    />
                  </>
                )}
              </G>
            </Svg>
            <Text style={styles.label}>{points} / 100</Text>
          </View>
        </View>
        {/* <View>
        //   <FontAwesome
        //     name="refresh"
        //     size={35}
        //     color="#FFF"
        //     style={{ marginRight: 35, marginTop: 5 }}
        //     onPress={() => setRefresh(!refresh)}
        //   />
        // </View> */}
      </View>
      <ScrollView style={{ flex: 1, marginTop: 10 }}>
        <View style={styles.navigation}>
          <View style={styles.link}>
            <AntDesign
              name="scan1"
              size={24}
              color="#6D7D8B"
              style={{ marginRight: 5 }}
              onPress={() => {
                props.navigation.navigate('AddBook');
              }}
            />
            <Text
              onPress={() => {
                props.navigation.navigate('AddBook');
              }}
              style={{ color: '#252525', paddingLeft: 3 }}
            >
              Scan
            </Text>
          </View>
          <Text style={styles.barre}>|</Text>

          <View style={styles.link}>
            <AntDesign
              onPress={() =>
                props.navigation.navigate('Chat', { screen: 'ChatScreen' })
              }
              name="message1"
              size={24}
              color="#6D7D8B"
            />
            <Text
              onPress={() =>
                props.navigation.navigate('Chat', { screen: 'ChatScreen' })
              }
              style={{ color: "#252525", marginLeft: 5 }}
            >
              Messages
            </Text>
          </View>
          <Text style={styles.barre}>|</Text>

          <View style={styles.link}>
            <FontAwesome
              name="credit-card-alt"
              size={24}
              color="#6D7D8B"
              style={{ marginRight: 5 }}
              onPress={() => {
                props.navigation.navigate('Store');
              }}
            />
            <Text
              onPress={() => {
                props.navigation.navigate('Store');
              }}
              style={{ color: '#252525', paddingLeft: 3 }}
            >
              My Card
            </Text>
          </View>
        </View>
        <Text style={styles.title}>Mes livres en ventes :</Text>
        <ScrollView horizontal={true}>
          <View style={styles.sliderHorizontal}>
            <Image
              onPress={() => props.navigation.navigate('BookScreen')}
              style={styles.imageBook}
              resizeMode="cover"
              s
              source={require('../assets/nicolas.jpg')}
            />
            <Image
              onPress={() => props.navigation.navigate('BookScreen')}
              style={styles.imageBook}
              resizeMode="cover"
              s
              source={require('../assets/nicolas.jpg')}
            />
            <Image
              onPress={() => props.navigation.navigate('BookScreen')}
              style={styles.imageBook}
              resizeMode="cover"
              s
              source={require('../assets/nicolas.jpg')}
            />
            <Image
              onPress={() => props.navigation.navigate('BookScreen')}
              style={styles.imageBook}
              resizeMode="cover"
              s
              source={require('../assets/nicolas.jpg')}
            />
            <Image
              onPress={() => props.navigation.navigate('BookScreen')}
              style={styles.imageBook}
              resizeMode="cover"
              s
              source={require('../assets/nicolas.jpg')}
            />
          </View>
        </ScrollView>
        <Text style={styles.title}>Mes Favoris :</Text>
        <View style={styles.containerFavorites}>
          <BookDetails
            navigation={props.navigation}
            style={{ width: "100%", height: "25%" }}
          ></BookDetails>
          <BookDetails
            navigation={props.navigation}
            style={{ width: "100%", height: "25%" }}
          ></BookDetails>
          <BookDetails
            navigation={props.navigation}
            style={{ width: "100%", height: "25%" }}
          ></BookDetails>
          <BookDetails
            navigation={props.navigation}
            style={{ width: "100%", height: "25%" }}
          ></BookDetails>
        </View>
      </ScrollView>
    </View>
  );
};
/////////////////////////////////////Redux//////////////////////////////////////////////////////////
function mapStateToProps(state) {
  return { username: state.username, userId: state.userIdReducer };
}

export default connect(mapStateToProps, null)(ProfileScreen);
/////////////////////////////////////Styles//////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBE6E7',
    color: '#252525',
    // alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  topContainer: {
    marginTop: 30,
    marginLeft: 20,
  },
  username: {
    color: '#ED610C',
    fontSize: 35,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  aligntop: {
    flexDirection: 'row',
    textAlign: 'center',
    paddingLeft: 5,
  },
  level: {
    color: '#FFF',
    fontSize: 27,
    fontStyle: 'italic',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  number: {
    color: '#EC8D05',
    fontSize: 27,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(192, 195, 219,0.24)',
    padding: 10,
    margin: 20,
    borderRadius: 15,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#252525',
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  imageBook: {
    width: 150,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    borderRadius: 5,
  },
  sliderHorizontal: {
    flexDirection: 'row',
  },
  containerFavorites: {
    alignItems: 'center',
  },
  graphWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#000',
    position: 'absolute',
    fontSize: 15,
  },
  bothCharts: {
    flexDirection: 'row',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  // containerFavorites: {
  //   justifyContent: 'center',
  // },
});

/* <View>
         <FontAwesome
           name="envelope-o"
           size={35}
           color="#FFF"
           style={{ marginRight: 35, marginTop: 5 }}
           onPress={() =>
             props.navigation.navigate("Chat", { screen: "ChatScreen" })
           }
         />
       </View> */
