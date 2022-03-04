//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

//////////////////////////////////////Function///////////////////////////////////////////////
function PaymentCard(props) {
  return (
    <View style={styles.background}>
      <Text
        onPress={() => {
          props.navigation.navigate('Store');
        }}
        style={styles.textBack}
      >
        back
      </Text>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={styles.image} source={require('../assets/pic6.png')} />
        </View>
        {/* <Image
          style={styles.image}
          source={require('../assets/credit-card-payment-bank.png')}
        /> */}
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
    </View>
  );
}

export default PaymentCard;
//////////////////////////////////////Style///////////////////////////////////////////////
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#DBE6E7',
    // justifyContent: 'center',
    // marginTop: 30,
    width: '100%',
    height: '100%',
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
  // image: {
  //   marginBottom: 25,
  // },
  container: {
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
