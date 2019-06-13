import React from 'react';
import { View, FlatList } from 'react-native';
import firebase from 'react-native-firebase';
import styles from './style';
import ListItem from './Components/ListItem';
import { devList } from './devList';
import AppHeader from '../../components/AppHeader';
import navigationService from '../../utilities/navigationService';


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
      navigationService.reset('Login');
    }

    navigateToAddDev = () => {
      navigationService.navigate('AddDev');
    }

    renderItem = ({ item, index }) => {
      return (<View >
        <ListItem key={index} dataItem={item} isGrid={this.state.isSwitchOn} />
      </View>);
    };

    render() {
      return (
        <View style={styles.container}>
          <AppHeader
            title="Devs"
            rtTitle="Add"
            lbtnOnPress={this.signOut}
            rbtnOnPress={this.navigateToAddDev}
          />
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

export default Home;
