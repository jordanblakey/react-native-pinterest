import React from 'react'
import { AppRegistry, StyleSheet, Text, View, ScrollView } from 'react-native'

import Pin from './components/Pin'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Pin />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
