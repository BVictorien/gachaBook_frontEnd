//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

//////////////////////////////////////Function///////////////////////////////////////////////
function PaymentCard(props) {
  //////////////////////////////////////States declarations//////////////////////////////////
  const [montant, setMontant] = useState(25);
  //////////////////////////////////////Methods///////////////////////////////////////////////
  const payment = async (sellerID, price, bookId) => {
    const data = await fetch("http://192.168.10.136:3000/add-monney", {
      method: "PUT",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `userId=${props.userId}&price=${montant}`,
    });
  };
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
        source={require("../assets/bg2.png")}
        resizeMode="cover"
        style={styles.bg}
      ></ImageBackground>
      <ScrollView>
        <Ionicons
          onPress={() => {
            props.navigation.navigate("Store");
          }}
          name={(iconName = 'arrow-back')}
          size={30}
          color={'#032547'}
          style={styles.textBack}
        />
        <View style={styles.containerCard}>
          <View style={styles.logo}>
            <Image
              style={styles.image}
              source={require("../assets/pic6.png")}
            />
          </View>

          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="  Montant"
            onChangeText={(val) => setMontant(val)}
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
            onLongPress={() => {
              {
                payment();
                props.navigation.navigate("BottomNavigator");}
            }}
            buttonStyle={styles.button}
            title="Valider"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

//////////////////////////////////////Redux/////////////////////////////////////////////
function mapStateToProps(state) {
  return {
    username: state.username,
    userId: state.userIdReducer,
    userProfil: state.userProfilReducer,
  };
}
export default connect(mapStateToProps, null)(PaymentCard);
//////////////////////////////////////Style/////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#DBE6E7',
    // justifyContent: 'center',
    // marginTop: 30,
    // width: '100%',
    // height: '100%',
  },
  textBack: {
    // marginTop: 15,
    color: '#032547',
    marginRight: 'auto',
    marginLeft: 20,
    // fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('window').height / 0.5,
  },
  // image: {
  //   marginBottom: 25,
  // },
  containerCard: {
    alignItems: "center",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
    width: "50%",
  },
  input: {
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 5,
  },
  dateCVN: {
    flexDirection: "row",
  },
  button: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#032547',
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
    marginTop: 10,
  },
});
