import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddContactScreen from "../screens/AddContactScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ContactListScreen from "../screens/ContactListScreen";
import ContactDetailsScreen from "../screens/ContactDetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import contacts from "../contacts";
import ContactStack from "./ContactStack";



const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="ContactList" component={ContactStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}

export default MainTabs;