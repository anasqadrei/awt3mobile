import { StackNavigator } from 'react-navigation';

import SearchScreen from '../screens/SearchScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import ArtistScreen from '../screens/ArtistScreen';
import SongScreen from '../screens/SongScreen';

export default StackNavigator({
  Search: {
    screen: SearchScreen,
  },
  SearchResults: {
    screen: SearchResultsScreen,
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
