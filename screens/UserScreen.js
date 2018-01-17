// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';

export default class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'المستخدم',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>User</Text>
        <Button onPress={() => navigate('UserUploads')} title="المساهمات" />
        <Button onPress={() => navigate('About')} title="أوتاريكا" />
      </View>
    );
  }
}
