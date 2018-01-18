import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloProvider} from 'react-apollo'
import TabNavigator from './navigators/TabNavigator'

// Initialize the Apollo Client
const client = new ApolloClient({
  link: new HttpLink({uri: 'http://192.168.10.4:4000/graphql', credentials: 'same-origin'}),
  cache: new InMemoryCache()
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Expo.Constants.statusBarHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
  }
})

export default class App extends React.Component {
  render() {
    return (<ApolloProvider client={client}>
      <View style={styles.container}>
        <TabNavigator/>
      </View>
    </ApolloProvider>);
  }
}
