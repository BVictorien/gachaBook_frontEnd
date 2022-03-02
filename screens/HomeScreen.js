import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Icon } from 'react-native-elements';
import LatestBooks from '../components/LatestBooks';
import NearestBooks from '../components/NearestBooks';

export default function HomeScreen(props) {

  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  const handleSearch = () => {
    // console.log('Test réussi')
    props.navigation.navigate('BottomNavigator', { screen: 'Search' })
  }

  // isConnected = false;
  // let logout;
  // if (isConnected) {
  //   logout = <Text style={styles.logout}>Déconnexion</Text>
  // } else {
  //   logout = <Text style={styles.login}>Connexion</Text>;
  // }
  let logout = <Text style={styles.login}>Connexion</Text>

  return (
    <>
      <View style={styles.container}>
        <View style={styles.search}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>GachaBook</Text>
          {logout}
        </View>
        <View style={{ backgroundColor: 'white', width: '90%', height: 50, marginLeft: 15, marginRight: 15, marginTop: 30, borderRadius: 30 }}  >
          <Input placeholder="   Cherchez un livre..." onChangeText={updateSearch}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            rightIcon={<Icon name='search' size={45} color="#E9940A" onPress={() => handleSearch()} />}
          />
        </View>
        <View>
          <Text style={styles.title}>Derniers livres ajoutés</Text>
          <View style={styles.books}>
            <LatestBooks></LatestBooks>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Livres les plus proches</Text>
          <NearestBooks></NearestBooks>
        </View>
      </View>

    </>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#1F1E1C',
  },
  logout: {
    color: '#E9940A',
    marginLeft: 75,
    marginTop: 9,
    fontSize: 20
  },
  login: {
    color: '#E9940A',
    marginLeft: 95,
    marginTop: 9,
    fontSize: 20
  },
  input: {
    shadowColor: '#F69D0C',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  search: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 15,
  },
  books: {
    flexDirection: 'row',
  },
  title: {
    padding: 0,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20,
  }
});
