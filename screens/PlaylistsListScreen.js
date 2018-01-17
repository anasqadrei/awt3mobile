// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';

export default class PlaylistsListScreen extends React.Component {
  static navigationOptions = {
    title: 'القوائم',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>PlaylistsListScreen</Text>
        <Button onPress={() => navigate('Playlist')} title="القائمة" />
      </View>
    );
  }
}
