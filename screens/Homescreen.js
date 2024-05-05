import React from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => { // Receive navigation prop
  const carouselData = [
    require('../assets/carousel1.jpg'),
    require('../assets/carousel2.jpg'),
    require('../assets/carousel1.jpg'),
  ];

  const products = [
    { image: require('../assets/products2.webp'), title: "DesktopPC", screen: "DesktopPC" },
    { image: require('../assets/products1.webp'), title: "Laptop", screen: "Laptop" },
    { image: require('../assets/products3.webp'), title: "Mouse", screen: "Mouse" },
    { image: require('../assets/products4.jpg'), title: "Keyboard", screen: "Keyboard" },
    // Add more products as required
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ImageBackground
        source={require('../assets/bgagords.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.container1}>
          <Text style={styles.text}>Welcome to Agords!</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}
          >
            {carouselData.map((image, index) => (
              <Image key={index} source={image} style={styles.carouselImage} />
            ))}
          </ScrollView>
          <Text style={styles.text1}>Search for Products:</Text>
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#ffffff"
            />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productsContainer}>
            <Text style={styles.text2}>Search by Categories:</Text>
            {products.map((product, index) => (
              <TouchableOpacity
                key={index}
                style={styles.productButton}
                onPress={() => navigation.navigate(product.screen)}
              >
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productButtonText}>{product.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container1: {
    alignItems: 'left',
  },
  text: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginLeft: 18,
  },
  text1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 40,
    marginBottom: 10,
  },
  text2: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
    marginBottom: 10,
  },
  carouselContainer: {
    paddingVertical: 20,
  },
  carouselImage: {
    width: 400,
    height: 400,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  searchBarContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 10,
  },
  searchButton: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  productButton: {
    width: '48%', // Adjust as needed
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  productImage: {
    width: '110%',
    height: 200,
    borderRadius: 10,
  },
  productButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
