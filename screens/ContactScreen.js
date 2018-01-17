// @flow

import React from 'react';
import { View, Text } from 'react-native';

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'اتصل بنا',
  };

  render() {
    return (
      <View>
        <Text>Contact Us</Text>
      </View>
    );
  }
}
