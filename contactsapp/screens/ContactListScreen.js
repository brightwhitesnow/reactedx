import React, { useState} from "react";
import {Button, View, StyleSheet} from 'react-native'
import contacts from "../contacts";
import SectionListContacts from '../sectionlistcontacts'



function ContactListScreen({ navigation, route}) {
  const [showContacts, toggleShowContacts] = useState(true);

  const toggleContacts = () => toggleShowContacts(!showContacts);
  
  const addContact = () => {
    navigation.push('AddContact')
  };

  const updateContacts = () => {
    if (route.params && route.params.isFormValid) {
      contacts.push({name: route.params.name, phone: route.params.phone});
    }
    route.params = null;
  }

  const handleSelectContact = contact => {
    navigation.push('ContactDetails', contact)
  };

  updateContacts();

  return (
    <View style={styles.container}>
      <Button title="Toggle Contacts" onPress={toggleContacts} />
      <Button title="Add Contact" onPress={addContact} color="#a41034" />
      {showContacts && (
        <SectionListContacts
          contacts={contacts}
          onSelectContact={handleSelectContact}
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