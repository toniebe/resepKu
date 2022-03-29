import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import ResepIn from "../assets/image/SplashScreen.png";
import { WARNA_PRIMER } from "../utils/constant";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { widht, height } = Dimensions.get("window");
const SplashScreen = ({ navigation }) => {
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        setTimeout(() => {
          navigation.replace("Dashboard");
        }, 2000);
      } else {
        setTimeout(() => {
          navigation.replace("Login");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <Image source={ResepIn} style={styles.image} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WARNA_PRIMER,
  },
  image: {
    width: widht,
    height: height,
  },
});
