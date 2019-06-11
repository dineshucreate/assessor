import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modalbox';
import { BallIndicator } from 'react-native-indicators';
import { Colors } from './Colors';

export default class LoadingView extends Component {
    static defaultProps = {
      message: 'Loading...',
    };

    showModalView() {
      this.loader.open();
    }
    hideModalView() {
      this.loader.close();
    }

    render() {
      const { message } = this.props;

      return (
        <Modal
          style={styles.loadingModal}
          position={'center'}
          entry="bottom"
          swipeToClose={false}
          backButtonClose={false}
          backdropPressToClose={false}
          animationDuration={200}
          ref={(loaderRef) => { this.loader = loaderRef; }}
        >
          <View style={{ flex: 1 }}>
            <BallIndicator
              color={Colors.baseColor}
              size={24}
            />
            <Text style={styles.loadingText}>{message}</Text>
          </View>
        </Modal>
      );
    }
}

LoadingView.propTypes = {
  message: PropTypes.string,
};

const styles = StyleSheet.create({
  loadingModal: { height: 80, width: 100, padding: 5, borderRadius: 10 },
  loadingText: { color: Colors.baseColor, alignSelf: 'center' },
});
