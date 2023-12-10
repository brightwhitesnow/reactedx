import * as React from "react";
import {Button, Text, View} from 'react-native'



function ContactDetailsScreen({ route }) {
  
  return (
    <View>
      <Text>{route.params.phone}</Text>
    </View>
  )
}

export default ContactDetailsScreen;