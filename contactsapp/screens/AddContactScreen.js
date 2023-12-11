import * as React from "react";
import AddContactForm from '../contactform'


function AddContactScreen({ navigation, screenProps, formState }) {
  navigationOptions = {
    headerTitle: 'New Contact',
  }


  handleSubmit = formState => {
    this.props.screenProps.addContact(formState)
    this.props.navigation.navigate('ContactList')
  }

  
    return <AddContactForm onSubmit={this.handleSubmit} />
  
}

export default AddContactScreen;