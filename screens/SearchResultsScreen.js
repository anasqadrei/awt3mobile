// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';

export default class SearchResultsScreen extends React.Component {
  static navigationOptions = {
    title: 'نتائج البحث',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>SearchResults Screen</Text>
        <Button onPress={() => navigate('Song')} title="Song" />
        <Button onPress={() => navigate('Artist')} title="Artist" />
      </View>
    );
  }
}
