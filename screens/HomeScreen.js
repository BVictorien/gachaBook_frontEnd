/////////////////////////////////////Import//////////////////////////////////////////////
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Input, Text, Icon, Button } from 'react-native-elements';
import LatestBooks from '../components/LatestBooks';
import NearestBooks from '../components/NearestBooks';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function HomeScreen(props) {
  /////////////////////////////////////States and var///////////////////////////////////////
  let logout;

  const [search, setSearch] = useState('');
  const [last, setLast] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  /////////////////////////////////////Methods///////////////////////////////////
  /*--------------------------------------------------*/
  const updateSearch = (search) => {
    setSearch(search);
  };
  /*--------------------------------------------------*/
  const handleSearch = () => {
    // console.log('Test réussi')
    props.navigation.navigate('BottomNavigator', { screen: 'Search' });
  };

  /*--------------------------------------------------*/

  /*--------------------------------------------------*/
  const BookDetailsCard = (x, y) => {
    return (
      <View style={styles.homeBook}>
        <Image
          onPress={() => props.navigation.navigate('BookScreen')}
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
          props.navigation.navigate('SignIn', { screen: 'SignIn' })
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
      let data = await fetch(`http:/192.168.10.136:3000/latest-books`);

      let lastBooks = await data.json();

      setLast(lastBooks);
    };
    fechedLastBooks();

    AsyncStorage.getItem('userId', function (error, data) {
      let userId = JSON.parse(data);
      props.getUserId(userId);
    });
    AsyncStorage.getItem('userName', function (error, data) {
      let userName = JSON.parse(data);
      props.addUsername(userName);
    });
    AsyncStorage.getItem('userProfil', function (error, data) {
      let userProfil2 = JSON.parse(data);
      props.getUserProfil(userProfil2);
    });
  }, [refreshing]);
  /*--------------------------------------------------*/
  const viw = last.map((lastbook, i) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('BookScreen');
          props.sendBookDetail(
            lastbook.title,
            lastbook.author,
            lastbook.language,
            lastbook.nb_pages,
            lastbook.barcode,
            lastbook.editor,
            lastbook.image,
            lastbook.description,
            lastbook.year,
            lastbook._id,
            lastbook.price,
            lastbook.sellerID[0]
          );
        }}
        style={styles.homeBook}
        key={i}
      >
        <Image
          style={styles.imageBook}
          resizeMode="cover"
          source={{
            uri: lastbook.image,
          }}
        />
        <Text style={styles.titleCard}>{lastbook.title}</Text>
        <View style={styles.descriptionCard}>
          <Text
            onPress={() => props.navigation.navigate('BookScreen')}
            style={styles.priceCard}
          >
            {lastbook.price} ₲
          </Text>
          <Text style={styles.kmCard}></Text>
        </View>
      </TouchableOpacity>
    );
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  /*--------------------------------------------------*/
  /////////////////////////////////////Return/////////////////////////////////////
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/bg1.png')}
        resizeMode="cover"
        style={styles.bg}
      ></ImageBackground>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View>
          <View style={styles.search}>
            <Text
              style={{ color: '#032547', fontWeight: 'bold', fontSize: 30 }}
            >
              GachaBook
            </Text>
            {logout}
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
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
                  color="#032547"
                  onPress={() => handleSearch()}
                />
              }
            />
          </View>

          <View style={styles.logo}>
            <Image
              style={styles.image}
              source={require('../assets/pic1.png')}
            />
          </View>

          <View>
            <Text style={styles.title}>Dernier livres mise en ventes :</Text>
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
    </SafeAreaView>
  );
}
/////////////////////////////////////STYLES/////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#DBE6E7',
    // // width: '100%',
  },
  logout: {
    color: '#E9940A',
    marginLeft: 75,
    marginTop: 9,
    fontSize: 20,
  },
  login: {
    color: '#032547',
    marginLeft: 'auto',
    marginTop: 9,
    marginRight: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    shadowColor: '#F69D0C',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  search: {
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 15,
  },
  books: {
    flexDirection: 'row',
  },
  title: {
    padding: 0,
    color: '#032547',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('window').height / 1,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  imageBook: {
    width: 100,
    height: 130,
    borderRadius: 10,
  },
  sliderHorizontal: {
    flexDirection: 'row',
  },
  descriptionCard: {
    flexDirection: 'row',
  },
  homeBook: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    width: 100,
  },
  priceCard: {
    paddingRight: 5,
  },
  titleCard: {
    fontWeight: 'bold',
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
});
/////////////////////////////////////Redux///////////////////////////////////////////////////////////
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
        type: 'disconnect1',
      });
      dispatch({
        type: 'disconnect2',
      });
      dispatch({
        type: 'disconnect3',
      });
    },
    addToken: function (token) {
      dispatch({ type: 'addToken', token: token });
    },
    getUserId: function (userId) {
      dispatch({ type: 'getUserId', userId: userId });
    },
    addUsername: function (username) {
      dispatch({ type: 'addUsername', username: username });
    },
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
        sellerID,
      });
    },
    getUserProfil: function (userProfil) {
      dispatch({ type: 'getUser', userProfil });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
