import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
  const { total } = route.params;

  const handleConfirm = () => {
    navigation.navigate('Confirm'); // Navigate to the "Confirm" screen
  };

  return (
    <ImageBackground source={require('../assets/bgagords.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Billing Information</Text>
        <Text style={styles.total}>Total: ${total || 0}</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
        />
        <TextInput
          style={[styles.input, { height: 100 }]} // Increased height for multiline input
          placeholder="Shipping Address"
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
        />
        <View style={styles.inlineInputs}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            placeholder="Expiry Date (MM/YYYY)"
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="CVV"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirm Order</Text>
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
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inlineInputs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CheckoutScreen;
