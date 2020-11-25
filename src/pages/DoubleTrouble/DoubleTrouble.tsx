import React from 'react';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';


//import styles
import classes from './DoubleTrouble.module.css';

//import components
import IntroductionPage from '../../components/Common/Introduction/Introduction';
import GameArena from '../../components/DoubleTrouble/GameArena/GameArena';
import GameResult from '../../components/Common/GameResult/GameResult';



type PropsFromParents = {

}

type AllProps =  PropsFromParents & RouteComponentProps;

type State = {

}

class DoubleTrouble extends React.Component<AllProps, State> {
    
    state: State = {
    
    }

    render() {
        return (
            <div className={classes["Container"]}>
                <Route path = {`${this.props.match.path}/intro`} component = {IntroductionPage} />
                <Route path = {`${this.props.match.path}/play`} component = {GameArena} />
                <Route path = {`${this.props.match.path}/result`} component = {GameResult} />
            </div>
        )
    }
    
}


export default DoubleTrouble;