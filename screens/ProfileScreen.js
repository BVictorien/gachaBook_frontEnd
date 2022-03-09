/////////////////////////////////////IMPORTS//////////////////////////////////////////////////////////
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  RefreshControl,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Input, Card } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Svg, { G, Circle } from 'react-native-svg';

import BookDetails from '../components/BookDetails';
import { EvilIcons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

/////////////////////////////////////Functions//////////////////////////////////////////////////////////
const ProfileScreen = (props) => {
  ////////////////////////////////////Variable//////////////////////////////
  const radius = 80;
  const circleCircumference = 2 * Math.PI * radius;
  const coins = props.userProfil.userProfil.count_rating;
  const points = props.userProfil.userProfil.points;
  const restToHundred = 100 - points;
  const totalCoins = coins + restToHundred;
  const totalPoints = points + restToHundred;
  const displacementCoins =
    circleCircumference - (circleCircumference * coins) / 100;
  const displacementPoints =
    circleCircumference - (circleCircumference * points) / 100;

  /////////////////////////////////////State declarations//////////////////////////////
  const [myBooks, setMyBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  /////////////////////////////////////Methodes/////////////////////////////////////////
  /*-------------------------------------------------------*/
  useEffect(() => {
    const haha = async () => {
      let fechedUserWishlist = await fetch(
        `http://192.168.10.120:3000/user-wishList?userId=${props.userId}`
      );
      let userWishList = await fechedUserWishlist.json();

      AsyncStorage.setItem('userWishList', JSON.stringify(userWishList));
    };
    haha();

    AsyncStorage.getItem('userWishList', function (error, data) {
      let userWishList = JSON.parse(data);
      setWishList(userWishList);
    });
    AsyncStorage.getItem('userBooks', function (error, data) {
      let booklist = JSON.parse(data);
      setMyBooks(booklist);
    });
    const hoho = async () => {
      let updateUser = await fetch("http://192.168.10.109:3000/update-profil", {
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

    };
    hoho();
   
  }, [props, refreshing]);
  /*-------------------------------------------------------*/
  const constdeleteWishList = async (x) => {
    const data = await fetch('http://192.168.10.109:3000/delete-whishlist', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `userId=${props.userId}&bookId=${x}`,
    });
  };
  /*-------------------------------------------------------*/
  const view = myBooks.map((x, i) => {
    return (
      <TouchableOpacity
        key={i}
        onPress={() => {
          props.navigation.navigate('BookScreen');
          props.sendBookDetail(
            x.title,
            x.author,
            x.language,
            x.nb_pages,
            x.barcode,
            x.editor,
            x.image,
            x.description,
            x.year,
            x._id,
            x.price
          );
        }}
      >
        <Image
          source={{
            uri: x.image,
          }}
          style={styles.imageBook}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  });
  /*-------------------------------------------------------*/
  const view2 = wishList.map((x, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={[styles.bookItem, styles.shadowCard]}
        onPress={() => {
          props.navigation.navigate('BookScreen');
          props.sendBookDetail(
            x.title,
            x.author,
            x.language,
            x.nb_pages,
            x.barcode,
            x.editor,
            x.image,
            x.description,
            x.year,
            x._id,
            x.price
          );
        }}
      >
        <Card.Divider />
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: x.image }}
        />
        <View style={styles.detail}>
          <Text style={styles.name}>{x.title}</Text>
          <Text style={styles.description}>{x.author}</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => constdeleteWishList(x._id)}>
            <Ionicons name={(iconName = 'trash')} size={25} color={'grey'} />
          </TouchableOpacity>
        </View>
        <Card.Divider />
      </TouchableOpacity>
    );
  });
  //   /*-------------------------------------------------------*/
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  /////////////////////////////////////Return///////////////////////////////////////////////////////////
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/bg2.png')}
        resizeMode="cover"
        style={styles.bg}
      ></ImageBackground>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
              <Text style={styles.label}>
                {props.userProfil.userProfil.count_rating} ₲
              </Text>
            </View>

            <View>
              <Text style={styles.username}>{props.username}</Text>
              <View style={styles.aligntop}>
                <Text style={styles.level}>Niveau </Text>
                <Text style={styles.number}>
                  {props.userProfil.userProfil.level}{" "}
                </Text>
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
              <Text style={styles.label}>
                {props.userProfil.userProfil.points} / 100
              </Text>
            </View>
          </View>
        </View>
        <ScrollView style={{ flex: 1, marginTop: 10 }}>
          <View style={styles.navigation}>
            <TouchableOpacity
              style={styles.link}
              onPress={() => {
                props.navigation.navigate('AddBook');
              }}
            >
              <AntDesign
                name="scan1"
                size={24}
                color="#6D7D8B"
                style={{ marginRight: 5 }}
              />
              <Text
                // onPress={() => {
                //   props.navigation.navigate('AddBook');
                // }}
                style={{ color: '#252525', paddingLeft: 3 }}
              >
                Scan
              </Text>
            </TouchableOpacity>
            <Text style={styles.barre}>|</Text>

            <TouchableOpacity
              style={styles.link}
              onPress={() =>
                props.navigation.navigate('Chat', { screen: 'ChatScreen' })
              }
            >
              <AntDesign name="message1" size={24} color="#6D7D8B" />
              <Text
                // onPress={() =>
                //   props.navigation.navigate('Chat', { screen: 'ChatScreen' })
                // }
                style={{ color: '#252525', paddingLeft: 3 }}
              >
                Messages
              </Text>
            </TouchableOpacity>
            <Text style={styles.barre}>|</Text>

            <TouchableOpacity
              style={styles.link}
              onPress={() => {
                props.navigation.navigate('Store');
              }}
            >
              <FontAwesome
                name="credit-card-alt"
                size={24}
                color="#6D7D8B"
                style={{ marginRight: 5 }}
              />
              <Text
                // onPress={() => {
                //   props.navigation.navigate('Store');
                // }}
                style={{ color: '#252525', paddingLeft: 3 }}
              >
                My Card
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Mes livres en ventes :</Text>
          <ScrollView horizontal={true}>
            <View style={styles.sliderHorizontal}>{view}</View>
          </ScrollView>
          <Text style={styles.title}>Mes Favoris :</Text>
          <View style={styles.containerFavorites}>{view2}</View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
/////////////////////////////////////Redux//////////////////////////////////////////////////////////
function mapStateToProps(state) {
  return {
    username: state.username,
    userId: state.userIdReducer,
    userProfil: state.userProfilReducer,
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
      price
    ) {
      dispatch({
        type: 'BookDetail',
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
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
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
    // padding: 20,
  },
  topContainer: {
    marginTop: 30,
    marginLeft: 20,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('window').height / 1,
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
    // margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
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
    justifyContent: 'center',
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
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    // borderRadius: 50,
  },
  refreshcontainer: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  refreshbutton: {
    // paddingRight: 5,
  },
  containerFavorites: {
    justifyContent: 'center',
  },
  detail: {
    width: '50%',
  },
  // bookItem: {
  //   // backgroundColor: '#CADCE6',
  //   backgroundColor: '#fff',
  //   flexDirection: 'row',
  //   // width: 350,
  //   marginBottom: 6,
  //   shadowColor: '#000',
  //   justifyContent: 'center',
  //   shadowOffset: {
  //     width: 0,
  //     height: 1,
  //   },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 1.41,

  //   elevation: 2,
  //   borderRadius: 3,
  // },
  bookItem: {
    // backgroundColor: '#CADCE6',
    backgroundColor: '#fff',
    flexDirection: 'row',
    // width: '100%',
    marginBottom: 6,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: '#000',
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
    color: '#252525',
    padding: 5,
    fontWeight: 'bold',
    marginTop: 10,
    // fontSize: 21,
  },
  description: {
    color: '#252525',
    paddingLeft: 5,
  },
  icons: {
    marginLeft: 'auto',
    color: '#252525',
    // flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
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
