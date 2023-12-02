import * as React from "react";
import { StatusBar, View } from "react-native";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import Expo from "expo";
import AddContactScreen from "/Volumes/Data/BennyBoop/Coding/contactsapp/screens/AddContactScreen";
import SettingsScreen from "/Volumes/Data/BennyBoop/Coding/contactsapp/screens/SettingsScreen";
import ContactListScreen from "/Volumes/Data/BennyBoop/Coding/contactsapp/screens/ContactListScreen";
import ContactDetailsScreen from "/Volumes/Data/BennyBoop/Coding/contactsapp/screens/ContactDetailsScreen";
import LoginScreen from "/Volumes/Data/BennyBoop/Coding/contactsapp/screens/LoginScreen";
import contacts from "/Volumes/Data/BennyBoop/Coding/contactsapp/contacts";

// const MainStack = createStackNavigator(
//   {
//     ContactList: ContactListScreen,
//     ContactDetails: ContactDetailsScreen,
//     AddContact: AddContactScreen,
//   },
//   {
//     initialRouteName: 'ContactList',
//     navigationOptions: {
//       headerTintColor: '#a41034',
//       headerStyle: {
//         backgroundColor: '#fff',
//       },
//     },
//   },
// );

const Stack = createStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ContactList" component={ContactListScreen} />
        <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
        <Stack.Screen name="AddContact" component={AddContactScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

MainStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-contacts${focused ? "" : "-outline"}`}
      size={25}
      color={tintColor}
    />
  ),
};

// const MainTabs = createBottomTabNavigator(
//   {
//     Contacts: MainStack,
//     Settings: SettingsScreen,
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: '#a41034',
//     },
//   },
// );

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contacts" component={MainStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const AppNavigator = createSwitchNavigator({
//   Login: LoginScreen,
//   Main: MainTabs,
// });

export default function App() {
  state = {
    contacts,
  };

  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  return (
    <NavigationContainer>
      <MainStack />
      <MainTabs />
    </NavigationContainer>
  );
}

// registerRootComponent(App);
