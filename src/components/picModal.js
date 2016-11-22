import React, { Component } from 'react';
import { View, Image } from 'react-native';

class picModal extends Component {
  state = { loading: true }

  componentWillMount() {

  }

  render() {
    return (
      <View style={styles.imageContainer}>
          <Image
            source={{ uri: `${this.props.fullPic}` }}
            style={styles.imageStyle}
          />
      </View>
    );
  }
}

const styles = {
  imageContainer: {
    backgroundColor: '#191C21',
    flex: 1,
    alignItems: 'stretch'
  },
  imageStyle: {
    flex: 1
  }
};

export default picModal;
