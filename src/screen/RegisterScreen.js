import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import { firebaseConfig, WARNA_BOLD, WARNA_PRIMER } from "../utils/constant";
import Input from "../components/Input";
import Button from "../components/Button";
import React,{useState} from 'react'
import { getApps, initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')


    if(!getApps().length){
        initializeApp(firebaseConfig);
        // console.log(getApps())
    }

    const handleRegister = () => {
        const auth = getAuth();
        if(password !== password2){
            alert('Password tidak sama')
        }else{                                                              
            createUserWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
                // Signed in 
        
                const user = userCredential.user;
                console.log(user)
                AsyncStorage.setItem('user', JSON.stringify(user))
               navigation.navigate('Login')
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
              });
            
        }
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
        <Input placeholder={"Konfirmasi Password"} secureTextEntry value={password2} onChangeText={(value) => setPassword2(value)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"Daftar"} onPress={() => handleRegister()}/>
        <Text style={{fontSize:14,color:'white'}}>Sudah memiliki akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
          <Text style={{fontSize:14,color:WARNA_PRIMER}}>Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
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
})