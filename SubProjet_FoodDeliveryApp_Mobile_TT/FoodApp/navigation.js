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
import SignUp from './src/screens/SignUpScreen';
import InboxScreen from './src/screens/InboxScreen';
import Icon from "react-native-vector-icons/Ionicons";
import ProductScreen from './src/screens/ProductScreen';
import FoodListScreen from './src/components/FoodListScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen
          name="Login"
          component={Login}
        />
            <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs} 
        />
         <Stack.Screen name="FoodListScreen" component={FoodListScreen} /> 
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
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarStyle: { display: 'flex' },headerShown: false 
        }}
      />
      <Tab.Screen name="MyOrder" component={MyOrderScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Inbox" component={InboxScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Account" component={AccountScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
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
        <Stack.Screen
        name="FoodListScreen"
        component={FoodListScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

