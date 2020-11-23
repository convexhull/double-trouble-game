//import npm modules
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';


/**
 * 
 * ## Introduction Page component ## 
 * 
 * # This component displays introductory messages and rules of game. 
 * 
 * # This component will be common to all the games and will be 
 * rendered as nested route component in the respective
 * game's page.
 * 
 */

// import modules
import * as gameActions from '../../../store/game/actionCreators';

//import types
import { RootState } from '../../../store/store';


//import styles
import classes from './Introduction.module.css';






type State = {

}



type PropsFromParent = {
    name: string;
    age: number;
}

const mapStateToProps = (state: RootState) => {
    return {
        name: state.gameState.name,
        introText: state.gameState.intro_text
    }

}


const mapDispatchToProps = {
    onLoad: () => (gameActions.asyncFetchGameInfoStart())
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;



type AllProps = PropsFromParent & RouteComponentProps & PropsFromRedux;

class IntroductionPage extends React.Component<AllProps, State> {

    componentDidMount() {
        this.props.onLoad();
    }

    state: State = {

    }

    render() {
        return (
            <div className={classes["Container"]}>
                <h1 className={classes["title"]}>Instructions</h1>
                <p>{this.props.introText}</p>
                {/*rev*/}
                <Link to={`/double-trouble/play`}>I understand</Link>
            </div>
        )
    }
}


export default connector(IntroductionPage);