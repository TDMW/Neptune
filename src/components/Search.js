import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

let searchText = '';

class Search extends Component {
  onSearchChange(text) {
    searchText = text;
  }

  onButtonPress() {
    Actions.results({ searchText, title: `${searchText}` });
    searchText = '';
  }

  render() {
    const {
      containerStyle,
      contentStyle,
      imageCont,
      searchArea,
      searchBar,
      imageStyle,
      inputStyle,
      searchImageStyle
    } = styles;

    return (

    <Image
      source={require('../img/BACKGROUND.png')}
      style={containerStyle}
    >
        <View style={contentStyle}>
          <View style={imageCont}>
            <Image
              source={require('../img/BIGLOGO.png')}
              style={imageStyle}
            />
          </View>
          <View style={searchArea}>
            <View style={searchBar}>
              <TextInput
                style={inputStyle}
                placeholder='Search...'
                placeholderTextColor='#474C54'
                onChangeText={this.onSearchChange.bind(this)}
                autoCorrect={false}
              />
            </View>
              <TouchableWithoutFeedback style={null} onPress={this.onButtonPress.bind(this)}>
                <Image
                  source={require('../img/SEARCH_ICON.png')}
                  style={searchImageStyle}
                />
              </TouchableWithoutFeedback>
            </View>
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
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100
  },
  imageCont: {
    paddingBottom: 40
  },
  searchArea: {
    flexDirection: 'row',

  },
  searchBar: {
    backgroundColor: '#282B32',
    width: 250,
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    marginRight: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: {
      height: 20,
      width: 20
    }
   },
   imageStyle: {
     width: 200,
     height: 240,
   },
   inputStyle: {
     height: 50,
     paddingBottom: 17,
     textAlign: 'center',
     color: '#fff'
   },
   searchImageStyle: {
     height: 50,

   }
};

export default Search;
