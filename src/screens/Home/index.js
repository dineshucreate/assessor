import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { StackActions, NavigationActions, SafeAreaView } from 'react-navigation';
import firebase from 'react-native-firebase';
import styles from './style';
import ListItem from './Components/ListItem';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      listData: [{
        name: 'Gurpreet Singh',
        totalExperience: '5 years 6 months',
        technologies: [
          'https://purepng.com/public/uploads/large/21502362885rmhziap3wm5w0jogfdubr1fgyzuycu5rqkam39wjhh7yhmcncxka3vxq3xglitq4iwze8v0gpi1wmolyrtqkts57kit8ibyd2apb.png',
          'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          'https://freeiconshop.com/wp-content/uploads/edd/android-flat.png',
        ],
        pic: 'https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png',
      }],
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

    renderItem = ({ item, index }) => (
      <View >
        <ListItem key={index} dataItem={item} isGrid={this.state.isSwitchOn} />
      </View>
    );

    render() {
      const { listData } = this.state;
      return (
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <View style={styles.topBar}>
              <Text style={styles.titleText}>Devs</Text>
              <TouchableOpacity style={styles.add} onPress={this.handleLogin} >
                <Text style={styles.addText}>Add</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={listData}
              numColumns={1}
              style={styles.styleList}
              renderItem={this.renderItem}
            />
          </View>
        </SafeAreaView>
      );
    }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
