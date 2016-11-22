import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Search from './components/Search';
import Info from './components/Info';
import Results from './components/Results';
import picModal from './components/picModal';

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
          title='About'
        />
        <Scene
          onRight={() => Actions.info()}
          rightButtonImage={require('./img/ABOUT_ICON.png')}
          key="results"
          component={Results}
        />
        <Scene key="pictureModal" component={picModal} />

      </Scene>
    </Router>
  );
};

const styles = {
  routerStyle: {
    backgroundColor: '#191C21',
    borderBottomColor: 'transparent',
  },
  navBarTitle: {
    color: '#fff',
    fontFamily: 'Roboto-Regular'
  },
  barButton: {
    tintColor: 'rgb(255,255,255)',
    }
};

export default RouterComponent;
