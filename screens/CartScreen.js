//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { Button, Card, Badge } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

//////////////////////////////////////Functions///////////////////////////////////////////////

const CartScreen = (props) => {
  /////////////////////////////////////States and vars/////////////////////////////////

  /////////////////////////////////////Methods/////////////////////////////////
  /*------------------------------------------------------ */
  useState(() => {}, [props]);

  /*---------------------------------------------------------- */
  const cartList = props.cart.map((x, i) => {
    return (
      <View key={i} style={[styles.bookItem, styles.shadowCard]}>
        <Card.Divider />
        <Image
          style={styles.imageBook}
          resizeMode="cover"
          source={{ uri: x.imageLink }}
        />
        <View>
          <Text style={styles.name}>{x.title}</Text>
          <Text style={styles.description}>{x.author}</Text>
        </View>
        <View style={styles.icons}>
          <Text style={styles.price}>{x.price} ₲</Text>
          <TouchableOpacity onPress={() => props.deleteFCart(x.id, x.price)}>
            <Ionicons name={(iconName = 'trash')} size={25} color={'gray'} />
          </TouchableOpacity>
        </View>
        <Card.Divider />
      </View>
    );
  });
  /////////////////////////////////////Return/////////////////////////////
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/bg3.png')}
        resizeMode="cover"
        style={styles.bg}
      ></ImageBackground>
      <ScrollView>
        <View style={styles.background}>
          <View style={styles.logo}>
            <Image
              style={styles.imagePanier}
              source={require('../assets/pic2.png')}
            />
            <Text style={styles.title}>Panier</Text>
          </View>
          <View>{cartList}</View>
          <View style={styles.total}>
            <Text style={styles.totalText}>Total :</Text>
            <Text>{props.total} ₲</Text>
          </View>

          <View style={styles.buttons}>
            <Button
              onPress={() => {
                props.navigation.navigate('PaymentEnCours');
              }}
              buttonStyle={styles.payer}
              title="Payer"
            />
            <Button
              onPress={() => {
                props.navigation.navigate('Store');
              }}
              buttonStyle={styles.reap}
              title="Réaprovisionner votre compte"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/////////////////////////////////////Redux////////////////////////////////////////////////////
/*-------------------------------------------------------------*/
function mapStateToProps(state) {
  return {
    token: state.token,
    userId: state.userIdReducer,
    username: state.username,
    bookDetails: state.scanBookReducer,
    cart: state.cartReducer,
    total: state.cartTotalReducer,
  };
}
/*-------------------------------------------------------------*/
function mapDispatchToProps(dispatch) {
  return {
    deleteFCart: function (bookId, price) {
      dispatch({ type: 'deleteFCart', bookId });
      dispatch({ type: 'subCart', price });
    },
  };
}
/*-------------------------------------------------------------*/
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

/////////////////////////////////////Styles////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#DBE6E7',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '100%',
    // height: '100%',
    // paddingTop: 1:0,
    // marginBottom: 20,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('window').height / 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
  },
  logo: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  title: {
    color: '#252525',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 15,
  },
  connexion: {
    color: '#F5960D',
  },
  description: {
    color: '#fff',
  },
  bookItem: {
    // backgroundColor: '#CADCE6',
    backgroundColor: '#fff',
    flexDirection: 'row',
    // width: '100%',
    marginBottom: 6,
    marginLeft: 10,
    marginRight: 10,
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
    color: '#fff',
  },
  imageBook: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 50,
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  points: {
    marginLeft: 10,
    // backgroundColor: 'transparent',
    color: 'black',
  },
  total: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    flexDirection: 'row',
    marginLeft: 'auto',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
  totalText: {
    marginRight: 20,
  },
  buttons: {
    alignItems: 'center',
    marginBottom: 20,
  },
  payer: {
    backgroundColor: '#032547',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
  },
  reap: {
    backgroundColor: '#6D7D8B',
    borderRadius: 50,
    width: 300,
  },
  imagePanier: {
    marginTop: 25,
  },
  name: {
    color: '#252525',
    padding: 5,
    fontWeight: 'bold',
  },
  description: {
    color: '#252525',
    paddingLeft: 5,
  },
  icons: {
    marginLeft: 'auto',
    color: '#252525',
    // flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  imageBook: {
    width: 60,
    height: 80,
    marginRight: 10,
    margin: 10,
    // borderRadius: 50,
  },
  shadowCard: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  price: {
    fontWeight: 'bold',
    // paddingBottom: 15,
  },
});
