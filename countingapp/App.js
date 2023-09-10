import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import React, { useState } from 'react';
import { Component } from 'react';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const CountComponent = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>Let's count!</Text>
      <Text>{props.count}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  setCount = () => this.setState({ count: this.state.count + 2 })
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.ltext}>Let's play with props {'\n'}</Text>
        <CountComponent count={this.state.count} />
        <Text>{'\n'}</Text>
        <Button
          title="Press me"
          onPress={() => this.setCount(this.state.count + 1)}
        />
        <Text>{'\n'}</Text>
        <Button
          title="Reset"
          //        onPress={()=>this.setCount(this.state.count=0)}
          onPress={() => this.setState({ count: this.state.count = 0 })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ltext: {
    marginTop: 300,
  }
});
