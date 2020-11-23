import React from 'react';
import { connect, ConnectedProps } from 'react-redux';


//import styles
import classes from './Volume.module.css';


//import images
import SoundOnSvg from '../../../../../assets/images/sound/sound-on.svg';
import SoundOffSvg from '../../../../../assets/images/sound/sound-off.svg';


//import types
import { RootState } from '../../../../../store/store';


type State = {
    soundOn: boolean
}

type PropsFromParent = {

}

const mapStateToProps = (state: RootState) => {
    return {
        currentScore: state.gameState.current_score
    }
}


const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


type AllProps = PropsFromParent & PropsFromRedux;


class Sound extends React.Component<AllProps, State> {

    state = {
        soundOn: true
    }


    toggleSound = (): void => {
        this.setState((state) => {
            return {
                soundOn: !state.soundOn
            }
        })
    }

    render() {
        return (
            <div className={classes["Container"]}>
                <div className={classes["sound-btn"]}>
                    {this.state.soundOn ? <img src={SoundOnSvg} alt="sound-on button" onClick={this.toggleSound} /> : <img src={SoundOffSvg} alt="sound-on button" onClick={this.toggleSound} />}
                </div>
            </div>
        )
    }
}


export default connector(Sound);