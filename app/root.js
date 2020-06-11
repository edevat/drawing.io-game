/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable max-len */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Drawing from './components/drawing';
import Home from './components/home';

const { width, height } = Dimensions.get('window');
class Root extends Component {
  render() {
    return (
      <Router>
        <Stack
          key="root"
          navigationBarStyle={{
            width,
            height: height * 0.1,
            backgroundColor: '#44B9BD',
            paddingTop: height * 0.03
          }}
          titleStyle={{ color: 'white' }}
          hideNavBar
          headerLayoutPreset='center'
        >
          <Scene key="home" component={Home} title="Home" initial/>
          <Scene key="drawing" component={Drawing} title="Drawing" />
          
          {/*<Scene
            key="rootTabBar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#ffffff' }}>
            <Scene key="home" component={Home} title="Home" icon={TabIcon} initial />
            <Scene key="search" component={Search} title="Search" icon={TabIcon} />
          </Scene>*/}
        </Stack>
      </Router>
    );
  }
}

export default Root