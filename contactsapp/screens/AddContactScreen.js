import * as React from "react";
import AddContactForm from '../contactform'

// export default class AddContactScreen extends React.Component {
//   static navigationOptions = {
//     headerTitle: 'New Contact',
//   }

//   handleSubmit = formState => {
//     this.props.screenProps.addContact(formState)
//     this.props.navigation.navigate('ContactList')
//   }

//   render() {
//     return <AddContactForm onSubmit={this.handleSubmit} />
//   }
// }


function AddContactScreen({ navigation }) {
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