import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
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
          Millions of Songs on Spontify
        </Text>

        <View style={{ height: 80 }} />
        <TouchableOpacity activeOpacity={0.4}
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
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
