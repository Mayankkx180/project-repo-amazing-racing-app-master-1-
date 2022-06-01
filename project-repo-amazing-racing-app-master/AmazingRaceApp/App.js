import React, { useEffect } from "react";
import 'react-native-gesture-handler';
import { View, Button, Text } from "react-native";
import OnboardingScreen from "./Screens/OnboardingScreen";
import AboutScreen from "./Screens/AboutScreen";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import TutorialScreen from "./Screens/TutorialScreen";
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack= createStackNavigator();
const App = () => 
{
    const [isFirstlaunch, setIsFirstLaunch] = React.useState(null);

    useEffect(() => {
        AsyncStorage.getItem('AlreadyLaunched').then(value => {
            if (value==null)
            {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            }
            else
            {
                setIsFirstLaunch(false);
            }
        });

    }, []);

    if(isFirstlaunch==null)
    {
        return null;
    }
    else if (isFirstlaunch==true)
    {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRoutename ='OnboardingScreen'>
                <Stack.Screen name= 'OnboardingScreen' component={OnboardingScreen}/>
                    <Stack.Screen name ='HomeScreen' component={HomeScreen}/>
                    <Stack.Screen name ='AboutScreen' component={AboutScreen}/>
                    <Stack.Screen name ='LoginScreen' component={LoginScreen}/>
                    <Stack.Screen name ='TutorialScreen' component={TutorialScreen}/>
                 
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    else {
        return <LoginScreen/>; 
    }
}
export default App;