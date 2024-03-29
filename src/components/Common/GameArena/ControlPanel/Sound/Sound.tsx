import React from 'react';

/**
 * This component displays volume on/off button and is imported into <ControlPanel />. 
 */

//import styles
import classes from './Sound.module.css';


//import images
import SoundOnSvg from '../../../../../assets/images/sound/sound-on.svg';
import SoundOffSvg from '../../../../../assets/images/sound/sound-off.svg';



type State = {
    soundOn: boolean
}

type PropsFromParent = {

}



type AllProps = PropsFromParent;


export class Sound extends React.Component<AllProps, State> {

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
                    {this.state.soundOn ? <img src={SoundOnSvg} alt="sound-on button" onClick={this.toggleSound} /> : <img src={SoundOffSvg} alt="sound-off button" onClick={this.toggleSound} />}
                </div>
            </div>
        )
    }
}


export default Sound;