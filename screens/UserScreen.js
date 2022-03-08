import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import { Avatar, Button } from 'react-native-elements';
import CustomSwitch from '../components/CustomSwitch';
import { Ionicons } from '@expo/vector-icons';

import BookDetails from '../components/BookDetails';

const UserScreen = (props) => {
  const onSelectSwitch = (index) => {
    // alert('Selected index: ' + index);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Ionicons
            onPress={() => {
              props.navigation.navigate('BookScreen');
            }}
            name={(iconName = 'arrow-back')}
            size={20}
            color={'#fff'}
            style={styles.textBack}
          />
          <View style={styles.avatar}>
            {/* <Avatar
              size={150}
              rounded
              icon={{ name: 'adb', type: 'material' }}
              containerStyle={{ backgroundColor: 'red' }}
            ></Avatar> */}
            <Avatar
              size={200}
              rounded
              source={{
                uri: 'https://randomuser.me/api/portraits/women/57.jpg',
              }}
              // title="Bj"
              containerStyle={{ backgroundColor: 'grey' }}
            >
              {/* <Avatar.Accessory size={23} /> */}
            </Avatar>
          </View>
        </View>
        <View style={styles.stars}>
          <Ionicons
            name={(iconName = 'star')}
            style={{ padding: 5 }}
            size={30}
            color={'gold'}
          />
          <Ionicons
            name={(iconName = 'star')}
            style={{ padding: 5 }}
            size={30}
            color={'gold'}
          />
          <Ionicons
            name={(iconName = 'star')}
            style={{ padding: 5 }}
            size={30}
            color={'gold'}
          />
          <Ionicons
            name={(iconName = 'star')}
            style={{ padding: 5 }}
            size={30}
            color={'gold'}
          />
          <Ionicons
            name={(iconName = 'star')}
            style={{ padding: 5 }}
            size={30}
            color={'gold'}
          />
        </View>
        <Button
          buttonStyle={styles.buttonSend}
          title="Contacter le vendeur"
          onPress={() => props.navigation.navigate('Chat')}
          icon={{
            name: 'envelope',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconRight
        ></Button>
        <View style={{ alignItems: 'center' }}>
          <View style={{ alignItems: 'center', margin: 20 }}>
            <CustomSwitch
              selectionMode={1}
              roundCorner={true}
              option1={'Souhaits'}
              option2={'Livres en vente'}
              onSelectSwitch={onSelectSwitch}
              selectionColor={'white'}
            />
          </View>
        </View>
        <View style={styles.containerFavorites}>
          <BookDetails
            navigation={props.navigation}
            style={{ width: '100%', height: '25%' }}
          ></BookDetails>
          <BookDetails
            navigation={props.navigation}
            style={{ width: '100%', height: '25%' }}
          ></BookDetails>
          <BookDetails
            navigation={props.navigation}
            style={{ width: '100%', height: '25%' }}
          ></BookDetails>
          <BookDetails
            navigation={props.navigation}
            style={{ width: '100%', height: '25%' }}
          ></BookDetails>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DBE6E7',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  avatar: {
    alignItems: 'center',
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  banner: {
    backgroundColor: '#007576',
    height: 175,
    width: '100%',
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },
  buttonSend: {
    backgroundColor: '#007576',
    alignItems: 'center',
    width: 300,
    height: 50,
    marginTop: 10,
    borderRadius: 50,
  },
  containerFavorites: {
    width: 350,
  },
  textBack: {
    marginTop: 40,
    // color: '#007576',
    marginRight: 'auto',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    // paddingTop: 30,
  },
});
