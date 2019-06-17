import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modalbox';
import UnCheck from 'react-native-vector-icons/Entypo';
import Check from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import { styles } from './styles';
import CButton from '../CButton';

class CheckBoxModal extends PureComponent {
    static defaultProps = {
      data: [],
      dataKey: 'title',
    };
    constructor(props) {
      super(props);
      this.state = {
        data: props.data || [],
      };
    }

   onPressItem = (item, index) => {
     const { onChangeState } = this.props;
     const { data } = this.state;
     if (data[index].isChecked) {
       data[index].isChecked = false;
       this.setState({ data });
     } else {
       data[index].isChecked = true;
       this.setState({ data });
     }
     onChangeState(item, index);
   };

   renderItems = () => {
     const { dataKey } = this.props;
     return this.state.data.map((item, index) => {
       return (
         <TouchableOpacity
           key={index}
           style={styles.item}
           onPress={() => this.onPressItem(item, index)}
         >
           {item.isChecked ?
             <Check size={25} name="checkcircleo" color="black" />
             :
             <UnCheck size={25} name="circle" color="black" />
           }
           <Text style={styles.itemText}>
             {item[dataKey]}
           </Text>
         </TouchableOpacity>
       );
     });
   }
   render() {
     const { modalRef, headerTitle, onPressConfirm } = this.props;
     return (
       <Modal
         ref={(pickerRef) => { modalRef(pickerRef); }}
         style={styles.modalContainer}
         position={'center'}
         entry="bottom"
         animationDuration={200}
       >
         <View style={styles.modalInnerView}>
           <Text style={styles.headerTitle}>
             {headerTitle}
           </Text>
           <View style={styles.modalSubContainer}>
             <ScrollView
               showsHorizontalScrollIndicator={false}
               showsVerticalScrollIndicator={false}
               contentContainerStyle={styles.scrollContent}
             >
               {this.renderItems()}
             </ScrollView>
             <CButton
               label={'Review'}
               btnStyle={styles.button}
               onPress={onPressConfirm}
             />
           </View>
         </View>
       </Modal>
     );
   }
}

CheckBoxModal.propTypes = {
  data: PropTypes.array,
  dataKey: PropTypes.string,
  modalRef: PropTypes.func,
  headerTitle: PropTypes.string,
  onPressConfirm: PropTypes.func,
  onChangeState: PropTypes.func,
};

export default CheckBoxModal;
