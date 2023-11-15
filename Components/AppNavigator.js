import { createStackNavigator } from 'react-navigation';
import SplashScreen from './SplashScreen';
const AppNavigator = createStackNavigator(
  {
    Splash: { screen: SplashScreen },
  },
  {
    initialRouteName: 'Splash',
  }
);
export default AppNavigator;