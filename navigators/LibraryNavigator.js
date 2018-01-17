import { StackNavigator } from 'react-navigation';

import LibraryScreen from '../screens/LibraryScreen';
import PlaylistsListScreen from '../screens/PlaylistsListScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import ListsScreen from '../screens/ListsScreen';
import ArtistScreen from '../screens/ArtistScreen';
import SongScreen from '../screens/SongScreen';

export default StackNavigator({
  Library: {
    screen: LibraryScreen,
  },
  PlaylistsList: {
    screen: PlaylistsListScreen,
  },
  Playlist: {
    screen: PlaylistScreen,
  },
  Lists: {
    screen: ListsScreen,
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
  initialRouteName: 'Library',
});
