//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Button, Card, Badge } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const BookDetailsCard = () => {
  return (
    <View style={[styles.bookItem, styles.shadowCard]}>
      <Card.Divider />
      <Image
        style={styles.imageBook}
        resizeMode="cover"
        source={require('../assets/nicolas.jpg')}
      />
      <View>
        <Text style={styles.name}>Titre</Text>
        <Text style={styles.description}>Descriptions du livre</Text>
      </View>
      <View style={styles.icons}>
        <Ionicons name={(iconName = 'trash')} size={25} color={'gray'} />
        <Button buttonStyle={styles.points} title="6pts" />
      </View>
      <Card.Divider />
    </View>
  );
};

const CartScreen = (props) => {
  //////////////////////////////////////States and vars///////////////////////////

  /////////////////////////////////////Return////////////////////////////////////
  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={styles.logo}>
          <Image
            style={styles.imagePanier}
            source={require('../assets/pic2.png')}
          />
          <Text style={styles.inscription}>Panier</Text>
        </View>
        <View>
          <BookDetailsCard />
          <BookDetailsCard />
          <BookDetailsCard />
        </View>
        <View style={styles.total}>
          <Text style={styles.totalText}>Total :</Text>
          <Text>69 pts</Text>
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
  );
};

export default CartScreen;
/////////////////////////////////////Return////////////////////////////////////////////////////
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#DBE6E7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  inscription: {
    color: '#252525',
    fontSize: 20,
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
    backgroundColor: '#1E202A',
    flexDirection: 'row',
    marginBottom: 6,
    padding: 10,
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
    backgroundColor: '#6D7D8B',
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
    backgroundColor: '#007576',
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
  bookItem: {
    backgroundColor: '#CADCE6',
    flexDirection: 'row',
    marginBottom: 6,
    // padding: 10,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    width: '95%',
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
    flexDirection: 'row',
    padding: 5,
  },
  imageBook: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 50,
  },
  shadowCard: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
