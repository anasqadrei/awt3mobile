// @flow

import React from 'react'
import { View, Text, Button } from 'react-native'
import { gql, graphql } from 'react-apollo'

const artistQuery = gql`
  query artist ($id: Int!){
    artist(id: $id) {
      id
      name
      songsCount
    }
  }
`

class ArtistScreen extends React.Component {
  static navigationOptions = {
    title: 'المطرب',
  };

  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      artist: React.PropTypes.object,
    }).isRequired,
  }

  render() {
    const { navigate } = this.props.navigation;

    console.log(this.props);
    if (this.props.data.error) {
      console.log(this.props.data.error);
      return <Text>Error</Text>
    }
    if (this.props.data.loading || !this.props.data.artist) {
      return <Text>Loading</Text>
    }

    return (
      <View>
        <Text>ArtistScreen X</Text>
        <Button onPress={() => navigate('Song')} title="Song" />

        {/* <Text>{this.props.navigation.state.params.id}</Text> */}
        <Text>{this.props.data.artist.id}</Text>
        <Text>{this.props.data.artist.name}</Text>
        <Text>{this.props.data.artist.songsCount}</Text>
      </View>
    );
  }
}

export default graphql(artistQuery, { options: (ownProps) => {
  return {
    variables: {
      id: ownProps.navigation.state.params.id
    }
  }
}})(ArtistScreen)
