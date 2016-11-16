import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Search from './components/Search';
import Info from './components/Info';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={styles.routerStyle}>
      <Scene key="main">
        <Scene
          onRight={() => Actions.info()}
          rightButtonImage={require('./img/ABOUT_ICON.png')}
          key="search"
          component={Search}
          initial
        />
        <Scene
          key="info"
          component={Info}
        />
      </Scene>
    </Router>
  );
};

const styles = {
  routerStyle: {
    backgroundColor: '#191C21'
  }
};
export default RouterComponent;
