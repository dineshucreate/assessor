import React, { Component } from 'react';
import { View, Text, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { styles } from './styles';
import AppHeader from '../../components/AppHeader';
import ListItem from './Components/ListItem';
import navigationService from '../../utilities/navigationService';
import { saveNewDevData } from '../AddDev/action';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sections: [
        { title: 'iOS',
          data: [{ topic: 'Auto Layout', isCheched: false, rating: 5 },
            { topic: 'Core Data', isCheched: false, rating: 5 },
            { topic: 'Cocoa pods', isCheched: false, rating: 5 }] },
        { title: 'Android',
          data: [{ topic: 'UI', isCheched: false, rating: 5 },
            { topic: 'MVC', isCheched: false, rating: 5 },
            { topic: 'Fragments', isCheched: false, rating: 5 }] },
        { title: 'React Native',
          data: [{ topic: 'JSX', isCheched: false, rating: 5 },
            { topic: 'HOC', isCheched: false, rating: 5 },
            { topic: 'Redux', isCheched: false, rating: 5 }] },
      ],
    };
  }

  saveAndGoBack = () => {
    const { navigation, addNewDev } = this.props;
    const { sections } = this.state;
    const { devData } = navigation.state.params;

    const secs = sections.filter((item) => item.data.isChecked);
    const totalRating = secs.reduce((acc, val) => acc + val.data.rating, 0.0);
    const totalTopics = sections.reduce((acc, val) => acc + val.data.length, 0.0);
    const averageRating = totalRating / totalTopics;
    devData.rating = averageRating;
    addNewDev(devData);
  };

  addRating = (index, value, isChecked) => {
    const { sections } = this.state;
    const sectionArray = [...sections];
    sectionArray[index].data.isChecked = isChecked;
    sectionArray[index].data.rating = isChecked ? value : 0;
    this.setState({ sections: sectionArray });
  };

  goBack = () => {
    navigationService.goBack();
  };
  renderItem = ({ item, index }) => {
    return (<View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <ListItem
        key={index}
        dataItem={item}
        isGrid={this.state.isSwitchOn}
        add={(value, isChecked) => this.addRating(index, value, isChecked)}
      />
    </View>);
  };

  render() {
    const { navigation } = this.props;
    const { sections } = this.state;
    const { devData } = navigation.state.params;
    return (
      <View style={styles.container}>
        <AppHeader showBackButton title="Review" rtTitle="Submit" rbtnOnPress={this.saveAndGoBack} lbtnOnPress={this.goBack} />
        <View style={styles.subContainer}>
          <Text style={styles.styleTitle}>{devData.name}</Text>
          <Text style={styles.styleInsturctions}>
                Select topic and specify rating from 0 to 10
          </Text>
          <SectionList
            showsVerticalScrollIndicator={false}
            sections={sections}
            renderSectionHeader={({ section }) => <Text style={styles.SectionHeader}> {section.title} </Text>}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loader: state.welcomeReducer.loader,
});

const mapDispatchToProps = (dispatch) => ({
  addNewDev: (devData) => dispatch(saveNewDevData(devData)),
});

Review.propTypes = {
  loader: PropTypes.object,
  addNewDev: PropTypes.func,
  navigation: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);
