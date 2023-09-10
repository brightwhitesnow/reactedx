import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform, FlatList } from 'react-native';
//import { CheckBox } from '@react-native-community/checkbox';
import React, {useState} from 'react';
import { Component } from 'react';
import Checkbox from 'expo-checkbox';


//export default function App() {
//  return (
//    <View style={styles.container}>
//      <Text>Open up App.js to start working on your app!</Text>
//      <StatusBar style="auto" />
//    </View>
//  );
//}




const Todo = (props) => {
    console.log(props);
    const [isSelected, setSelection] = useState(false);

    return (

        <View style={styles.container}>

            <Checkbox
                      value={isSelected}
                      onValueChange={setSelection}
                      style={styles.checkbox}
                    /><Text>{props.name}</Text>


            <StatusBar style="auto" />
        </View>

    )
}



export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
        }
    }
    render () {
        return (
        <View style={styles.container}>
            <Text>Testing, 123!</Text>

             <FlatList
                     data={[
                       {key: 'Devin'},
                       {key: 'Dan'},
                       {key: 'Dominic'},
                       {key: 'Jackson'},
                       {key: 'James'},
                       {key: 'Joel'},
                       {key: 'John'},
                       {key: 'Jillian'},
                       {key: 'Jimmy'},
                       {key: 'Julie'},
                     ]}
                     renderItem={({item}) => <Todo name={item.key}/>}
                   />
             <StatusBar style="auto" />
        </View>
        )
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
});

