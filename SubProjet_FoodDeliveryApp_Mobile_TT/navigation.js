import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import Login from './src/screens/Login';
import AccountScreen from './src/screens/AccountScreen';
import MyOrderScreen from './src/screens/MyOrderScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import InboxScreen from './src/screens/InboxScreen';
import Icon from "react-native-vector-icons/Ionicons";
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import RegisterPhoneScreen from './src/screens/RegisterPhoneScreen';
import VerificationScreen from './src/screens/VerificationScreen';
import ProductScreen from './src/screens/ProductScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       {/* <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />   */}
        <Stack.Screen 
          name="HomeTabs" 
          component={HomeTabs} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RegisterPhone" 
          component={RegisterPhoneScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Verification" 
          component={VerificationScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Product" 
          component={ProductScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case "Home":
              return <Icon name="home" size={size} color={color} />;
            case "MyOrder":
              return <Icon name="cart-outline" size={size} color={color} />;
            case "Favorite":
              return <Icon name="heart" size={size} color={color} />;
            case "Inbox":
              return <Icon name="chatbox-ellipses-outline" size={size} color={color} />;
            case "Account":
              return <Icon name="person-circle-outline" size={size} color={color} />;
            default:
              return null;
          }
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="MyOrder" component={MyOrderScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Inbox" component={InboxScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} initialParams={{ selectedTab: 'Account' }} />
    </Tab.Navigator>
  );
}
