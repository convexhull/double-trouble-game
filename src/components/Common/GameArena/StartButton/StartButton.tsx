import { clear } from 'console';
import React from 'react';


//import styles
import classes from './StartButton.module.css';


type Props = {

}

type State = {
    timeRemaining: number
}



class StartButton extends React.Component<Props, State> {
    /**
     * setIntervalReference saves the ref to the setInterval, for cleanup while unmounting.
     */
    setIntervalReference: any;


    constructor(props: Props) {
        super(props);
        this.state = {
            timeRemaining: 3
        }
    }


    clickHandler = () => {
        // When start button is clicked, setInterval will decrease remaining time by 1 every second. 
        this.setIntervalReference = setInterval(() => {
            this.setState((state) => {
                return {
                    timeRemaining: state.timeRemaining - 1
                }
            })
        }, 1000);

    }

    componentWillUnmount() {
        clearInterval(this.setIntervalReference);
    }

    render() {
        if (this.state.timeRemaining <= 0) {
            alert("Game started");
            clearInterval(this.setIntervalReference);
        }
        return (
            <div className={classes["Container"]}>
                <div className={classes["start-btn"]} onClick={this.clickHandler}>
                </div>
            </div>
        )
    }
}


export default StartButton;