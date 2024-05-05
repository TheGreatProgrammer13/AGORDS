import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TextInput } from 'react-native';

function RegistrationScreen({ navigation }) {
  const handleRedirectToLogin = () => {
    navigation.navigate('Login'); // Redirect to the Login screen
  };

  return (
    <ImageBackground
      source={require('../assets/bgagords.png')} // Path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Registration</Text>
        {/* Your registration form fields */}
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Register"
          onPress={handleRedirectToLogin}
          color='#ff8c00'
            />
          </View>
          </View>
        <View style={styles.buttonContainer1}>
          <View style={styles.button}>
            <Button
              title="Already Have an Account? Login Now"
          onPress={handleRedirectToLogin}
          color='#ff8c00'
            />
          </View>
          </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // Change text color to be visible on the background
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    marginBottom: 5, // Decrease the space between text fields and buttons
    width: 300,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20, // Decrease the space between text fields and buttons
    marginBottom: 250,
  },
  buttonContainer1: {
    flexDirection: 'row',
    marginTop: 20, // Decrease the space between text fields and buttons
  },
});

export default RegistrationScreen;
