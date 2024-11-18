import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login with:', email, password);
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password screen (need to work on this)
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleFacebookLogin = () => {
    // Add Facebook login functionality (need to look this up)
  };

  const handleGoogleLogin = () => {
    // Add Google login functionality (need to look this up)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Your email or phone"
        placeholderTextColor="#c4c4c4"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#c4c4c4"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signInWithText}>Sign in with</Text>
      
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
        <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
        <Text style={styles.socialText}>FACEBOOK</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
        <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        <Text style={styles.socialText}>GOOGLE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f8f8f8',
    color: '#333',
  },
  forgotPassword: {
    color: '#f8ce46',
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#f8ce46',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signUpText: {
    color: '#7e7e7e',
  },
  signUpLink: {
    color: '#f8ce46',
    fontWeight: 'bold',
  },
  signInWithText: {
    textAlign: 'center',
    color: '#7e7e7e',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    width: '45%',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialText: {
    fontWeight: 'bold',
    color: '#7e7e7e',
  },
});

export default LoginScreen;
