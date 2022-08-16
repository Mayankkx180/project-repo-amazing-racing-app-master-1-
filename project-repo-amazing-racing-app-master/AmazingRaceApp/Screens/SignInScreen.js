import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Button,
    TextInput,
    Platform,
    Image,
    StyleSheet ,
    StatusBar,
    Alert,
    Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignInScreen = ({navigation}) => { 
    return (
        <View style = {styles.container}>
            <View style= {styles.header}>
                <Animatable.Image
                animation="slideInDown"
                
                
                
                source={require('../assets/logo.png')}
                //style={styles.splashs}
                resizeMode="contain"
                />
                
            </View>
           
            <Animatable.View style= {styles.footer}
            animation="fadeInUpBig">
                <Text> </Text>
                <Text> </Text>
                <Animatable.Text style={styles.title} animation="slideInLeft"> Email/StudentId</Animatable.Text>
              
                <TextInput
                    placeholder='Your Email/studentId'
                    placeholderTextColor={'grey'}
                    style={styles.inputBox}
                    autoCapitalize="none"
                    />
                 
                 <Text> </Text>
                 <Text> </Text>

                <Animatable.Text style={styles.title} animation="slideInLeft"> Password</Animatable.Text>
                <TextInput
                    placeholder='Your Password'
                    placeholderTextColor={'grey'}
                    style={styles.inputBox}
                    autoCapitalize="none"
                    />
                <Text> </Text>
                <Text> </Text>
                <View style={styles.button}>
               
                        <TouchableOpacity
                        
                        onPress={()=>navigation.navigate('SignUpScreen')} style={styles.button}>
                            <Text>Sign In</Text>
                        

                </TouchableOpacity>
            </View>
        </Animatable.View>
        </View>
    );
};
   

export default SignInScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ffff',
    justifyContent: 'center',
  },
  header: {
      flex: 1,
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
      color: '#ffffff',
      fontSize: 23,
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
  inputBox: {
    backgroundColor: "#d1d1d1",
    padding: 10
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});