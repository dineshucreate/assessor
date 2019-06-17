import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import Arrow from 'react-native-vector-icons/Ionicons';
import AddRemove from 'react-native-vector-icons/AntDesign';
import styles from './style';
import { Colors } from '../../../../utilities/Colors';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exp: 0.5,
      isChecked: false,
      isAdd: true,
    };
  }

  checkClicked = () => {
    const { exp } = this.state;
    const { add, dataItem: { isChecked } } = this.props;
    add(exp, isChecked);
  };

   incrementExp = () => {
     const { exp } = this.state;
     const { updateExperience, dataItem: { isChecked } } = this.props;
     this.setState({ exp: exp + 0.5 },
       () => {
         const { exp: experience } = this.state;
         updateExperience(experience, isChecked);
       });
   };

   decrementExp = () => {
     const { exp } = this.state;
     const { updateExperience, dataItem: { isChecked } } = this.props;
     if (exp > 0) {
       this.setState({ exp: exp - 0.5 },
         () => {
           const { exp: experience } = this.state;
           updateExperience(experience, isChecked);
         });
     }
   };

   render() {
     const { dataItem: { name, isChecked } } = this.props;
     const { exp } = this.state;
     return (<View style={styles.styleMainContainer} >
       <View style={styles.styleInfoContainer}>
         <TouchableOpacity
           style={styles.styleCheckbox}
           hitSlop={styles.btnHitSlop}
           onPress={this.checkClicked}
         >
           {!isChecked ?
             <AddRemove size={25} name="pluscircle" color={Colors.PrimaryAppColor} />
             :
             <AddRemove size={25} name="minuscircleo" color={Colors.PrimaryAppColor} />
           }
         </TouchableOpacity>
         { isChecked &&
         <Text style={styles.styleTitle}>{name}</Text>
         }
         { isChecked &&
         <View style={styles.styleExperience}>
           <TouchableOpacity hitSlop={styles.btnHitSlop} onPress={this.decrementExp} >
             <Arrow size={25} name="md-arrow-dropdown-circle" color={Colors.PrimaryAppColor} />
           </TouchableOpacity>
           <Text style={styles.styleExpText}>{exp}</Text>
           <TouchableOpacity hitSlop={styles.btnHitSlop} onPress={this.incrementExp} >
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
  updateExperience: PropTypes.func,
};

