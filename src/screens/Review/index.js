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
          data: [{ topic: 'Auto Layout', isChecked: false, rating: 0 },
            { topic: 'Core Data', isChecked: false, rating: 0 },
            { topic: 'Cocoa pods', isChecked: false, rating: 0 }] },
        { title: 'Android',
          data: [{ topic: 'UI', isChecked: false, rating: 0 },
            { topic: 'MVC', isChecked: false, rating: 0 },
            { topic: 'Fragments', isChecked: false, rating: 0 }] },
        { title: 'React Native',
          data: [{ topic: 'JSX', isChecked: false, rating: 0 },
            { topic: 'HOC', isChecked: false, rating: 0 },
            { topic: 'Redux', isChecked: false, rating: 0 }] },
      ],
    };
  }

  saveAndGoBack = () => {
    const { navigation, addNewDev, loader } = this.props;
    const { sections } = this.state;
    const { devData } = navigation.state.params;
    loader.open();
    const secs = sections.map((item) => item.data.filter((i) => i.isChecked));
    const flatSection = secs.flatMap((item) => item);
    const rating = flatSection.reduce((acc, val) => acc + val.rating, 0.0);
    const totalTopics = sections.flatMap((item) => item.data).length;
    const averageRating = rating / totalTopics;
    devData.rating = averageRating;
    addNewDev(devData);
  };

  addRating = (index, section, value, isChecked) => {
    const { sections } = this.state;
    const sectionArray = [...sections];
    let sectionIndex = 0;
    if (section.title === 'iOS') {
      sectionIndex = 0;
    } else if (section.title === 'Android') {
      sectionIndex = 1;
    } else {
      sectionIndex = 2;
    }
    sectionArray[sectionIndex].data[index].isChecked = isChecked;
    sectionArray[sectionIndex].data[index].rating = isChecked ? value : 0;
    this.setState({ sections: sectionArray });
  };

  goBack = () => {
    navigationService.goBack();
  };
  renderItem = ({ item, index, section }) => {
    return (<View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <ListItem
        key={index}
        dataItem={item}
        isGrid={this.state.isSwitchOn}
        add={(value, isChecked) => this.addRating(index, section, value, isChecked)}
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
            renderItem={(item, index, section) => this.renderItem(item, index, section)}
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
