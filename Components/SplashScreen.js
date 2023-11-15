import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // Navigate to the main screen after 3 seconds
      navigation.navigate('Main');
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the splash screen</Text>
    </View>
  );
};
export default SplashScreen;
