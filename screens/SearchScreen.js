/////////////////////////////////////Import///////////////////////////////////////////////////
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import { Input, Icon, Card, Image } from 'react-native-elements';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookDetails from '../components/BookDetails';

/////////////////////////////////////Function///////////////////////////////////////////////////
function SearchScreen(props) {
  /////////////////////////////////////States and vars//////////////////////////////////
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);

  /////////////////////////////////////Methods///////////////////////////////////////////
  /**------------------------------------------------------------------ */
  const updateSearch = (search) => {
    setSearch(search);
  };
  /**------------------------------------------------------------------ */
  useEffect(() => {
    async function askPermissions() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        Location.watchPositionAsync({ distanceInterval: 2 }, (location) => {
          // console.log(location);
        });
      }
    }
    askPermissions();

    AsyncStorage.getItem('lastBook', function (error, data) {
      let lastBook = JSON.parse(data);
      setBooks(lastBook);
    });
  }, []);
  /**------------------------------------------------------------------ */
  const vizw = books.map((x, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={[styles.bookItem, styles.shadowCard]}
        onPress={() => props.navigation.navigate('BookScreen')}
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

  /**------------------------------------------------------------------ */

  ////////////////////////////////////return///////////////////////////////////////////
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/bg2.png')}
        resizeMode="cover"
        style={styles.bg}
      ></ImageBackground>
      <ScrollView>
        <View style={styles.search}>
          <Input
            placeholder="   Cherchez un livre..."
            onChangeText={updateSearch}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            rightIcon={<Icon name="search" size={30} color="#252525" />}
          />
        </View>
        {/* <MapView
          style={{ width: '100%', height: 300 }}
          // style={{ flex: 1 }}
          initialRegion={{
            latitude: 48.866667,
            longitude: 2.333333,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
        <View style={styles.containerMap}>
          <Image
            style={styles.imageMap}
            resizeMode="cover"
            source={require('../assets/map.png')}
          />
        </View>
        <ScrollView style={{ flex: 1, marginTop: 10 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.title}>Autour de moi :</Text>
          </View>
          <View style={styles.containerBook}>{vizw}</View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
    // </View>
  );
}

////////////////////////////////////Redux/////////////////////////////////////////////////
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);

////////////////////////////////////Styles//////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#DBE6E7',
    // justifyContent: 'center',
    // width: '100%',
    // height: '100%',
    // // justifyContent: 'center',
    // alignItems: 'center',
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('window').height / 1,
  },
  containerBook: {
    alignItems: 'center',
  },
  title: {
    color: '#252525',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  search: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '95%',
    height: 45,

    margin: 10,
    marginTop: 40,
    borderRadius: 30,
  },
  containerMap: {
    height: 300,
  },
  imageMap: {
    height: '100%',
  },
  bookItem: {
    // backgroundColor: '#CADCE6',
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: 350,
    marginBottom: 6,
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
    color: '#032547',
    padding: 5,
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
  },
  description: {
    color: '#032547',
    paddingLeft: 5,
  },
  icons: {
    marginLeft: 'auto',
    color: '#032547',
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
