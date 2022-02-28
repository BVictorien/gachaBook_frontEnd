// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import React from 'react';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import CardScreen from './screens/CardScreen';
import ProfileScreen from './screens/ProfileScreen';
import signIn from "./screens/signIn"
import singUp from "./screens/signUp"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == 'Search') {
            iconName = 'ios-location';
          } else if (route.name == 'Home') {
            iconName = 'ios-home';
          } else if (route.name == 'Card') {
            iconName = 'ios-basket';
          } else if (route.name == 'Profile') {
            iconName = 'ios-person';
          }
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#009788',
        inactiveTintColor: '#FFFFFF',
        style: {
          backgroundColor: '#111224',
        },
      }}
    >
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Card" component={CardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        <Stack.Screen name="SignUp" component={singUp} />
        <Stack.Screen name="SignIn" component={signIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
