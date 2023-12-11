import React, { useState} from "react";
import {Button, View, StyleSheet} from 'react-native'
import contacts from "../contacts";
import SectionListContacts from '../sectionlistcontacts'



function ContactListScreen({ navigation}) {
  navigationOptions = ({navigation}) => ({
    headerTitle: 'Contacts',
    headerRight: (
      <Button title="Add" onPress={() => navigation.navigate('AddContact')} color="#a41034" />
    ),
  })

  const [showContacts, toggleShowContacts] = useState(true);

  const toggleContacts = () => toggleShowContacts(!showContacts);
  
  addContact = screenProps => {
    navigation.push('AddContact', screenProps)
  };

  handleSelectContact = contact => {
    navigation.push('ContactDetails', contact)
  };

  return (
    <View style={styles.container}>
      <Button title="Toggle Contacts" onPress={toggleContacts} />
      <Button title="Add Contact" onPress={addContact} color="#a41034" />
      {showContacts && (
        <SectionListContacts
          contacts={contacts}
          onSelectContact={this.handleSelectContact}
        />
      )}
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ContactListScreen;