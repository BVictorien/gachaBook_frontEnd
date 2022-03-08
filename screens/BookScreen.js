import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { Image, Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

function BookScreen(props) {
  return (
    <ScrollView style={{ flex: 1, marginTop: 10 }}>
      <View style={styles.container}>
        <View style={styles.headNavigation}>
          <Ionicons
            onPress={() => {
              props.navigation.navigate('BottomNavigator');
            }}
            name={(iconName = 'arrow-back')}
            size={30}
            color={'#007576'}
            style={styles.textBack}
          />
          <Ionicons
            style={styles.heart}
            name={(iconName = 'heart')}
            size={30}
            color={'red'}
          />
        </View>
        <View style={styles.containerBook}>
          <Image>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require('../assets/pillars.png')}
            />
          </Image>
        </View>
        <View style={styles.containerbois}>
          <Image
            style={styles.imageBois}
            resizeMode="cover"
            source={require('../assets/bois.png')}
          />
        </View>
        <View style={styles.containerDetails}>
          <View style={styles.bookdetails}>
            <Text style={styles.name}>Titre</Text>
            <Text style={styles.author}>Author</Text>
            <View style={styles.navigation}>
              <View style={styles.link}>
                <Text style={{ color: '#949494' }}>Propre</Text>
                <Text style={{ color: 'rgba(148, 148, 148,0.65)' }}>Etat</Text>
              </View>
              <Text style={styles.barre}>|</Text>
              <View style={styles.link}>
                <Text style={{ color: '#949494' }}>400</Text>
                <Text style={{ color: 'rgba(148, 148, 148,0.65)' }}>
                  Nombre de page
                </Text>
              </View>
              <Text style={styles.barre}>|</Text>
              <View style={styles.link}>
                <Text style={{ color: '#949494' }}>Fr</Text>
                <Text style={{ color: 'rgba(148, 148, 148,0.65)' }}>
                  Langage
                </Text>
              </View>
              <Text style={styles.barre}>|</Text>
              <View style={styles.link}>
                <Text style={{ color: '#949494' }}>5</Text>
                <Text style={{ color: 'rgba(148, 148, 148,0.65)' }}>
                  Points
                </Text>
              </View>
            </View>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              amet perferendis nobis, nesciunt voluptas aut quasi veritatis
              magnam. Placeat velit rem unde natus cum earum similique, amet
              totam nesciunt nostrum.
            </Text>
            <Button
              buttonStyle={styles.contact}
              title="Contacter le vendeur"
              onPress={() => props.navigation.navigate('UserScreen')}
            />
          </View>

          {/* <View style={styles.icons}>
          <Ionicons name={(iconName = 'basket')} size={25} color={'grey'} />
        </View> */}
        </View>
      </View>
    </ScrollView>
  );
}

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBE6E7',

    color: '#fff',
    height: '100%',
    width: '100%',
  },
  headNavigation: {
    flexDirection: 'row',
  },
  heart: {
    marginTop: 15,
    marginRight: 20,
    marginLeft: 'auto',
    paddingTop: 30,
  },
  containerBook: {
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
  },
  containerbois: {},
  imageView: {
    alignItems: 'center',
    margin: 20,
  },
  image: {
    width: 200,
    height: 300,
  },
  imageBois: {
    alignItems: 'center',
    padding: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(245, 245, 245,0.53)',
    padding: 15,
    marginTop: 20,
    // margin: 25,
    borderRadius: 20,
  },
  link: {
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  containerDetails: {
    margin: 10,
    // marginTop: -10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookdetails: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 21,
  },
  author: {
    color: 'grey',
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
    // marginTop: 20,
    marginBottom: 20,
    // margin: 20,
    // width: '90%',
    padding: 20,
  },
  icons: {
    marginLeft: 'auto',
  },
  contact: {
    backgroundColor: '#007576',
    borderRadius: 50,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  barre: {
    backgroundColor: 'black',
    width: 1,
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
