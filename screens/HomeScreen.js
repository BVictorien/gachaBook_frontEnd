import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import React from "react";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="signUp"
        onPress={() => props.navigation.navigate("SignUp")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
