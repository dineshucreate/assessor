import React, { Component } from 'react';
import { View, Text, SectionList } from 'react-native';
import { styles } from './styles';
import AppHeader from '../../components/AppHeader';
import ListItem from './Components/ListItem';
import navigationService from '../../utilities/navigationService';

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  save = () => {
  }

  goBack = () => {
    navigationService.goBack();
  };
  renderItem = ({ item, index }) => {
    return (<View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <ListItem key={index} dataItem={item} isGrid={this.state.isSwitchOn} />
    </View>);
  };

  render() {
    // const { } = this.state;
    return (
      <View style={styles.container}>
        <AppHeader showBackButton title="Review" rtTitle="Submit" rbtnOnPress={this.save} lbtnOnPress={this.goBack} />
        <View style={styles.subContainer}>
          <Text style={styles.styleTitle}>Gurpreet Singh</Text>
          <Text style={styles.styleInsturctions}>
                Select topic and specify rating from 0 to 10
          </Text>
          <SectionList
            showsVerticalScrollIndicator={false}
            sections={[
              { title: 'iOS', data: ['Auto Layout', 'Core Data', 'Cocoa pods'] },
              { title: 'Android', data: ['UI', 'MVC', 'Fragments'] },
              { title: 'React Native', data: ['JSX', 'HOC', 'Redux'] },
            ]}
            renderSectionHeader={({ section }) => <Text style={styles.SectionHeader}> {section.title} </Text>}
            renderItem={({ item, index, section }) => this.renderItem({ item, index })}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}
