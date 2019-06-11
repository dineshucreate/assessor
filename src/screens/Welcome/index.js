import React from 'react';
import firebase from 'react-native-firebase';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';
import { updateUserData } from './action';
import { styles } from './styles';

class Welcome extends React.Component {
  componentDidMount() {
    const { fetchUserData, navigation: { navigate } } = this.props;
    firebase.auth().onAuthStateChanged((user) => {
      fetchUserData(user);
      navigate(user ? 'Home' : 'Login');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

Welcome.propTypes = {
  fetchUserData: PropTypes.func,
  navigation: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  fetchUserData: (userData) => dispatch(updateUserData(userData)),
});

export default connect(null, mapDispatchToProps)(Welcome);
