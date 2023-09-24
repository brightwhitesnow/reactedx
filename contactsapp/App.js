import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, Button } from 'react-native';
import React from 'react';
import {Constants} from 'expo'
import contacts, {compareNames} from './contacts'
import ScrollViewContacts from './scrollviewcontacts'
import FlatListContacts from './flatlistcontacts'
import SectionListContacts from './sectionlistcontacts'
import AddContactForm from './contactform'

  export default class App extends React.Component {
   state = {
    showContacts: true,
    showForm: false,
    contacts: contacts,
   }

   toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  sort = () => {
     this.setState(prevState => ({contacts: prevState.contacts.sort(compareNames)}))
  }

    showForm = () => {
    this.setState({showForm: true})
    }

    hideForm = () => {
        this.setState({showForm: false})
    }

  render() {
    if (this.state.showForm) return <AddContactForm hideForm={this.hideForm}/>

    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} style={styles.button} />
         <Button title="add contact" onPress={this.showForm} />
         {this.state.showContacts && <SectionListContacts contacts={this.state.contacts} style={styles.button} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  button: {
//    width: 100,
      flexDirection: 'row',
      height: 50,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
      elevation: 3,
  }
});





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
