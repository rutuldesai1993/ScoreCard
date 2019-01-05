import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ScoreCard from './components/ScoreCard';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
            key="scorecard"
            component={ScoreCard}
            title="Score Card"
            initial
        />
        </Scene>
        </Router>
);
};

export default RouterComponent;
