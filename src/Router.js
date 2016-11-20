import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Search from './components/Search';
import Info from './components/Info';
import Results from './components/Results';

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={styles.routerStyle}
      barButtonIconStyle={styles.barButton}
      titleStyle={styles.navBarTitle}
    >
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
          onRight={() => Actions.info()}
          rightButtonImage={require('./img/ABOUT_ICON.png')}
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
  },
  navBarTitle: {
    color: '#fff'
  },
  barButton: {
    tintColor: 'rgb(255,255,255)',
    }
};

export default RouterComponent;
