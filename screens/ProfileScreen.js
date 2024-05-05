import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/bgagords.png')}
      style={styles.backgroundImage}
    >
      <Text style={styles.profileText}>My Profile</Text>
      <Image
        source={require('../assets/profilepic.png')}
        style={styles.profilePic}
      />
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Name:</Text>
        <Text style={styles.infoText1}>Ren Vergara</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Address:</Text>
        <Text style={styles.infoText1}>Quezon City</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Mobile No:</Text>
        <Text style={styles.infoText1}>09123456789</Text>
      </View>
      {/* Any additional content or components can be added here */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10, // Adjust as needed
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
  },
  infoBox: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  infoText1: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
