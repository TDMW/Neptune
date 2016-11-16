import React, { Component } from 'react';
import { View, Image, TouchableHighlight, TextInput } from 'react-native';

class Search extends Component {
  render() {
    return (
    <Image
      source={require('../img/BACKGROUND.png')}
      style={styles.containerStyle}
    >
        <View style={styles.contentStyle}>
          <View style={styles.imageCont}>
            <Image
              source={require('../img/BIGLOGO.png')}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.searchArea}>
            <View style={styles.searchBar}>
              <TextInput
                style={styles.inputStyle}
                placeholder='Search...'
                placeholderTextColor='#474C54'
              />
            </View>
              <TouchableHighlight style={null}>
                <Image
                  source={require('../img/SEARCH_ICON.png')}
                  style={styles.searchImageStyle}
                />
              </TouchableHighlight>
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
   searchText: {
    fontWeight: 'bold',
    color: '#474C54',
    textAlign: 'center',
    fontSize: 20,
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
