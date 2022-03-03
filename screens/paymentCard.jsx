//////////////////////////////////////IMPORT///////////////////////////////////////////////
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";

//////////////////////////////////////Function///////////////////////////////////////////////
function PaymentCard(props) {
  return (
    <View style={styles.background}>
      <Text
        onPress={() => {
          props.navigation.navigate("Store");
        }}
        style={styles.textBack}
      >
        back
      </Text>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/credit-card-payment-bank.png")}
        />
        <Input
          containerStyle={{ width: 370 }}
          inputStyle={styles.input}
          placeholder="Montant"
        />
        <Input
          containerStyle={{ width: 370 }}
          inputStyle={styles.input}
          placeholder="Numero de carte"
        />
        <View style={styles.dateCVN}>
          <Input
            containerStyle={{ width: 185 }}
            inputStyle={styles.input}
            placeholder="Date"
          />
          <Input
            containerStyle={{ width: 185 }}
            inputStyle={styles.input}
            placeholder="CVN"
          />
        </View>
      </View>
      <Button
        onPress={() => {
          props.navigation.navigate("BottomNavigator");
        }}
        buttonStyle={styles.button}
        title="Valider"
      />
    </View>
  );
}

export default PaymentCard;
//////////////////////////////////////Style///////////////////////////////////////////////
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1E202A",
  },
  textBack: {
    color: "#F5960D",
    marginTop: 75,
    marginLeft: 15,
  },
  image: {
    marginBottom: 25,
  },
  container: {
    alignItems: "center",
  },
  input: {
    borderRadius: 5,
    backgroundColor: "white",
  },
  dateCVN: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#F5960D",
    borderRadius: 50,
    width: "90%",
    marginLeft: 15,
    marginTop: 20,
    padding: 20,
  },
});
