// @flow

import React from 'react';
import { View, Text } from 'react-native';

export default class SongScreen extends React.Component {
  static navigationOptions = {
    title: 'الاغنية - المطرب',
  };

  render() {
    return (
      <Text>Song Screen</Text>
    );
  }
}
