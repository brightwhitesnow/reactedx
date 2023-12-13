import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import ContactStack from "./ContactStack";



const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="ContactStack" component={ContactStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}

export default MainTabs;