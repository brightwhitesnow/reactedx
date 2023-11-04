import React from 'react';
import {StatusBar, View} from 'react-native';
import { registerRootComponent } from 'expo';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from '@react-navigation/native';

import AddContactScreen from '/Volumes/Data/BennyBoop/Coding/contactsapprn/screens/AddContactScreen';
import SettingsScreen from '/Volumes/Data/BennyBoop/Coding/contactsapprn/screens/SettingsScreen';
import ContactListScreen from '/Volumes/Data/BennyBoop/Coding/contactsapprn/screens/ContactListScreen';
import ContactDetailsScreen from '/Volumes/Data/BennyBoop/Coding/contactsapprn/screens/ContactDetailsScreen';
import LoginScreen from '/Volumes/Data/BennyBoop/Coding/contactsapprn/screens/LoginScreen';
import contacts from '/Volumes/Data/BennyBoop/Coding/contactsapprn/contacts';

const MainStack = createStackNavigator(
  {
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
    AddContact: AddContactScreen,
  },
  {
    initialRouteName: 'ContactList',
    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  },
);

MainStack.navigationOptions = {
  tabBarIcon: ({focused, tintColor}) => (
    <Ionicons
      name={`ios-contacts${focused ? '' : '-outline'}`}
      size={25}
      color={tintColor}
    />
  ),
};

const MainTabs = createBottomTabNavigator(
  {
    Contacts: MainStack,
    Settings: SettingsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#a41034',
    },
  },
);

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainTabs,
});

export default class App extends React.Component {
  state = {
    contacts,
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <AppNavigator
        screenProps={{
          contacts: this.state.contacts,
          addContact: this.addContact,
        }}
      />
    );
  }
}
