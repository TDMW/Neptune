import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Search from './components/Search';
import Info from './components/Info';
import Results from './components/Results';

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
        <Scene
          key="results"
          component={Results}
        />
      </Scene>
    </Router>
  );
};

const styles = {
  routerStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
  }
};
export default RouterComponent;
