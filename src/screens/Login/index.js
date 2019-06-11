import React from 'react';
import { Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';
import LoadingView from '../../utilities/loaderView';
import { LOGIN, SIGN_UP } from './constants';
import styles from './style';

class Login extends React.Component {
  state = { email: 'csegurpreet@gmail.com', password: '12345678', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state;
    const { navigation } = this.props;
    this.loader.showModalView();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
        this.loader.hideModalView();
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        this.loader.hideModalView();
      });
  }

  renderLoadingView() {
    return (
      <LoadingView ref={(loaderRef) => { this.loader = loaderRef; }} message="Logging In..." parentList={this} />
    );
  }

  render() {
    const { errorMessage, email, password } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {errorMessage &&
          <Text style={{ color: 'red' }}>
            {errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text })}
          value={email}
          clearButtonMode="always"
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(text) => this.setState({ password: text })}
          value={password}
          clearButtonMode="always"
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin} >
          <Text style={styles.buttonText} >{LOGIN}</Text>
        </TouchableOpacity>
        <Button
          title={SIGN_UP}
          onPress={() => navigation.navigate('SignUp')}
        />
        {
          this.renderLoadingView()
        }
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
