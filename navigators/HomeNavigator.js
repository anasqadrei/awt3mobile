import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SongScreen from '../screens/SongScreen';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Song: {
    screen: SongScreen,
  },
}, {
  navigationOptions: ({ navigation }) => ({
    headerTitleStyle: {
    },
    headerStyle: {
      // paddingTop: -Expo.Constants.statusBarHeight,
    },
  }),
  headerMode: 'float',
});
