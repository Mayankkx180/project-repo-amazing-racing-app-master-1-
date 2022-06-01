import React from "react";
import { Image, Button, ImageBackground, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

import Onboarding from 'react-native-onboarding-swiper';

const Skip =({...props}) => (
    <Button 
        title = 'Skip'
        color='#000000'
        {...props}
        />
);

const Next =({...props}) => (
    <Button 
        title = 'Next'
        color='#000000'
        {...props}
        />
);

const Done =({...props}) => (
    <TouchableOpacity 
        style ={{marginHorizontal:10}}
            {...props}
            >
            <Text style = {{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);



const OnboardingScreen=({navigation}) => {
    return (
<Onboarding
SkipButtonComponent={ Skip}
NextButtonComponent={Next}
DoneButtonComponent={Done} 
onSkip={()=> navigation.replace('HomeScreen')}
onDone={()=> navigation.replace('HomeScreen')}
  pages={[
    {
      backgroundColor: '#fff',
      //style: styles.background,
      image: <Image style={styles.img} source={require('../assets/Onboarding4_Mayank.png')} />,
      title: 'Onboarding1',
      subtitle: 'Done with React Native Onboarding Swiper 1',
    },
    {
        backgroundColor: '#fff',
        //style: styles.img,
        image: <Image style={styles.img} source={require('../assets/Onboarding2_Mayank.png')} />,
        title: 'Onboarding2',
        subtitle: 'Done with React Native Onboarding Swiper 2',
      },
      {
        backgroundColor: '#fff',
        //style: styles.background,
        image:<Image style={styles.img} source={require('../assets/Onboarding3_Mayank.png')} />,
        title: 'Onboarding3',
        subtitle: 'Done with React Native Onboarding Swiper 3',
      },
  ]}
/>
);
}



//Styles the OnbaordingScreen.
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

    img: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
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
  
  export default OnboardingScreen