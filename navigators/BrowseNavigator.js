import { StackNavigator } from 'react-navigation';

import BrowseScreen from '../screens/BrowseScreen';
import HashtagScreen from '../screens/HashtagScreen';
import ArtistScreen from '../screens/ArtistScreen';
import SongScreen from '../screens/SongScreen';

export default StackNavigator({
  Browse: {
    screen: BrowseScreen,
  },
  Hashtag: {
    screen: HashtagScreen,
  },
  Artist: {
    screen: ArtistScreen,
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
