import React,{useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function WelcomePage({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      // Navigate to the main screen after 3 seconds
      navigation.navigate('TabNavigator');
    }, 3000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: 'purple',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'end',
        paddingBottom: 100,
      }}
    >
      <Text style={styles.texts}>Manage your daily tasks.</Text>

      
    </View>
  );
}
export default WelcomePage;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8f22cb',
    marginTop: 40,
    paddingVertical: 8,
    width: 100,
    borderRadius: 35,
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 19,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  texts: {
    color: 'white',
    fontSize: 30,
  },
});
