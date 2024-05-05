import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: 5, name: 'ASUS ROG Strix G16', image: require('../assets/asus.jpg') },
  { id: 6, name: 'HP Victus Laptop', image: require('../assets/hp.jpg') },
  { id: 7, name: 'Lenovo IdeaPad 3', image: require('../assets/lenovo.jpg') },
  { id: 8, name: 'MSI Katana A15', image: require('../assets/msi.jpg') },
];

const LaptopScreen = () => {
  const navigation = useNavigation();

  const handleProductPress = (product) => {
  if (product.id === 5) {
    // Navigate to Cooler screen
    navigation.navigate('Asusrog');
  } else if (product.id === 6) {
    // Navigate to Skytech screen
    navigation.navigate('Hpvictus');
  } else if (product.id === 7) {
    // Navigate to Skytech screen
    navigation.navigate('Lenovo');
  } else if (product.id === 8) {
    // Navigate to Skytech screen
    navigation.navigate('Msi');
  } else {
    // Navigate to general product detail screen passing product information
    navigation.navigate('ProductDetail', { product });
  }
};



  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)}>
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
          <Text style={styles.title}>Laptops</Text>
          <Text style={styles.description}>
            Discover a wide selection of laptops from top brands at Agords. Whether you are looking for a business laptop or a gaming laptop, we have the perfect device for you. Shop now and enjoy fast and reliable performance, stunning visuals, and cutting-edge features. Plus, take advantage of our competitive prices and excellent customer service.
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

export default LaptopScreen;
