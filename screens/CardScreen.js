import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CardScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CardScreen</Text>
    </View>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
