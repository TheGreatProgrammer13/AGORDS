import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { useCart } from './CartContext';

const CartScreen = ({ navigation }) => { // Receive navigation prop
  const { state, dispatch } = useCart();
  
  // Calculate total price
  const total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  
  const handleIncrement = (itemId) => {
    dispatch({ type: 'INCREMENT_ITEM', payload: { itemId } });
  };

  const handleDecrement = (itemId) => {
    dispatch({ type: 'DECREMENT_ITEM', payload: { itemId } });
  };

  const handleDelete = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { itemId } });
  };
  
  const handleCheckout = () => {
    // Display confirmation alert before checking out
    Alert.alert(
      'Confirm Checkout',
      `Total: $${total}`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Checkout',
          onPress: () => navigation.navigate('Checkout', { total }), // Proceed to checkout
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground
      source={require('../assets/bgagords.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Your Cart</Text>
        {state.items.length === 0 ? (
          <Text style={styles.emptyCart}>Your cart is empty</Text>
        ) : (
          state.items.map(item => (
            <View key={item.id} style={styles.item}>
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                <View style={styles.buttonContainer}>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => handleDecrement(item.id)}
                    >
                      <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.itemQuantity}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => handleIncrement(item.id)}
                    >
                      <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButtonContainer}>
                    <Text style={styles.deleteButton}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  emptyCart: {
    fontSize: 30,
    color: 'gray',
  },
  item: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Evenly space items along the row
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '90%', // Limit the width of the item container
  },
  itemDetails: {
    flex: 1, // Take up remaining space in the row
  },
  itemName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons horizontally
    alignItems: 'center', // Center buttons vertically
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#ff8c00',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  deleteButtonContainer: {
    marginLeft: 'auto', // Add margin to separate delete button from quantity buttons
  },
  deleteButton: {
    fontSize: 16,
    color: 'red',
    marginTop: 15,
  },
  checkoutButton: {
    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
