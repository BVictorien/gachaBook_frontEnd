import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Input, Text, Icon} from 'react-native-elements'

export default function HomeScreen() {

  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <>
      <View style={styles.container}>
        <View  style={styles.search}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>GachaBook</Text>
          <Text style={{ color: '#E9940A', marginLeft: 75, marginTop: 9, fontSize: 20 }}>Déconnexion</Text>
        </View>
        <View style={{ backgroundColor: 'white', width: '90%', height: 50, marginLeft: 15, marginRight: 15, marginTop: 30, borderRadius: 30 }}  >
          <Input placeholder="   Cherchez un livre..." onChangeText={updateSearch} inputContainerStyle={{borderBottomWidth: 0}}
            rightIcon={<Icon name='search' size={45} color="#E9940A" />}
            />
        </View>
        <View>
          <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 15, marginTop: 30, fontSize: 20 }}>Derniers livres ajoutés</Text>
        </View>
        <View>
          <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 15, marginTop: 30, fontSize: 20 }}>Livres les plus proches</Text>
        </View>
      </View>

    </>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#1F1E1C',
  },
  input: {
    shadowColor: '#F69D0C', 
    shadowOffset: { width: -2, height: 4 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 3, 
  },
  elevation: {
    elevation: 20,
    shadowColor: '#F69D0C',
  },
  search: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 15,
  }
});
