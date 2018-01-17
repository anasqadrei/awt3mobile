import { StackNavigator } from 'react-navigation';

import UserScreen from '../screens/UserScreen';
import UserUploadsScreen from '../screens/UserUploadsScreen';
import SongScreen from '../screens/SongScreen';
import AboutScreen from '../screens/AboutScreen';
import TermsScreen from '../screens/TermsScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import CopyrightScreen from '../screens/CopyrightScreen';
import ContactScreen from '../screens/ContactScreen';

export default StackNavigator({
  User: {
    screen: UserScreen,
    // path: ''
  },
  UserUploads: {
    screen: UserUploadsScreen,
    // path: ''
  },
  Song: {
    screen: SongScreen,
    // path: ''
  },
  About: {
    screen: AboutScreen
  },
  Terms: {
    screen: TermsScreen
  },
  Privacy: {
    screen: PrivacyScreen
  },
  Copyright: {
    screen: CopyrightScreen
  },
  Contact: {
    screen: ContactScreen
  },
}, {
  navigationOptions: ({ navigation }) => ({
    headerTitleStyle: {
      // textAlign: 'center',
    },
    headerStyle: {
      // paddingTop: -Expo.Constants.statusBarHeight,
    },
  }),
  headerMode: 'float',
});
