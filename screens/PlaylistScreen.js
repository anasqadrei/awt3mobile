// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';

export default class PlaylistScreen extends React.Component {
  static navigationOptions = {
    title: 'القائمة',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>PlaylistScreen</Text>
        <Button onPress={() => navigate('Song')} title="Song" />
      </View>
    );
  }
}
