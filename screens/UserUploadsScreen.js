// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';

export default class UserUploadsScreen extends React.Component {
  static navigationOptions = {
    title: 'المساهمات',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>UserUploadsScreen</Text>
        <Button onPress={() => navigate('Song')} title="Song" />
        <Button onPress={() => navigate('Song')} title="Photos" />
        <Button onPress={() => navigate('Song')} title="Lyrics" />
      </View>
    );
  }
}
