/* eslint-disable global-require */
import React from 'react';
import { Text, TextInput, View, Image, Button } from 'react-native';
import firebase from 'react-native-firebase';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOGIN, SIGN_UP } from './constants';
import styles from './style';
import navigationService from '../../utilities/navigationService';
import CButton from '../../components/CButton';

class Login extends React.Component {
  state = { email: 'csegurpreet@gmail.com', password: '12345678', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state;
    const { loader } = this.props;
    loader.open();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigationService.navigate('Home');
        loader.close();
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        loader.close();
      });
  };

  navigateToSignUp = () => {
    navigationService.navigate('SignUp');
  };

  render() {
    const { errorMessage, email, password } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.cardView}>
          <Image
            style={styles.appIconImage}
            source={require('../../assets/app_icon.png')}
          />
          {errorMessage &&
            <Text style={styles.errMsg}>
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
          <CButton
            label={LOGIN}
            btnStyle={styles.button}
            onPress={this.handleLogin}
          />
          <Button
            title={SIGN_UP}
            onPress={this.navigateToSignUp}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  loader: state.welcomeReducer.loader,
});

Login.propTypes = {
  loader: PropTypes.object,
};

export default connect(mapStateToProps)(Login);
