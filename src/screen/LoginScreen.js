import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { WARNA_BOLD, WARNA_PRIMER,firebaseConfig } from "../utils/constant";
import React,{useState} from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getApps, initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if(!getApps().length){
    initializeApp(firebaseConfig);
    // console.log(getApps())
}
  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        AsyncStorage.setItem("user", JSON.stringify(user));
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Cek email dan passsword anda");
      });
    }
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/image/Logo-Resepku.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder={"Email"} value={email} onChangeText={(value) => setEmail(value)} />
        <Input placeholder={"Password"} secureTextEntry value={password} onChangeText={(value) => setPassword(value)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"Masuk"} onPress={()=> handleLogin()} />
        <Text style={{fontSize:14,color:'white'}}>Belum memiliki akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register') } >
          <Text style={{fontSize:14,color:WARNA_PRIMER}}>Daftar Disini</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WARNA_BOLD,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  
});
