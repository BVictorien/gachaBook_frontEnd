//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

//////////////////////////////////////Function///////////////////////////////////////////////
function PaymentCard(props) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text
        onPress={() => {
          props.navigation.navigate('Store');
        }}
        style={styles.textBack}
      >
        back
      </Text> */}
      <ImageBackground
        source={require('../assets/bg2.png')}
        resizeMode="cover"
        style={styles.bg}
      ></ImageBackground>
      <ScrollView>
        <Ionicons
          onPress={() => {
            props.navigation.navigate('Store');
          }}
          name={(iconName = 'arrow-back')}
          size={20}
          color={'#007576'}
          style={styles.textBack}
        />
        <View style={styles.containerCard}>
          <View style={styles.logo}>
            <Image
              style={styles.image}
              source={require('../assets/pic6.png')}
            />
          </View>

          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="  Montant"
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="  Numero de carte"
          />
          <View style={styles.dateCVN}>
            <Input
              containerStyle={{ width: 185 }}
              inputStyle={styles.input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              placeholder="  Date"
            />
            <Input
              containerStyle={{ width: 185 }}
              inputStyle={styles.input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              placeholder="  CVN"
            />
          </View>
          <Button
            onPress={() => {
              props.navigation.navigate('BottomNavigator');
            }}
            buttonStyle={styles.button}
            title="Valider"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PaymentCard;
//////////////////////////////////////Style///////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#DBE6E7',
    // justifyContent: 'center',
    // marginTop: 30,
    // width: '100%',
    // height: '100%',
  },
  textBack: {
    // marginTop: 15,
    color: '#007576',
    marginRight: 'auto',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('window').height / 1,
  },
  // image: {
  //   marginBottom: 25,
  // },
  containerCard: {
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    width: '50%',
  },
  input: {
    borderRadius: 5,
    backgroundColor: 'white',
  },
  dateCVN: {
    flexDirection: 'row',
  },
  button: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#007576',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
    marginTop: 10,
  },
});
