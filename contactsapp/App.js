// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, Button } from 'react-native';
import React from 'react';
import {Constants} from 'expo'
import contacts, {compareNames} from './contacts'
import ScrollViewContacts from './scrollviewcontacts'
import FlatListContacts from './flatlistcontacts'
import SectionListContacts from './sectionlistcontacts'
import AddContactForm from './contactform'
import { registerRootComponent } from 'expo';









export default class App extends React.Component {
  state = {
    showContacts: true,
    showForm: false,
    contacts: contacts,
  }
  addContact = newContact => {
    this.setState(prevState => ({showForm: false, contacts: [...prevState.contacts, newContact]}))
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
  render() {
    if (this.state.showForm) return <AddContactForm onSubmit={this.addContact} />
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="add contact" onPress={this.showForm} />
        {this.state.showContacts && <SectionListContacts contacts={this.state.contacts} />}
      </View>
    );
  }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
  },
});


registerRootComponent(App);



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
