import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import Arrow from 'react-native-vector-icons/Ionicons';
import UnCheck from 'react-native-vector-icons/Entypo';
import Check from 'react-native-vector-icons/AntDesign';
import styles from './style';
import { Colors } from '../../../../utilities/Colors';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      isChecked: false,
    };
  }

  checkClicked = () => {
    const { isChecked, rating } = this.state;
    const { add } = this.props;
    this.setState({ isChecked: !isChecked },
      () => {
        const { isChecked: checked } = this.state;
        add(rating, checked);
      });
  };

   incrementRating = () => {
     const { rating, isChecked } = this.state;
     const { add } = this.props;
     if (rating < 10) {
       this.setState({ rating: rating + 0.5 },
         () => {
           const { rating: r } = this.state;
           add(r, isChecked);
         });
     }
   };

   decrementRating = () => {
     const { rating, isChecked } = this.state;
     const { add } = this.props;
     if (rating > 0) {
       this.setState({ rating: rating - 0.5 },
         () => {
           const { rating: r } = this.state;
           add(r, isChecked);
         });
     }
   };

   render() {
     const { dataItem: { topic } } = this.props;
     const { rating, isChecked } = this.state;
     return (<View style={styles.styleMainContainer} >
       <View style={styles.styleInfoContainer}>
         <TouchableOpacity style={styles.styleCheckbox} hitSlop={styles.btnHitSlop} onPress={this.checkClicked} >
           {isChecked ?
             <Check size={25} name="checkcircleo" color={Colors.PrimaryAppColor} />
             :
             <UnCheck size={25} name="circle" color={Colors.PrimaryAppColor} />
           }
         </TouchableOpacity>
         <Text style={styles.styleTitle}>{topic}</Text>
         { isChecked &&
         <View style={styles.styleExperience}>
           <TouchableOpacity hitSlop={styles.btnHitSlop} onPress={this.decrementRating} >
             <Arrow size={25} name="md-arrow-dropdown-circle" color={Colors.PrimaryAppColor} />
           </TouchableOpacity>
           <Text style={styles.styleExpText}>{rating}</Text>
           <TouchableOpacity hitSlop={styles.btnHitSlop} onPress={this.incrementRating} >
             <Arrow size={25} name="md-arrow-dropup-circle" color={Colors.PrimaryAppColor} />
           </TouchableOpacity>
         </View>
         }
       </View>
     </View>);
   }
}

ListItem.propTypes = {
  dataItem: PropTypes.object,
  add: PropTypes.func,
};

