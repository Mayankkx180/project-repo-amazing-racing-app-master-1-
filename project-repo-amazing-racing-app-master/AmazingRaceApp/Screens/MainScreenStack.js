import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
//import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';





const MainStack = createStackNavigator();   

const MainStackScreen = ({navigation}) => (
    


        <MainStack.Navigator options={{ headerShown: false }}>
         <MainStack.Screen name= 'SplashScreen' component = {SplashScreen}/>
         <MainStack.Screen name= "SignInScreen" component={SignInScreen}/>
        <MainStack.Screen name= "SignUpScreen" component={SignUpScreen}/>
        
    
    </MainStack.Navigator>
  
);

export default MainStackScreen;