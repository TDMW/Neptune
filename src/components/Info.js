import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Info extends Component {
  render() {
    return (
      <Image
        source={require('../img/BACKGROUND.png')}
        style={styles.containerStyle}
      >
        <View>
          <Text>
            Bart
          </Text>
        </View>
      </Image>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#191C21',
    width: null,
    justifyContent: 'center',
  },
};

export default Info;
