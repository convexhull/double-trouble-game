import React from 'react';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

import IntroductionPage from '../../components/Common/Introduction/Introduction';
import GameArena from '../../components/DoubleTrouble/GameArena/GameArena';
import GameResult from '../../components/Common/GameResult/GameResult';


interface Props extends RouteComponentProps {
    name: string;
    age: number
}

type State = {

}

class DoubleTrouble extends React.Component<Props, State> {
    
    state: State = {
    
    }

    render() {
        return (
            <div>
                <Route path = {`${this.props.match.path}/intro`} component = {IntroductionPage} />
                <Route path = {`${this.props.match.path}/play`} component = {GameArena} />
                <Route path = {`${this.props.match.path}/result`} component = {GameResult} />
            </div>
        )
    }
}


export default DoubleTrouble;