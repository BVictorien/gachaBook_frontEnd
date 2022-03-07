//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Input, Text, Card } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const BookDetailsCard = () => {
  return (
    <View style={styles.bookItem}>
      <Card.Divider />
      <Image
        style={styles.imageBook}
        resizeMode="cover"
        source={require('../assets/nicolas.jpg')}
      />
      <View>
        <Text style={styles.name}>Titre</Text>
        <Text style={styles.description}>Descriptions du livre</Text>
        <View style={styles.buttons}>
          <Button buttonStyle={styles.button1} title="Valider" />
          <Button buttonStyle={styles.button2} title="Annuler" />
        </View>
      </View>
      <View style={styles.icons}>
        <Button buttonStyle={styles.points} title="6pts" />
      </View>

      <Card.Divider />
    </View>
  );
};

function PaymentEnCours(props) {
  return (
    <View style={styles.background}>
      <Ionicons
        onPress={() => {
          props.navigation.navigate('BottomNavigator');
        }}
        name={(iconName = 'arrow-back')}
        size={20}
        color={'#007576'}
        style={styles.textBack}
      />
      <View style={styles.logo}>
        <Image style={styles.image} source={require('../assets/pic7.png')} />
        {/* <Text style={styles.title}>Inscription</Text> */}
      </View>

      <BookDetailsCard />
      <BookDetailsCard />
      <BookDetailsCard />
    </View>
  );
}

export default PaymentEnCours;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#DBE6E7',
    // justifyContent: 'space-evenly',
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },

  image: {
    // width: 100,
    // height: 100,
  },
  text: {
    color: 'white',
    fontSize: 35,
  },
  text2: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 20,
    color: 'white',
    fontSize: 20,
  },
  imageBook: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  description: {
    color: '#252525',
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  points: {
    marginLeft: 10,
    backgroundColor: '#6D7D8B',
  },
  name: {
    color: '#252525',
  },
  bookItem: {
    backgroundColor: '#DBE6E7',
    flexDirection: 'row',
    marginBottom: 6,
    padding: 10,
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  button1: {
    backgroundColor: '#007576',
    borderRadius: 50,
    marginRight: 5,
    // width: 170,
  },
  button2: {
    backgroundColor: '#E50909',
    borderRadius: 50,
    // width: 170,
  },
  textBack: {
    marginTop: 15,
    color: '#007576',
    marginRight: 'auto',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
  },
});
