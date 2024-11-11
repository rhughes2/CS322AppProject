import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import useAuth from '../useAuth';

const LoginScreen = () => {
  const { user, login, logout } = useAuth();

  return (
    <View style={styles.container}>
      {!user ? (
        <TouchableOpacity style={styles.authButton} onPress={login}>
          <Text style={styles.authButtonText}>Log in with Auth0</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Text>Welcome, {user.name}!</Text>
          <TouchableOpacity style={styles.authButton} onPress={logout}>
            <Text style={styles.authButtonText}>Log out</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = /* async */() => {
    // Placeholder for Auth0 sign-up logic if needed -Arvic
    // Method for creating Users, can be moved to useAuth.js
    // I cannot find any methods outlining this process, may be issue -Nate
    /* try {
      await auth0.auth
        .createUser({
          email: email,
          password: password,
          connection: 'Username-Password-Authentication',
          user_metadata: { fullName: fullName },
        });
      console.log('User created successfully');
    } catch (error) {
      console.error('Error creating user: ', error);
    }
  }; */
    console.log('Sign up with:', fullName, email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* Full Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {/* gotta seach and eye icon */}
        {/* <Image source={require('../assets/eye_icon.png')} style={styles.passwordIcon} /> */}
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>

      {/* Social Sign Up */}
      <Text style={styles.socialSignUpText}>Sign up with</Text>
      <View style={styles.socialButtons}>
        {/* Facebook Button */}
        <TouchableOpacity style={styles.facebookButton}>
          <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
          <Text style={styles.facebookButtonText}>FACEBOOK</Text>
        </TouchableOpacity>

        {/* Google Button */}
        <TouchableOpacity style={styles.googleButton}>
          <Image source={require('../assets/google.png')} style={styles.socialIcon} />
          <Text style={[styles.googleButtonText]}>GOOGLE</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  signUpButton: {
    backgroundColor: '#f8ce46',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginText: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
  },
  loginLink: {
    color: '#f8ce46',
    fontWeight: 'bold',
  },
  socialSignUpText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#888',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4267B2',
    padding: 10,
    borderRadius: 30,
    width: '40%',
    justifyContent: 'center',
  },

  facebookButtonText:{
    color: 'white',
    fontWeight: 'bold',
  },

  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    borderRadius: 30,
    width: '40%',
    justifyContent: 'center',
  },
  googleButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  authButton: {
    backgroundColor: '#f8ce46',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  authButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignUpScreen;
