import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddContactScreen from "../screens/AddContactScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ContactListScreen from "../screens/ContactListScreen";
import ContactDetailsScreen from "../screens/ContactDetailsScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();
const ContactStack = () => {
    return (
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen name="ContactList" component={ContactListScreen} />
        <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} options={({route}) => ({title: route.params.name})} />
      </Stack.Navigator>
    );
  }

export default ContactStack;