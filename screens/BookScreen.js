import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function BookScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerBook}>
        <Text style={styles.buttonBack}>
        <FontAwesome
                            name="reply"
                            size={35}
                            color="#FBAF19"
                            style={{ marginRight: 35, marginTop: 5 }}
                            onPress={() => props.navigation.goBack()}
                        />
        </Text>
        <View style={styles.imageView}>
          <Image>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require('../assets/favicon.png')}
            />
          </Image>
        </View>
        <View style={styles.navigation}>
          <View style={styles.link}>
            <Text style={{ color: '#fff' }}>Propre</Text>
            <Text style={{ color: 'rgba(192, 195, 219,0.24)' }}>Etat</Text>
          </View>
          <Text style={styles.barre}>|</Text>
          <View style={styles.link}>
            <Text style={{ color: '#fff' }}>400</Text>
            <Text style={{ color: 'rgba(192, 195, 219,0.24)' }}>
              Nombre de page
            </Text>
          </View>
          <Text style={styles.barre}>|</Text>
          <View style={styles.link}>
            <Text style={{ color: '#fff' }}>Fr</Text>
            <Text style={{ color: 'rgba(192, 195, 219,0.24)' }}>Langage</Text>
          </View>
          <Text style={styles.barre}>|</Text>
          <View style={styles.link}>
            <Text style={{ color: '#fff' }}>5</Text>
            <Text style={{ color: 'rgba(192, 195, 219,0.24)' }}>Points</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerDetails}>
        <View>
          <Text style={styles.name}>Titre</Text>
          <Text style={styles.author}>Author</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            amet perferendis nobis, nesciunt voluptas aut quasi veritatis
            magnam. Placeat velit rem unde natus cum earum similique, amet totam
            nesciunt nostrum.
          </Text>
          <Button buttonStyle={styles.contact} title="Contacter le vendeur" />
        </View>

        <View style={styles.icons}>
          <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
          <Ionicons name={(iconName = 'basket')} size={25} color={'grey'} />
        </View>
      </View>
    </View>
  );
}

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    backgroundColor: 'rgba(192, 195, 219,0.24)',

    color: '#fff',
    // justifyContent: 'center',
    marginTop: 30,
    width: '100%',
    height: '100%',
  },
  containerBook: {
    backgroundColor: '#1E202A',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  buttonBack: {
    color: '#F5960D',
    margin: 10,
  },
  imageView: {
    alignItems: 'center',
    margin: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(192, 195, 219,0.24)',
    padding: 15,
    marginBottom: 20,
    margin: 25,
    borderRadius: 20,
  },
  link: {
    // flexDirection: 'row',
    alignItems: 'center',
  },

  containerDetails: {
    margin: 10,
    flexDirection: 'row',
  },

  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  author: {
    color: 'grey',
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
    marginTop: 20,
    marginBottom: 20,
  },
  icons: {
    marginLeft: 'auto',
  },
  contact: {
    backgroundColor: '#F5960D',
    borderRadius: 50,
    marginBottom: 10,
    alignItems: 'center',
  },
  barre: {
    backgroundColor: 'black',
    width: 1,
  },
});
