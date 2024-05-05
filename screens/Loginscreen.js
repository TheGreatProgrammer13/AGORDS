import React from 'react';
import { View, Button, ImageBackground, StyleSheet, TextInput, Text } from 'react-native';


function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/bgagords.png')} // Path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>
        {/* Your login UI components */}
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Login"
              onPress={() => navigation.navigate('Home')}
              color='#ff8c00'
            />
          </View>
        </View>
        <View style={styles.buttonContainer1}>
        <View style={styles.button}>
            <Button
              title="Not a Member? Sign Up now"
              onPress={() => navigation.navigate('Register')}
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
    resizeMode: 'cover', // or 'stretch' if you want
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
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
  button: {
    marginHorizontal: 10, // Add space between each button
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, // Decrease the space between heading and input fields
    color: '#ffffff', // Change text color to white
  },
  forgotPassword: {
    color: '#ff8c00', // Specify the color for the "Forgot Password?" text
    marginBottom: 10, // Add some space between the text and buttons
    marginLeft: 190,
  },
});

export default LoginScreen;
