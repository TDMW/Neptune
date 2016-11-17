import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Unsplash from 'unsplash-js/native';
import Search from 'Search';

class Results extends Component {
  state = { picture: '' }

  componentWillMount() {
    const unsplash = new Unsplash({
        applicationId: '889bfadf6cb9fcda59c9cdfdddb12ffe5e1c349ea46e9161a930d873382c42c2',
        secret: '764e7306c13dbf1d880c2d53d6d56adac9ba141b6859ac1c58bed5117202383b',
        callbackUrl: 'urn:ietf:wg:oauth:2.0:oob',
      });

    unsplash.photos.searchPhotos('cats', [], 1, 15)
      .then(response => response.json())
      .then(jsonData => {
          this.setState({ picture: jsonData[0].urls.full });
      });
  }

  render() {
    return (
      <Image
        source={require('../img/BACKGROUND.png')}
        style={styles.containerStyle}
      >
        <View>
          <Image
            source={{ uri: this.state.picture }}
            style={{ height: 200, width: 200 }}
          />
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

export default Results;
