import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { StackActions, NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';
import styles from './style';
import ListItem from './Components/ListItem';
import { devList } from './devList';
import AppHeader from '../../components/AppHeader';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
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

    renderItem = ({ item, index }) => {
      const { navigation } = this.props;
      return (<View >
        <ListItem navigation={navigation} key={index} dataItem={item} isGrid={this.state.isSwitchOn} />
      </View>);
    };

    render() {
      return (
        <View style={styles.container}>
          <AppHeader title="Devs" rtTitle="Add" />
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={devList}
            numColumns={1}
            style={styles.styleList}
            renderItem={this.renderItem}
          />
        </View>
      );
    }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
