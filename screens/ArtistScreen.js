import React from 'react'
import {View, Text, Button, Image} from 'react-native'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

const artistQuery = gql `
  query artist ($id: Int!){
    artist(id: $id) {
      id
      name
      songsCount
      defaultImage
    }
  }
`

class ArtistScreen extends React.Component {
  static navigationOptions = {
    title: 'المطرب'
  };

  render() {
    const {navigate} = this.props.navigation;

    if (this.props.data.loading) {
      return <Text>Loading</Text>
    } else if (this.props.data.error) {
      console.log(this.props.data.error);
      return <Text>Error</Text>
    } else if (!this.props.data.artist) {
      return <Text>No artist</Text>
    } else if (this.props.data.artist) {
      return (<View>
        <Text>ArtistScreen X</Text>
        <Button onPress={() => navigate('Song')} title="Song"/>
        <Text>{this.props.data.artist.id}</Text>
        <Text>{this.props.data.artist.name}</Text>
        <Text>{this.props.data.artist.songsCount}</Text>
        <Image style={{
            width: 100,
            height: 100
          }} source={{
            uri: this.props.data.artist.defaultImage
          }}/>
      </View>)
    }
  }
}

export default graphql(artistQuery, {
  options: (ownProps) => {
    return {
      variables: {
        id: ownProps.navigation.state.params.id
      }
    }
  }
})(ArtistScreen)
