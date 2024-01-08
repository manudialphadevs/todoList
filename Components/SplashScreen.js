import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AddTaskScreen');
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Manage your daily tasks.</Text>
    </View>
  );
};
export default SplashScreen;
