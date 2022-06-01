import React from "react";
import 'react-native-gesture-handler';
import {Image, ImageBackground, StyleSheet, View, Text, } from "react-native";
import AppButton from "../components/AppButton";
import TutorialScreen from "./TutorialScreen";
import { NavigationContainer } from "@react-navigation/native"; 
import colors from "../config/colors";

//Calls the HomeScreen.
const HomeScreen=({navigation})=> {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background_resize.png")}
    >   
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
  <View style={styles.buttonContainer}>
  <AppButton title='Play!' onPress={() => navigation.navigate("LoginScreen")}/>
  <AppButton title='How to play!' onPress={() => navigation.navigate("TutorialScreen")}/>
  <AppButton title='About the app!' onPress={() => navigation.navigate("AboutScreen")}/>
   </View>
     </ImageBackground>
  );
}; 

//Styles the HomeScreen.
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonContainer: {
    padding: 20,
    width: '100%'
  },

  logo: {

  },

  logoContainer: {
    position: "absolute",
    top: 40,
    left: -15,
    alignItems: "center",
  },

  playButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },

  tutorialButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});

export default HomeScreen;
