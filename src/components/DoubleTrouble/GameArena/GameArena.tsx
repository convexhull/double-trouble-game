import React from 'react';


//import css styles
import classes from './GameArena.module.css';

//import components
import Timer from '../../Common/GameArena/Timer/Timer';
import GameButton from '../../Common/GameArena/StartButton/StartButton';

type Props = {

}

type State = {

}

class GameArena extends React.Component<Props, State> {

    render() {
        return (
            <div className={classes["Container"]}>
                GAMEE!!!!
                <GameButton />
                <div className={classes["timer"]}>
                    <Timer />
                </div>
            </div>
        )
    }
}




export default GameArena;