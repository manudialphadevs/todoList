import React,{useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Pending from './Pending';
import Completed from './Completed';
import Overdue from './Overdue';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Example from './Example';


const Tab = createMaterialTopTabNavigator();

function TabNavigator({ navigation }) {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Pending" component={Pending} />
        <Tab.Screen name="Completed" component={Completed} />
        <Tab.Screen name="Example" component={Example} />
      </Tab.Navigator>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('newTask')}>
        <Text style={styles.btnTextStyle}>Add</Text>
      </TouchableOpacity>
    </>
  );
}
export default TabNavigator;
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#083c33',
    // marginTop: 40,
    paddingVertical: 18,
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 14,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
