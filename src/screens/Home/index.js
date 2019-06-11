import React from 'react';
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { StackActions, NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';
import styles from './style';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

    signOut = () => {
      firebase.auth().signOut();
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Login' })],
      });
      this.props.navigation.dispatch(resetAction);
    }

    render() {
      const { currentUser } = this.state;
      return (
        <View style={styles.container}>
          <Text>
            Hi {currentUser && currentUser.email}!
          </Text>
          <Button
            title="Sign Out"
            onPress={this.signOut}
          />
        </View>
      );
    }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
