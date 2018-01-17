// @flow

import React from 'react';
import { View, Text, Button } from 'react-native'

export default class BrowseScreen extends React.Component {
  static navigationOptions = {
    title: 'تصفح',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>BrowseScreen Screen</Text>
        <Button onPress={() => navigate('Artist', { id: 444 })} title="Artist" />
        <Button onPress={() => navigate('Hashtag')} title="#hashtag" />
      </View>
    );
  }
}
