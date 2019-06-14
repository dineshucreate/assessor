import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';
import styles from './style';
import ListItem from './Components/ListItem';
import AppHeader from '../../components/AppHeader';
import navigationService from '../../utilities/navigationService';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      data: [],
    };
  }

  async componentDidMount() {
    const { loader } = this.props;
    loader.open();
    const { currentUser } = firebase.auth();
    const data = await this.getData();
    this.setState({ currentUser, data });
    loader.close();
    this.refresh();
  }

   getData = async () => {
     const snapshot = await firebase.firestore().collection('Developers').get();
     return snapshot.docs.map((doc) => doc.data());
   }

   refresh = () => {
     const { navigation } = this.props;
     navigation.addListener(
       'willFocus',
       async () => {
         const data = await this.getData();
         this.setState({ data });
       }
     );
   }

    signOut = () => {
      firebase.auth().signOut();
      navigationService.reset('Login');
    }

    navigateToAddDev = () => {
      navigationService.navigate('AddDev');
    }

    renderItem = ({ item, index }) => {
      return (<ListItem key={index} dataItem={item} isGrid={this.state.isSwitchOn} />);
    };

    render() {
      const { data } = this.state;
      return (
        <View style={styles.container}>
          <AppHeader
            title="Devs"
            rtTitle="Add"
            lbtnOnPress={this.signOut}
            rbtnOnPress={this.navigateToAddDev}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={data}
            numColumns={1}
            renderItem={this.renderItem}
          />
        </View>
      );
    }
}

const mapStateToProps = (state) => ({
  loader: state.welcomeReducer.loader,
});

Home.propTypes = {
  navigation: PropTypes.object,
};

export default connect(mapStateToProps)(Home);
