import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AUTH_CONFIG } from '../authConfig';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain:AUTH_CONFIG.domain,
  clientId:AUTH_CONFIG.clientId,
});

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleskip = () =>{
    navigation.navigate('Home'); //I don't know why this is giving error but it's still works :/ -A.V
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  }

//Google sign up/login
  const handleGoogleSignup = async () =>{
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
        connection: 'google-oauth0',
      });
      console.log('logged in with Google', credentials);
    } catch (error) {
      Alert.alert('Error', 'Failed to log in with Google');
      console.log(error);
    }
  };

//Facebook signup/login

  const hangleFacebookSignup = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
        connection: 'facebook',
      });
      console.log('logged in with Facebook', credentials);
    }  catch(error) {
       Alert.alert('Error', 'Failed to log in with Facebook');
       console.error(error);
    }
  }

  return (
    <View style={styles.container}>
    {/* Wrapper for the ImageBackground */}
    <View style={styles.imageWrapper}>
      <ImageBackground 
        source={require('../assets/welcome-drink-2.png')}
        style={styles.background}
        resizeMode="cover"
      />
    </View>
      {/* \Skip button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleskip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Welcome Text */}
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.appName}>Drinkea</Text>
        <Text style={styles.subText}>
          Check new bars, try new drinks,{'\n'}
          enjoy live music and more.
        </Text>
      </View>

      {/* Social buttons */}
      <View style={styles.socialContainer}>
        <Text style={styles.signInWithText}>sign in with</Text>
        <View style={styles.socialButtons}>
          {/* Facebook button */}
          <TouchableOpacity style={styles.facebookButton}>
            <Image source={require('../assets/facebook.png')} style={styles.icon} />
            <Text style={styles.socialText}>FACEBOOK</Text>
          </TouchableOpacity>
          {/* Google button */}
          <TouchableOpacity style={styles.googleButton}>
            <Image source={require('../assets/google.png')} style={styles.icon} />
            <Text style={styles.socialText}>GOOGLE</Text>
          </TouchableOpacity>
        </View>
        {/* Email/Phone button */}
        <TouchableOpacity style={styles.emailButton} onPress={handleSignUp}>
          <Text style={styles.emailButtonText}>Start with email or phone</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In link */}
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  imageWrapper: {
    position: 'absolute', 
    top: -75, // move this
    left: -45, //move this
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  background: {
    flex: 1,
  },
  skipButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  skipText: {
    fontWeight: 'bold',
    color: 'black',
  },
  textContainer: {
    marginTop: -200,
    flex:1,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  appName: {
    fontSize: 30,
    color: 'yellow',
    fontWeight: 'bold',
  },
  subText: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  },
  socialContainer: {
    alignItems: 'center',
  },
  signInWithText: {
    fontSize: 15,
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginHorizontal: 5,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginHorizontal: 5,
  },
  socialText: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  emailButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  emailButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signInContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  signInText: {
    color: 'lightgray',
  },
  signInLink: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;