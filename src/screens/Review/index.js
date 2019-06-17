import React, { Component } from 'react';
import { View, Text, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { styles } from './styles';
import AppHeader from '../../components/AppHeader';
import ListItem from './Components/ListItem';
import navigationService from '../../utilities/navigationService';
import { saveNewDevData } from '../AddDev/action';
import { IOS, REACT_NATIVE } from '../../utilities/constant';
import { IOS_DATA, REACT_NATIVE_DATA, ANDROID_DATA, REVIEW_INFO } from './constant';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sections: this.getData(),
    };
  }

  getData = () => {
    const { pickedTechnologies } = this.props.navigation.state.params;
    const dataArray = [];
    pickedTechnologies.forEach((element, index) => {
      switch (element.name) {
        case IOS:
          dataArray.push({ ...IOS_DATA, sectionIndex: index });
          break;
        case REACT_NATIVE:
          dataArray.push({ ...REACT_NATIVE_DATA, sectionIndex: index });
          break;
        default:
          dataArray.push({ ...ANDROID_DATA, sectionIndex: index });
          break;
      }
    });
    return dataArray;
  };

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
    const sectionIndex = section.sectionIndex;
    sections[sectionIndex].data[index].isChecked = isChecked;
    sections[sectionIndex].data[index].rating = isChecked ? value : 0;
    this.setState({ sections });
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
            {REVIEW_INFO}
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
