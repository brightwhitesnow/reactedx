import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Button, SafeAreaView, Switch } from 'react-native';
import React from 'react';
import { Constants } from 'expo';




const styles = StyleSheet.create({
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
//        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    appContainer: {
//        paddingTop: Constants.statusBarHeight,
          flex: 1,
          justifyContent: 'center',
          padding: 10,
          margin: 12,
    },
    fill: {
        flex: 1,
    }

})

const Todo = props => (
  <View style={styles.todoContainer}>
    <Switch value={props.todo.checked} onValueChange={props.onToggle} />
    <Button onPress={props.onDelete} title="delete" />
    <Text>{props.todo.text}</Text>
  </View>
)

export default class App extends React.Component {



  constructor() {
    super()
    this.state = {
      todos: [],
      id: 0,
    }
  }

  addTodo() {
    let id = this.state.id + 1
    console.log(id)
    const text = `Todo number ${id}`
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id, text: text, checked: false},
      ],
      id: id
    })
  }

  removeTodo(id) {
    console.log(this.state.id)
    let todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: todos,
      id: this.state.id - 1
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render() {
    return (
      <View style={[styles.appContainer, styles.fill]}>
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</Text>
        <Button onPress={() => this.addTodo()} title="Add Todo" />
        <ScrollView style={styles.fill}>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}


//render(<App />, document.getElementById('root'));






















//import React, { Component } from 'react';
//import { Constants } from 'expo';
//import { Card } from 'react-native-elements';
//
//export default class App extends Component {
//    blockJS() {
//        console.log('blocking!')
//        const done = Date.now() = 5000
//        while (Date.now() < done) {
//
//        }
//
//        console.log('unblocked')
//
//    }
//
//    render () {
//        return (
//            <ScrollView style={styles.container}>
//                <Button title="block js" onPress={() => this.blockJS()} style={styles.paragraph} />
//            </ScrollView>
//        );
//    }
//
//}
//



//export default function App() {
//  return (
//    <View style={styles.container}>
//      <Text>Open up App.js to start working on your app!</Text>
//      <StatusBar style="auto" />
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
