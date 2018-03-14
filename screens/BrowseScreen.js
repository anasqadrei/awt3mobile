import React from 'react';
import { View, Text, Button } from 'react-native'

export default class BrowseScreen extends React.Component {
  static navigationOptions = {
    title: 'تصفح',
  };

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <Text>BrowseScreen Screen</Text>
        <Button onPress={() => navigate('Artist', { id: 1 })} title="وديع" />
        <Button onPress={() => navigate('Artist', { id: 4 })} title="Artist doesn't exist" />
        <Button onPress={() => navigate('Artist', { id: 185 })} title="فيروز" />
        <Button onPress={() => navigate('Artist', { id: 5 })} title="اليسا" />
        <Button onPress={() => navigate('Artist', { id: '1n8' })} title="Error Artist" />
        <Button onPress={() => navigate('Hashtag')} title="#hashtag" />
      </View>
    );
  }
}
