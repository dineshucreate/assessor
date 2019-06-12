import React from 'react';
import { Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import firebase from 'react-native-firebase';
import LoadingView from '../../utilities/loaderView';
import { LOGIN, SIGN_UP } from './constants';
import styles from './style';
import navigationService from '../../utilities/navigationService';

class SignUp extends React.Component {
    state = { email: 'csegurpreet@gmail.com', password: '12345678', errorMessage: null }

    handleSignUp = () => {
      this.loader.showModalView();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          navigationService.navigate('Home');
          this.loader.hideModalView();
        })
        .catch((error) => {
          this.setState({ errorMessage: error.message });
          this.loader.hideModalView();
        });
    };

    navigateToLogin = () => {
      navigationService.navigate('Login');
    };

    renderLoadingView = () => {
      return (
        <LoadingView ref={(loaderRef) => { this.loader = loaderRef; }} message="Signing up..." parentList={this} />
      );
    };

    render() {
      const { errorMessage, email, password } = this.state;
      return (
        <View style={styles.container}>
          {errorMessage &&
            <Text style={{ color: 'red' }}>
              {errorMessage}
            </Text>}
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(text) => this.setState({ email: text })}
            value={email}
            clearButtonMode="always"
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(text) => this.setState({ password: text })}
            value={password}
            clearButtonMode="always"
          />
          <TouchableOpacity style={styles.button} onPress={this.handleSignUp} >
            <Text style={styles.buttonText} >{SIGN_UP}</Text>
          </TouchableOpacity>
          <Button
            title={LOGIN}
            onPress={this.navigateToLogin}
          />
          {
            this.renderLoadingView()
          }
        </View>
      );
    }
}

export default SignUp;
