import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import Arrow from 'react-native-vector-icons/AntDesign';
import Check from 'react-native-vector-icons/Entypo';
import styles from './style';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exp: 0.5,
      isChecked: false,
    };
  }

  checkClicked = () => {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });
  };

   incrementExp = () => {
     const { exp } = this.state;
     this.setState({ exp: exp + 0.5 });
   };

   decrementExp = () => {
     const { exp } = this.state;
     if (exp > 0) {
       this.setState({ exp: exp - 0.5 });
     }
   };

   render() {
     const { dataItem } = this.props;
     const { exp, isChecked } = this.state;
     return (<View style={styles.styleMainContainer} >
       <View style={styles.styleInfoContainer}>
         <TouchableOpacity style={styles.styleCheckbox} hitSlop={styles.btnHitSlop} onPress={this.checkClicked} >
           {isChecked ?
             <Arrow size={25} name="checkcircleo" color="black" />
             :
             <Check size={25} name="circle" color="black" />
           }
         </TouchableOpacity>
         <Text style={styles.styleTitle}>{dataItem}</Text>
         { isChecked &&
         <View style={styles.styleExperience}>
           <TouchableOpacity style={styles.styleArrowButtons} hitSlop={styles.btnHitSlop} onPress={this.decrementExp} >
             <Arrow size={25} name="down" color="black" />
           </TouchableOpacity>
           <Text style={styles.styleExpText}>{exp}</Text>
           <TouchableOpacity style={styles.styleArrowButtons} hitSlop={styles.btnHitSlop} onPress={this.incrementExp} >
             <Arrow size={25} name="up" color="black" />
           </TouchableOpacity>
         </View>
         }
       </View>
     </View>);
   }
}

ListItem.propTypes = {
  dataItem: PropTypes.object,
};

