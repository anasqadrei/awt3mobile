// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';

export default class ListsScreen extends React.Component {
  static navigationOptions = {
    title: 'قوائم',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Lists Screen</Text>
        <Button onPress={() => navigate('Song')} title="Song" />
        <Button onPress={() => navigate('Artist')} title="Artist" />
      </View>
    );
  }
}
