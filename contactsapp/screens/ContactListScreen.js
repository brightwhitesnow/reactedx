import * as React from "react";
import {Button, View, StyleSheet} from 'react-native'

import SectionListContacts from '../sectionlistcontacts'

// export default class ContactListScreen extends React.Component {
//   static navigationOptions = ({navigation}) => ({
//     headerTitle: 'Contacts',
//     headerRight: (
//       <Button title="Add" onPress={() => navigation.navigate('AddContact')} color="#a41034" />
//     ),
//   })

//   state = {
//     showContacts: true,
//   }

//   toggleContacts = () => {
//     this.setState(prevState => ({showContacts: !prevState.showContacts}))
//   }

//   handleSelectContact = contact => {
//     this.props.navigation.push('ContactDetails', contact)
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Button title="toggle contacts" onPress={this.toggleContacts} />
//         {this.state.showContacts && (
//           <SectionListContacts
//             contacts={this.props.screenProps.contacts}
//             onSelectContact={this.handleSelectContact}
//           />
//         )}
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// })






function ContactListScreen({ navigation }) {
  navigationOptions = ({navigation}) => ({
    headerTitle: 'Contacts',
    headerRight: (
      <Button title="Add" onPress={() => navigation.navigate('AddContact')} color="#a41034" />
    ),
  })

  state = {
    showContacts: true,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  handleSelectContact = contact => {
    this.props.navigation.push('ContactDetails', contact)
  }

  
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        {this.state.showContacts && (
          <SectionListContacts
            contacts={this.props.contacts}
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