import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import HomeScreen from './screens/Homescreen';
import LoginScreen from './screens/Loginscreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ProfileScreen from './screens/ProfileScreen';
import DesktopPCScreen from './screens/DesktopPCScreen';
import LaptopScreen from './screens/LaptopScreen';
import MouseScreen from './screens/MouseScreen';
import KeyboardScreen from './screens/KeyboardScreen';
import CoolerScreen from './screens/CoolerScreen';
import SkytechScreen from './screens/SkytechScreen';
import ViptechScreen from './screens/ViptechScreen';
import YeyianScreen from './screens/YeyianScreen';
import AsusrogScreen from './screens/AsusrogScreen'
import HpvictusScreen from './screens/HpvictusScreen'
import LenovoScreen from './screens/LenovoScreen'
import MsiScreen from './screens/MsiScreen'
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen'
import ConfirmationScreen from './screens/ConfirmationScreen'
import { CartProvider } from './screens/CartContext';

const Drawer = createDrawerNavigator();

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
            <Image source={require('./assets/profilepic.png')} style={styles.profilePic} />
          </TouchableOpacity>
          <Text style={styles.profileText}>Ren Vergara</Text>
        </View>
        <DrawerItemList {...props} labelStyle={styles.drawerItemText} />
      </DrawerContentScrollView>
      <TouchableOpacity onPress={handleLogout} style={[styles.drawerItem, { backgroundColor: '#ff8c00' }]}>
        <Text style={styles.drawerItemText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};


const SplashScreen = () => (
  <ImageBackground source={require('./assets/bgagords.png')} style={styles.background}>
    <View style={styles.container}>
      <Image source={require('./assets/logoagords.png')} style={styles.logo} />
    </View>
  </ImageBackground>
);


const App = () => {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds as an example, adjust as needed
  }, []);


  return (
    <CartProvider>
    <NavigationContainer>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen
            name="Login"
            component={LoginScreen}
            options={{
              drawerLabel: () => null,
              headerShown: false // Hide the header on Login screen
            }}
          />
          <Drawer.Screen
            name="Register"
            component={RegistrationScreen}
            options={{
              drawerLabel: () => null,
              headerShown: false // Hide the header on Register screen
            }}
          />
          <Drawer.Screen
              name="Home"
              component={HomeScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
              })}
            />
            <Drawer.Screen 
              name="Profile" 
              component={ProfileScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
              })} 
            />
           <Drawer.Screen 
              name="Cart" 
              component={CartScreen}
              options={{
                headerTitle: 'My Cart',
                headerTitleAlign: 'center',
              }} 
            />
          <Drawer.Screen 
              name="DesktopPC" 
              component={DesktopPCScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
                drawerLabel: () => null,
              })}
            />
            <Drawer.Screen 
              name="Laptop" 
              component={LaptopScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
                drawerLabel: () => null,
              })} 
            />
            <Drawer.Screen 
              name="Mouse" 
              component={MouseScreen} 
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
                drawerLabel: () => null,
              })}
            />
            <Drawer.Screen 
              name="Keyboard" 
              component={KeyboardScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
                drawerLabel: () => null,
              })}
            />
            <Drawer.Screen 
              name="Cooler" 
              component={CoolerScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
                drawerLabel: () => null,
              })}
            />
            <Drawer.Screen 
              name="Skytech" 
              component={SkytechScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
                drawerLabel: () => null,
              })}
            />
            <Drawer.Screen 
              name="Viptech" 
              component={ViptechScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
                drawerLabel: () => null,
              })}
            />
            <Drawer.Screen 
              name="Yeyian" 
              component={YeyianScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
                drawerLabel: () => null,
              })}
            />
            <Drawer.Screen 
              name="Asusrog" 
              component={AsusrogScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
                drawerLabel: () => null,
              })}
            />
            <Drawer.Screen 
              name="HPvictus" 
              component={HpvictusScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
                drawerLabel: () => null,
              })}
            />
            <Drawer.Screen 
              name="Lenovo" 
              component={LenovoScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
                drawerLabel: () => null,
              })}
            />
            <Drawer.Screen 
              name="Msi" 
              component={MsiScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
                drawerLabel: () => null,
              })}
            />
            <Drawer.Screen 
              name="Checkout" 
              component={CheckoutScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                  >
                    <Text style={styles.cartButtonText}>Cart</Text>
                  </TouchableOpacity>
                ),
                headerTitle: 'Agords',
                headerTitleAlign: 'center',
                drawerLabel: () => null,
              })}
            />
            <Drawer.Screen
            name="Confirm"
            component={ConfirmationScreen}
            options={{
              drawerLabel: () => null,
              headerShown: false // Hide the header on Login screen
            }}
          />
          {/* Other screens in the drawer */}
        </Drawer.Navigator>
      )}
    </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  profileText: {
    fontSize: 16,
    color: 'black',
    marginTop: 5, // Add some margin to separate the picture and text
  },
  drawerItem: {
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerItemText: {
    fontSize: 16,
    color: 'black',
  },
  cartButton: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#ff8c00',
    borderRadius: 5,
  },
  cartButtonText: {
    fontSize: 16,
    color: 'white',
  },
});


export default App;
