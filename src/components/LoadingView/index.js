import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-native-modalbox';
import { BallIndicator } from 'react-native-indicators';
import { Colors } from '../../utilities/Colors';
import { styles } from './styles';
import { updateLoader } from './action';

class LoadingView extends Component {
    static defaultProps = {
      message: 'Loading...',
    };

    componentDidMount() {
      const { updateLoaderInstance } = this.props;
      updateLoaderInstance(this.loader);
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
              color={Colors.PrimaryAppColor}
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
  updateLoaderInstance: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  updateLoaderInstance: (loaderInstance) => dispatch(updateLoader(loaderInstance)),
});

export default connect(null, mapDispatchToProps)(LoadingView);
