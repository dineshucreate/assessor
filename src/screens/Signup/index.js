/* eslint-disable global-require */
import React from 'react';
import { Text, TextInput, View, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';
import { LOGIN, SIGN_UP } from './constants';
import styles from './style';
import navigationService from '../../utilities/navigationService';
import CButton from '../../components/CButton';

class SignUp extends React.Component {
    state = { email: 'csegurpreet@gmail.com', password: '12345678', errorMessage: null }

    handleSignUp = () => {
      const { loader } = this.props;
      loader.open();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          navigationService.navigate('Home');
          loader.close();
        })
        .catch((error) => {
          this.setState({ errorMessage: error.message });
          loader.close();
        });
    };

    navigateToLogin = () => {
      navigationService.navigate('Login');
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
            <CButton btnStyle={styles.button} label={SIGN_UP} onPress={this.handleSignUp} />
            <Button
              title={LOGIN}
              onPress={this.navigateToLogin}
            />
          </View>
        </View>
      );
    }
}
const mapStateToProps = (state) => ({
  loader: state.welcomeReducer.loader,
});

SignUp.propTypes = {
  loader: PropTypes.object,
};

export default connect(mapStateToProps)(SignUp);
