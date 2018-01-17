import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import TabNavigator from './navigators/TabNavigator'

// Initialize the Apollo Client
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    // uri: 'http://localhost:4000/graphql',
    uri: 'http://192.168.10.4:4000/graphql',
  }),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Expo.Constants.statusBarHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <TabNavigator />
        </View>
      </ApolloProvider>
    );
  }
}
