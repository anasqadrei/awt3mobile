// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'بحث',
  };

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View>
        <Text>Search Screen</Text>
        <Button onPress={() => navigate('SearchResults')} title="Search Results" />
      </View>
    );
  }
}
