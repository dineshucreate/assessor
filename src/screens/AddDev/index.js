import React, { Component } from 'react';
import { View, Image, Text, TextInput, FlatList } from 'react-native';
import { styles } from './styles';
import { devList } from '../Home/devList';
import AppHeader from '../../components/AppHeader';
import ListItem from './Components/ListItem';
import navigationService from '../../utilities/navigationService';

export default class AddDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      technologies: [
        'iOS',
        'React Native',
        'Android',
      ],
    };
  }

  save = () => {
    navigationService.goBack();
  }
  renderItem = ({ item, index }) => {
    return (<View >
      <ListItem key={index} dataItem={item} isGrid={this.state.isSwitchOn} />
    </View>);
  };

  render() {
    const { name, technologies } = this.state;
    return (
      <View style={styles.container}>
        <AppHeader showBackButton title="Add Dev" rtTitle="Save" rbtnOnPress={this.save} />
        <View style={styles.subContainer}>
          <Image
            style={styles.devPic}
            source={{ uri: devList[0].pic }}
            resizeMode="stretch"
          />
          <View style={styles.nameContainer}>
            <Text style={styles.devNameText}>
                Name
            </Text>
            <TextInput
              style={styles.devNameTextInput}
              autoCapitalize="none"
              placeholder="Enter Name"
              onChangeText={(text) => this.setState({ name: text })}
              value={name}
              clearButtonMode="always"
            />
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={technologies}
            numColumns={1}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}
