/////////////////////////////////////IMPORTS//////////////////////////////////////////////////////////
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React from 'react';

/*-------------------------------------------------------------------------*/
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import CartScreen from './screens/CartScreen';
import BookScreen from './screens/BookScreen';
import ProfileScreen from './screens/ProfileScreen';
import ChatScreen from './screens/ChatScreen';
import signIn from './screens/signIn';
import singUp from './screens/signUp';
import ScanCode from './screens/ScanCode';
import AddBook from './screens/AddBook';
import Store from './screens/Store';
import PaymentEnCours from './screens/PaymentEnCours';
import paymentCard from './screens/paymentCard';
import UserScreen from './screens/UserScreen';

/*------------------------------nav-------------------------------------------*/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/*-------------------------------------------------------------------------*/
import { Ionicons } from '@expo/vector-icons';

/*-------------------------redux------------------------------------------------*/
import { provider, Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import scanBookReducer from './reducers/scanBookReducer';
import token from './reducers/token';
import username from './reducers/username';
import userIdReducer from './reducers/userIdReducer';
import cartReducer from './reducers/cartReducer';

const store = createStore(
  combineReducers({
    token,
    username,
    scanBookReducer,
    userIdReducer,
    cartReducer,
  })
);

/*-------------------------------------------------------------------------*/
const Stack = createStackNavigator();
const Stack2 = createStackNavigator();
const Tab = createBottomTabNavigator();

// let screen = ProfileScreen;
/////////////////////////////////////Funtion//////////////////////////////////////////////////////////
/*-------------------------------------------------------------------------*/
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
          } else if (route.name == 'Cart') {
            iconName = 'ios-basket';
          } else if (route.name == 'Profile') {
            iconName = 'ios-person';
          }
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#009788',
        inactiveTintColor: '#6D7D8B',
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // marginTop: -40,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Profile"
        component={StackNav}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate('Profile', {
              screen: 'Profile',
            });
          },
        })}
      />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

/*-------------------------------------------------------------------------*/
const StackNav = () => {
  return (
    <Stack2.Navigator screenOptions={{ headerShown: false }}>
      <Stack2.Screen name="Profile" component={ProfileScreen} />
      <Stack2.Screen name="Chat" component={ChatScreen} />
    </Stack2.Navigator>
  );
};
/*-------------------------------------------------------------------------*/
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
          <Stack.Screen name="SignUp" component={singUp} />
          <Stack.Screen name="SignIn" component={signIn} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="AddBook" component={AddBook} />
          <Stack.Screen name="ScanCode" component={ScanCode} />
          <Stack.Screen name="BookScreen" component={BookScreen} />
          <Stack.Screen name="Store" component={Store} />
          <Stack.Screen name="PaymentEnCours" component={PaymentEnCours} />
          <Stack.Screen name="UserScreen" component={UserScreen} />
          <Stack.Screen name="paymentCard" component={paymentCard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
/////////////////////////////////////Style//////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBE6E7',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // minHeight: '100vh',
  },
});
