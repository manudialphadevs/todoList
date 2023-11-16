import { StyleSheet } from 'react-native';
import WelcomePage from './Components/Welcomepage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Components/Navigator';
import newTask from './Components/addTask';
import Pending from './Components/Pending';
import Completed from './Components/Completed';
import Example from './Components/Example';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomePage">
          <Stack.Screen name="Welcome Page" component={WelcomePage} />
          <Stack.Screen name="Example" component={Example} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="newTask" component={newTask} />
          <Stack.Screen name="Pending" component={Pending} />
          <Stack.Screen name="Completed" component={Completed} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
