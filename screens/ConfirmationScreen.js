import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const ConfirmationScreen = ({ navigation }) => {
  const handleReturnHome = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={require('../assets/bgagords.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Thank you for Ordering</Text>
        <Text style={styles.message}>
          We are getting started on your order right away, and you will receive an order confirmation email shortly to qajivergara@tip.edu.ph
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleReturnHome}>
          <Text style={styles.buttonText}>Return to Home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConfirmationScreen;
