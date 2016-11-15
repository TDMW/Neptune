import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Search from './components/Search';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="neptune">
        <Scene key="searchBar" component={Search} initial />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
