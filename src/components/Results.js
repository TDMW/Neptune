import React, { Component } from 'react';
import { View, Image, ListView, TouchableWithoutFeedback } from 'react-native';
import Unsplash from 'unsplash-js/native';
import { Actions } from 'react-native-router-flux';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class Results extends Component {
  state = { picture: `${null}`, loading: true, text: '', dataSource: ds.cloneWithRows([]) }

componentWillMount() {
    const searchText = this.props.searchText;

    const unsplash = new Unsplash({
        applicationId: '889bfadf6cb9fcda59c9cdfdddb12ffe5e1c349ea46e9161a930d873382c42c2',
        secret: '764e7306c13dbf1d880c2d53d6d56adac9ba141b6859ac1c58bed5117202383b',
        callbackUrl: 'urn:ietf:wg:oauth:2.0:oob',
      });

    unsplash.photos.searchPhotos(`${searchText}`, [], 1, 51)
      .then(response => response.json())
      .then(jsonData => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(jsonData),
            loading: false
          });
      });
  }

onImagePress(rowData) {
      const fullImg = rowData.urls.full;
      console.log(fullImg);
    }

showLoader() {
    if (this.state.loading) {
      return (
          <Image
            style={{ width: 200, height: 200, alignSelf: 'center' }}
            source={require('../img/loaderBIG.gif')}
          />
    );
  }
}

renderRow(rowData) {
  const fullPic = rowData.urls.full;

  return (
      <TouchableWithoutFeedback onPress={() => Actions.pictureModal({ fullPic })}>
        <Image
          source={{ uri: `${rowData.urls.thumb}` }}
          style={styles.thumbStyle}
        />
      </TouchableWithoutFeedback>
  );
}

render() {
    return (
      <Image
        source={require('../img/BACKGROUND.png')}
        style={styles.containerStyle}
      >
        <View>
          {this.showLoader()}
          <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            contentContainerStyle={styles.listStyle}
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
  listStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 65,
  },
  rowStyle: {
    flex: 1,
    paddingVertical: 8,
    paddingLeft: 16
  },
  thumbStyle: {
      margin: 3,
      width: 115,
      height: 115
  }
};

export default Results;
