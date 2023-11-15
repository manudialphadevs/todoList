import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Pending from './Pending';
import Completed from './Completed';
import Overdue from './Overdue';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function TabNavigator({ navigation }) {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Pending" component={Pending} />
        <Tab.Screen name="Completed" component={Completed} />
        <Tab.Screen name="Overdue" component={Overdue} />
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
    backgroundColor: '#8f22cb',
    marginTop: 40,
    paddingVertical: 8,
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 19,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
