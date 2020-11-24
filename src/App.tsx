import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Home/Home';
import DoubleTroubleGame from './pages/DoubleTrouble/DoubleTrouble';


//import actions
import * as globalActions from './store/global/actionCreators';
import * as gameActions from './store/game/actionCreators';
import { RootState } from './store/store';



type State = {

}

type PropsFromParent = {

}


const mapDispatchToProps = {
  onFetchUserInfo: () => globalActions.asyncGetUserStart()
}

const connector = connect(null, mapDispatchToProps);


type PropsFromRedux = ConnectedProps<typeof connector>; 


type AllProps = PropsFromParent & PropsFromRedux;

class App extends React.Component<AllProps, State> {

  componentDidMount() {
    this.props.onFetchUserInfo();
  }

  render(){

    return (
      <div className="App">
        <Switch>
            <Route exact path = "/" component = {HomePage} />
            <Route  path = "/double-trouble" component = {DoubleTroubleGame} />
        </Switch>
      </div>
    );
  }
}

export default connector(App);
