import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { useCart } from './CartContext'; // Import the useCart hook

const LenovoScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(649.99);
  const { addToCart } = useCart(); // Get the addToCart function from CartContext

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - 649.99);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + 649.99);
  };

  const handleAddToCart = () => {
    const item = {
      id: 7,
      name: 'Lenovo IdeaPad 3',
      price: totalPrice,
      quantity: quantity,
    };
    addToCart(item); // Call the addToCart function from CartContext
    showAlert();
  };

  const showAlert = () => {
    Alert.alert(
      'Success!',
      'The product has been added to your cart.',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          style: 'default',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground
      source={require('../assets/bgagords.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.productDetails}>
          {/* Product details */}
          <Text style={styles.productName}>Lenovo IdeaPad 3</Text>
          <Image
            source={require('../assets/lenovo.jpg')}
            style={styles.productImage}
          />
          <Text style={styles.productDescription}>
          Specific Uses For Product:	Everyday Use, Gaming, Business </Text>
          <Text style={styles.productDescription}> Brand:	Cooler Master </Text>
          <Text style={styles.productDescription}> Personal computer design type:	Computer Tower </Text>
          <Text style={styles.productDescription}> Operating System:	Windows 11 Home </Text>
          <Text style={styles.productDescription}> Memory Storage Capacity:	16 GB </Text>
          <Text style={styles.productDescription}> Ram Memory Installed Size:	16 GB </Text>
          <Text style={styles.productDescription}> Model Name:	HAF 5 Pro </Text>
          <Text style={styles.productDescription}> Included Components:	Desktop, Mouse, Power Cord, Keyboard </Text>
          <Text style={styles.productDescription}> CPU Model	Core: i5-12400F </Text>
          <Text style={styles.productDescription}> GPU Model: RTX 4060 </Text>
          <Text style={styles.productDescription}> Color: Black</Text>

          {/* Quantity and Add to Cart button */}
          <Text style={styles.productPrice}>${totalPrice.toFixed(2)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
          {/* End of Quantity and Add to Cart button */}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDetails: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
  productImage: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'contain', // Adjust the resize mode as needed
    marginTop: 10,
  },
  productDescription: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff9f00',
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    fontSize: 20,
    color: 'white',
    paddingHorizontal: 15,
  },
  quantity: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: '#ff9f00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LenovoScreen;
