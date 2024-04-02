import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, {useEffect} from "react";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from '@expo/vector-icons';
import * as AuthSession from 'expo-auth-session';
import { FontAwesome6 } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';


WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};




const LoginScreen = () => {

  useEffect( () => {
    const checkTokenValidity = async() => {
      const accessToken = await AuthSession.getItem("token");
      const expirationDate = await AuthSession.getItem("expirationDate");
      console.log("accessToken", accessToken);
      console.log("expirationDate", expirationDate);

      if  (accessToken && expirationDate) {
        const currentTime = Date.now();
        if (currentTime < parseInt(expirationDate)) {
          navigation.replace("Main")
     } else{
      //token  has expired so remove it and navigate to login screen again
      AuthSession.removeItem("token");
      AuthSession.removeItem("expirationDate")
     }
    }
  }
  checkTokenValidity();

  }, [])

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: 'add5031d88c34296b1925b1b11b51239',
      scopes: ['user-read-email', 'playlist-modify-public'],
      // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: makeRedirectUri({
        scheme: 'spontify'
        
      }),
      
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
    }
  }, [response]);


  // const  [request, response, promptAsync] = use ()  {
  //   const config ={
  //     issuer:"https:accounts.spotify.com",
  //     clientId:"add5031d88c34296b1925b1b11b51239",
  //     scopes:[
  //       "user-read-email",
  //       "user-library-read",
  //       "user-read-recently-played",
  //       "user-top-read",
  //       "playlist-read-private",
  //       "playlist-read-collaborative",
  //       "playlist-modify-public"
  //     ],
  //     redirectUrl:"expo//localhost:9002/--/spotify-auth-callback"
  //   }
  //   const result = await AuthSession.authAsync(config);
  //   console.log(result);
  //   if (result.accessToken) {
  //     const expirationDate  = new Date(result.accessTokenExpirationDate).getTime(); // convert today's date
  //     AuthSession.setItem("token", result.accessToken);
  //     AuthSession.setItem("expirationDate", expirationDate.toString() )
  //     navigation.navigate("Main")
  //   }
  // }

  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ height: 80 }} />
        <Entypo
          style={{ alignSelf: "center", justifyContent: "center" }}
          name="spotify"
          size={80}
          color="white"
        />
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 40,
            color: "white",
            marginTop: 40,
          }}
        >
          Millions of Songs on Spotify
        </Text>

        <View style={{ height: 80 }} />
        <TouchableOpacity activeOpacity={0.4}  onPress={() => {
        promptAsync();
      }}
          style={{
            backgroundColor: "#1D8954",
            borderRadius: 25,
            width: 300,
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
            justifyContent:'center'
          }}
        >
          <Text>Sign In with Spontify</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.4} style={{
            backgroundColor: "#131624",
            borderRadius: 25,
            width: 300,
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
            justifyContent:'center',
            flexDirection:"row",
            marginTop:15,
            borderColor:"#C0C0C0",
            borderWidth:0.8
          }}>
        <MaterialIcons name="phone-android" size={24} color="white" />
        <Text style={{flex:1, textAlign:'center', fontWeight:'500', color:'white'}}>Continue with Phone number</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.4} style={{
            backgroundColor: "#131624",
            borderRadius: 25,
            width: 300,
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
            justifyContent:'center',
            flexDirection:"row",
            marginTop:15,
            borderColor:"#C0C0C0",
            borderWidth:0.8
          }}>
        <FontAwesome6 name="google" size={24} color="red" />
        <Text style={{flex:1, textAlign:'center', fontWeight:'500', color:'white'}}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.4} style={{
            backgroundColor: "#131624",
            borderRadius: 25,
            width: 300,
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
            justifyContent:'center',
            flexDirection:"row",
            marginTop:15,
            borderColor:"#C0C0C0",
            borderWidth:0.8
          }}>
        <Entypo name="facebook" size={24} color="blue" />
        <Text style={{flex:1, textAlign:'center', fontWeight:'500', color:'white'}}>Continue with Facebook</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
