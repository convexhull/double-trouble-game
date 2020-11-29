import React from 'react';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

/**
 * 
 * This page deals with Double Trouble game. 
 * # This component is rendered when user is on "/double-trouble/*"
 * # In our app, every game has a common intro, game-play and result section. So we re-use these 3 components in each of the game. 
 * # Depending upon whether user is at path /intro, /play or /result, different screens of the games are rendered. This is
 * handled using Nested routes like in this component. 
 * 
 */

//import styles
import classes from './DoubleTrouble.module.css';

//import components
import IntroductionPage from '../../components/Common/Introduction/Introduction';
import GameArena from '../../components/DoubleTrouble/GameArena/GameArena';
import GameResult from '../../components/Common/GameResult/GameResult';



type PropsFromParents = {

}

type AllProps = PropsFromParents & RouteComponentProps;


export class DoubleTrouble extends React.Component<AllProps> {

    render() {
        return (
            <div className={classes["Container"]}>
                {/* Each game has intro, play and result section. So these components are common and handled using nested routes */}
                <Route path={`${this.props.match.path}/intro`} component={IntroductionPage} />
                <Route path={`${this.props.match.path}/play`} component={GameArena} />
                <Route path={`${this.props.match.path}/result`} component={GameResult} />
            </div>
        )
    }

}


export default DoubleTrouble;