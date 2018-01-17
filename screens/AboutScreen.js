// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'أوتاريكا',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>About</Text>
        <Button onPress={() => navigate('Terms')} title="Terms" />
        <Button onPress={() => navigate('Privacy')} title="Privacy" />
        <Button onPress={() => navigate('Copyright')} title="Copyright" />
        <Button onPress={() => navigate('Contact')} title="Contact" />
      </View>
    );
  }
}
