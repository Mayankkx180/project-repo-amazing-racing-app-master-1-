import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    Button,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const SplashScreen = ({navigation}) => { 
    return (
        <View style = {styles.container}>
            <View style= {styles.header}>
                <Animatable.Image
                animation="slideInDown"
                
                
                
                source={require('../assets/logo.png')}
                resizeMode="contain"
                />
                
            </View>
           
            <Animatable.View style= {styles.footer}
            animation="fadeInUpBig">
                <Animatable.Text style={styles.title} animation="slideInLeft"> Let's Get Started!</Animatable.Text>
                <Text > </Text>
                <View style={styles.button}>
           
                        <TouchableOpacity
                        
                        onPress={()=>navigation.navigate('SignInScreen')} style={styles.button}>
                            <Text>Sign In</Text>
                        

                </TouchableOpacity>
            </View>
        </Animatable.View>
        </View>
    );
};
   

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ffff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#29accd',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
    textAlign: 'center',
      
    
    color: '#05375a',
      
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'black',
      fontWeight: 'bold'
  }
});