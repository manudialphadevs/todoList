import React,{useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';

function WelcomePage({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      // Navigate to the main screen after 3 seconds
      navigation.navigate('TabNavigator');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Manage your daily tasks.</Text>
    </View>
  );
}
export default WelcomePage;

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'purple',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'end',
    paddingBottom: 100,
  },
  texts: {
    color: 'white',
    fontSize: 30,
  },
});
