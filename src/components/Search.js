import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Input } from './common';

class Search extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Input
          placeholder="Search..."
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#191C21',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff'
  }
};

export default Search;
