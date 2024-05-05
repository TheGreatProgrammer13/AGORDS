import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';

const products = [
  { id: 1, name: 'Logitech G502', image: require('../assets/logitech.jpg') },
  { id: 2, name: 'Razer Basilisk V3', image: require('../assets/razer.jpg') },
  { id: 3, name: 'Redragon Predator', image: require('../assets/redragon.jpg') },
  { id: 4, name: 'TMKB Falcon', image: require('../assets/falcon.jpg') },
  // Add more products here
];

const MouseScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log(`${item.name} clicked!`)}>
      <View style={styles.productItem}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../assets/bgagords.png')} // Change path to your image
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.title}>Mouse</Text>
          <Text style={styles.description}>
            Discover a wide range of high-quality computer mice at Agords. Our selection includes wireless, gaming, ergonomic, and many more types of mice from top brands such as Logitech, Razer, ASUS, and A4tech. Browse our collection to find the perfect mouse to fit your needs and enhance your computer experience.
          </Text>
        </View>
        <Text style={styles.title2}>Featured Products</Text>
        {/* Product Container */}
        <View style={styles.productContainer}>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.productList}
          />
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
    position: 'relative',
  },
  banner: {
    backgroundColor: '#ff9f00',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40, // Decreased paddingBottom
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20, // Adjusted marginTop
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  productContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  productItem: {
    margin: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 170,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productName: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});

export default MouseScreen;
