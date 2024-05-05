import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: 1, name: 'Cooler Master HAF 5 Pro', image: require('../assets/cooler.jpg') },
  { id: 2, name: 'Skytech Gaming Nebula', image: require('../assets/skytech.jpg')},
  { id: 3, name: 'ViprTech Ghost 3.0', image: require('../assets/viptech.jpg') },
  { id: 4, name: 'YEYIAN Yari X24', image: require('../assets/yeyian.jpg') },
  // Add more products here
];

const DesktopPCScreen = () => {
  const navigation = useNavigation();

  const handleProductPress = (product) => {
  if (product.id === 1) {
    // Navigate to Cooler screen
    navigation.navigate('Cooler');
  } else if (product.id === 2) {
    // Navigate to Skytech screen
    navigation.navigate('Skytech');
  } else if (product.id === 3) {
    // Navigate to Skytech screen
    navigation.navigate('Viptech');
  } else if (product.id === 4) {
    // Navigate to Skytech screen
    navigation.navigate('Yeyian');
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
          <Text style={styles.title}>Desktop PC</Text>
          <Text style={styles.description}>
            Looking for a high-performance desktop PC for gaming or work? Look no further than Agords! Our extensive collection of desktop PCs features the latest models from top brands like ASUS, HP, and Lenovo, with options to suit any budget or requirement. Shop now and enjoy fast and reliable performance, powerful graphics, and user-friendly features for all your computing needs.
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

export default DesktopPCScreen;
