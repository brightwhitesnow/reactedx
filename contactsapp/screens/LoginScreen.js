import * as React from "react";
import { Button, View, StyleSheet, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { login } from "../api";
import { registerRootComponent } from "expo";
import { MainStack, MainTabs } from "../App";
import { useNavigation } from "@react-navigation/native";

// export default class LoginScreen extends React.Component {
//   state = {
//     username: '',
//     password: '',
//   }

//   _login = async () => {
//     try {
//       const success = await login(this.state.username, this.state.password)
//       this.props.navigation.navigate('Main')
//     } catch (err) {
//       const errMessage = err.message
//       this.setState({err: errMessage})
//     }
//   }

//   handleUsernameUpdate = username => {
//     this.setState({username})
//   }

//   handlePasswordUpdate = password => {
//     this.setState({password})
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.error}>{this.state.err}</Text>
//         <TextInput
//           placeholder="username"
//           value={this.state.username}
//           onChangeText={this.handleUsernameUpdate}
//           autoCapitalize="none"
//         />
//         <TextInput
//           placeholder="password"
//           value={this.state.password}
//           onChangeText={this.handlePasswordUpdate}
//           secureTextEntry
//         />
//         <Button title="Press to Log In" onPress={this.props.navigation.navigate('Main')} />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     flex: 1,
//     color: 'white',
//   },
//   text: {
//     textAlign: 'center',
//     color: 'white',
//   },
//   error: {
//     textAlign: 'center',
//     color: 'red',
//   },
// })

// registerRootComponent(LoginScreen);

export default function LoginScreen({ navigation, Login }) {
  state = {
    username: "",
    password: "",
  };

  _login = async () => {
    try {
      const success = await login(this.state.username, this.state.password);
      this.props.navigation.navigate("Main");
    } catch (err) {
      const errMessage = err.message;
      this.setState({ err: errMessage });
    }
  };

  handleUsernameUpdate = (username) => {
    this.setState({ username });
  };

  handlePasswordUpdate = (password) => {
    this.setState({ password });
  };

  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.error}>{this.state.err}</Text>
      <TextInput
        placeholder="username"
        value={this.state.username}
        onChangeText={this.handleUsernameUpdate}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="password"
        value={this.state.password}
        onChangeText={this.handlePasswordUpdate}
        // secureTextEntry
      />
      <Button
        title="Press to Log In"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    color: "white",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
});

registerRootComponent(LoginScreen);
