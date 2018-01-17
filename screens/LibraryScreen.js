// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';

export default class LibraryScreen extends React.Component {
  static navigationOptions = {
    title: 'المكتبة',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Library</Text>
        <Button onPress={() => navigate('PlaylistsList')} title="My Playlists" />
        <Button onPress={() => navigate('Playlist')} title="Recent" />
        <Button onPress={() => navigate('Playlist')} title="Most Played" />
        <Button onPress={() => navigate('Lists')} title="Saved" />
        <Button onPress={() => navigate('Lists')} title="Liked" />
      </View>
    );
  }
}
