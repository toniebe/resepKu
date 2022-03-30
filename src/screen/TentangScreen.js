import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

import LogoResepKu from "../assets/image/Logo-Resepku.png";
import Button from "../components/Button";
import { WARNA_PRIMER } from "../utils/constant";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TentangScreen({navigation}) {

  const handleLogout = () => {
    AsyncStorage.removeItem("user");
    navigation.replace("Login");
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar barStyle='dark-content' translucent={false} backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.emptyContainer}>
        <Image source={LogoResepKu} style={styles.imageEmpty} />
      </View>
      <View style={styles.tentangContainer}>
        <Text style={{ fontSize:20,fontWeight:'bold'}}>Resepku</Text>
        <Text style={{fontSize:16,color:'#707070',width:300,textAlign:'center'}}>Resepku Adalah aplikasi yang menyajikan resep-resep kuliner indonesia dari yang tradisional hingga yang kekinian</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"Keluar"} onPress={() => handleLogout()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  emptyContainer: {
    backgroundColor: WARNA_PRIMER,
    justifyContent: "center",
    alignItems: "center",
    marginTop:30,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
  },
  imageEmpty: {
    width: 300,
    height: 300,
  },
  tentangContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
