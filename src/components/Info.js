import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Info extends Component {
  render() {
    return (
      <Image
        source={require('../img/BACKGROUND.png')}
        style={styles.containerStyle}
      >
        <View style={styles.textContainerStyle}>
          <Text style={styles.textStyle}>
          {`Neptune is a free image search app. The app was created to test my React Native skills and will not be submitted to the app store. All the images come from Unsplash and belong to their respective owners.

If you are reading this text, there will be a blog about my process of creating this app up on my Medium account (@Bart._S). Design files can be found on my Dribbble account (BartS).`}
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
    justifyContent: 'center',
  },
  textStyle: {
    color: '#ffffff',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  textContainerStyle: {
    flex: 1,
    paddingTop: 75,
    padding: 15

  }
};

export default Info;
