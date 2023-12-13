import * as React from "react";
import AddContactForm from '../contactform'


function AddContactScreen({navigation}) {
  navigationOptions = {
    headerTitle: 'New Contact',
  }


  handleSubmit = formState => {
    navigation.navigate('ContactList', formState)
  }

  
    return <AddContactForm onSubmit={this.handleSubmit} />
  
}

export default AddContactScreen;