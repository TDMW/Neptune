import React, { Component } from 'react';
import { View, Image } from 'react-native';

class picModal extends Component {
  render() {
    console.log(this.props.fullPic);
    return (
      <View>
      <Image
        source={{ uri: `${this.props.fullPic}` }}
        style={{ width: 400, height: 400 }}
      />
      </View>
    );
  }
}

export default picModal;
