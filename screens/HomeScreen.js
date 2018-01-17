// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'أوتاريكا',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>HomeScreen Screen X</Text>
        <Button onPress={() => navigate('Song')} title="Song" />
      </View>
    );
  }
}
