//////////////////////////////////////////IMPORT//////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
//////////////////////////////////////////Function//////////////////////////////////////////////////

function AddBook(props) {
  ///////////////////////////////State declaration, VARS /////////////////////////
  const [titre, setTitre] = useState('');
  const [auteur, setAuteur] = useState('');
  const [description, setDescription] = useState('');
  const [langue, setLangue] = useState('');
  const [nbPages, setNbPages] = useState('');
  const [editeur, setEditeur] = useState('');
  const [annee, setAnnee] = useState('');
  const [codeBarre, setCodeBarre] = useState('');
  const [disponibilite, setDisponibilite] = useState(true);
  const [condition, setCondition] = useState('');
  const [prix, setPrix] = useState('0');
  const [imageLink, setImagelink] = useState('');

  //////////////////////////////Methods //////////////////////////////////////
  /*------------------------------------------------------*/

  async function saveBook() {
<<<<<<< HEAD
    let response = await fetch('https://gachabook.herokuapp.com/save-book', {
=======
    let response = await fetch('http://192.168.10.106:3000/save-book', {
>>>>>>> 00f826e65a8904e12310d224f5281386a70c1407
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `title=${titre}&author=${auteur}&description=${description}&language=${langue}&nbPages=${nbPages}&editor=${editeur}&year=${annee}&barcode=${codeBarre}&price=${prix}&condition=${condition}&image=${imageLink}&id=${props.userId}`,
    });
    setTitre('');
    setAuteur('');
    setDescription('');
    setLangue('');
    setNbPages('');
    setEditeur('');
    setAnnee('');
    setCodeBarre('');
    setCondition('');
    setPrix('');
    setImagelink('');

    const hihi = async () => {
      let fechedUserBooks = await fetch(
        `https://gachabook.herokuapp.com/get-user-books?userId=${props.userId}`
      );
      let userBooks = await fechedUserBooks.json();

      AsyncStorage.setItem('userBooks', JSON.stringify(userBooks));
      props.navigation.navigate('BottomNavigator');
    };
    hihi();
  }
  /*------------------------------------------------------*/
  useEffect(() => {
    setTitre('');
    setAuteur('');
    setDescription('');
    setLangue('');
    setNbPages('');
    setEditeur('');
    setAnnee('');
    setCodeBarre('');
    setCondition('');
    setPrix('');
    setImagelink('');

    if (props.bookDetails[0] != undefined) {
      setTitre(props.bookDetails[0].title);
      setAuteur(props.bookDetails[0].author);
      setLangue(props.bookDetails[0].language);
      setNbPages(JSON.stringify(props.bookDetails[0].pageCount));
      setCodeBarre(props.bookDetails[0].barcode);
      setEditeur(props.bookDetails[0].editor);
      setImagelink(props.bookDetails[0].imageLink);
      setDescription(props.bookDetails[0].description);
      setAnnee(props.bookDetails[0].year);
    }
  }, [props]);
  /*------------------------------------------------------*/
  ///////////////////////////////Return////////////////////////////////////////
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/bg2.png')}
        resizeMode="cover"
        style={styles.bg}
      ></ImageBackground>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('BottomNavigator');
          }}
        >
          <Ionicons
            name={(iconName = 'arrow-back')}
            size={30}
            color={'#032547'}
            style={styles.backText}
          />
        </TouchableOpacity>
        <View style={styles.logo}>
          <Image
            style={styles.imagelogo}
            source={require('../assets/pic4.png')}
          />
        </View>
        <View style={styles.barreButton}>
          {/* <Text style={styles.ajoutText}>Ajouter un Livre</Text> */}
          <Image style={styles.image} source={require('../assets/giphy.gif')} />
          <Button
            buttonStyle={styles.button}
            title="Scanner le Livre"
            onPress={() => props.navigation.navigate('ScanCode')}
          />
        </View>
        <View style={styles.containerInput}>
          <Input
            containerStyle={{ width: 350 }}
            inputStyle={styles.input}
            placeholder="   Titre"
            value={titre}
            onChangeText={(x) => setTitre(x)}
          />
          <Input
            containerStyle={{ width: 350 }}
            inputStyle={styles.input}
            placeholder="   Auteur"
            value={auteur}
            onChangeText={(x) => setAuteur(x)}
          />
          <Input
            containerStyle={{ width: 350 }}
            inputStyle={styles.input}
            placeholder="   Langue"
            value={langue}
            onChangeText={(x) => setLangue(x)}
          />
          <Input
            containerStyle={{ width: 350 }}
            inputStyle={styles.input}
            placeholder="   Nombre de pages"
            value={nbPages}
            onChangeText={(x) => setNbPages(x)}
          />

          <Input
            containerStyle={{ width: 350 }}
            inputStyle={styles.input}
            placeholder="   Editeur"
            value={editeur}
            onChangeText={(x) => setEditeur(x)}
          />

          <Input
            containerStyle={{ width: 350 }}
            inputStyle={styles.input}
            placeholder="Code-barre"
            value={codeBarre}
            onChangeText={(x) => setCodeBarre(x)}
          />
          <Input
            containerStyle={{ width: 350 }}
            inputStyle={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={(x) => setDescription(x)}
          />
          <Input
            containerStyle={{ width: 350 }}
            inputStyle={styles.input}
            placeholder="Annee"
            value={annee}
            onChangeText={(x) => setAnnee(x)}
          />
          <Input
            containerStyle={{ width: 350 }}
            inputStyle={styles.input}
            placeholder="   Etat du livre"
            value={condition}
            onChangeText={(x) => setCondition(x)}
          />
          <Input
            containerStyle={{ width: 350 }}
            inputStyle={styles.input}
            placeholder="   Prix"
            value={prix}
            onChangeText={(x) => setPrix(x)}
          />
          <Button
            buttonStyle={styles.photoButton}
            title="Prendre photo du livre"
          />
          <Button
            buttonStyle={styles.photoButton2}
            title="Ajouter le Livre"
            onPress={() => {
              saveBook(), props.navigation.navigate('BottomNavigator');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

//////////////////////////////////////////Styles//////////////////////////////////////////////////
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#DBE6E7',
    justifyContent: 'center',
    // marginTop: 30,
    width: '100%',
    height: '100%',
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('window').height / 0.5,
  },
  backText: {
    marginTop: 15,
    color: '#032547',
    marginTop: 50,
    marginRight: 'auto',
    marginLeft: 20,
    // fontSize: 20,
    fontWeight: 'bold',
  },
  imagelogo: {
    // justifyContent: 'center',
  },
  ajoutText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  barreButton: {
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    // width: '90%',
    borderRadius: 5,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 120,
  },
  button: {
    backgroundColor: '#032547',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
  },
  input: {
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 5,
  },
  photoButton: {
    backgroundColor: '#032547',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
    // paddingBottom: 10,
  },
  photoButton2: {
    backgroundColor: '#B0CAE2',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
    // paddingBottom: 10,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
  },
  containerInput: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//////////////////////////////////////////Redux//////////////////////////////////////////////////
/*------------------------------------------------------*/
function mapStateToProps(state) {
  return { bookDetails: state.scanBookReducer, userId: state.userIdReducer };
}
/*------------------------------------------------------*/
export default connect(mapStateToProps, null)(AddBook);
