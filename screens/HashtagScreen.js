// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';

export default class HashtagScreen extends React.Component {
  static navigationOptions = {
    title: '#',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Hashtag Screen</Text>
        <Button onPress={() => navigate('Song')} title="Song" />
      </View>
    );
  }
}
