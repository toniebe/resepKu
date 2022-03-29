import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen'
import CategoryScreen from '../screen/CategoryScreen'
import ExitScreen from '../screen/ExitScreen'
import SplahScreen from '../screen/SplashScreen'
import DetailScreen from '../screen/DetailScreen'
import CategoryDetailScreen from '../screen/CategoryDetailScreen'
import SearchScreen from '../screen/SearchScreen'
import RecomendationScreen from '../screen/RecomendationScreen'
import ErrorScreen from '../screen/ErrorScreen'
import RegisterScreen from '../screen/RegisterScreen';
import LoginScreen from '../screen/LoginScreen';

import iconExit from '../assets/image/icon-exit.png'
import iconHome from '../assets/image/home.png'
import iconCategory from '../assets/image/icon-category.png'


import {WARNA_PRIMER} from '../utils/constant'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const IconBottom = (props) => {
    const {color, focused} = props.data
    let colorSelected = focused ? WARNA_PRIMER : 'grey'
    return(
      <View>
        <Image source={props.image} style={{width: 25, height: 25, tintColor: colorSelected }} />
      </View>
    )
  }


const Dashboard = () => {
    return(
        <Tab.Navigator tabBarOptions={{
            keyboardHidesTabBar: true,
          }}>
            <Tab.Screen 
              name="Home" 
              component={HomeScreen}
              options={{
                tabBarLabel: () => {return <Text style={{fontSize:10}}>Beranda</Text>},
                tabBarIcon: (props) => {return <IconBottom data={props} image={iconHome}/>},
                headerShown: false,
              }}

            />
            <Tab.Screen 
              name="Category" 
              component={CategoryScreen}
              options={{
                tabBarLabel: () => {return <Text style={{fontSize:10}}>Kategori</Text>},
                tabBarIcon: (props) => {return <IconBottom data={props} image={iconCategory}/>},
                headerShown: false,
              }}
            />
            <Tab.Screen 
              name="Exit" 
              component={ExitScreen}
              options={{
                tabBarLabel: () => {return <Text style={{fontSize:10}}>Keluar</Text>},
                tabBarIcon: (props) => {return <IconBottom data={props} image={iconExit}/>},
                headerShown: false,
              }}
            />
        </Tab.Navigator>
    )
    
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplahScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
            <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Error" component={ErrorScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Recomendation" component={RecomendationScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
