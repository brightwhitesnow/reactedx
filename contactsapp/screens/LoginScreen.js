import * as React from "react";
import { Button, View, StyleSheet, Text, TextInput } from "react-native";
import { login } from "../api";
import { registerRootComponent } from "expo";
import ContactListScreen from "./ContactListScreen";

export default function LoginScreen({ navigation, Login }) {
  state = {
    username: "",
    password: "",
  };

  _login = async () => {
    try {
      const success = await login(this.state.username, this.state.password);
      navigation.navigate(ContactListScreen);
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
        onPress={() => navigation.navigate(ContactListScreen)}
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

// registerRootComponent(LoginScreen);
