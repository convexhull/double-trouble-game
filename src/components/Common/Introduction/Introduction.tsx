//import npm modules
import React from 'react';
import { connect } from 'react-redux';



// import modules
import * as gameActions from '../../../store/game/actionCreators';

//import types
import { RootState } from '../../../store/store';



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


type PropsFromParent = {
    name: string,
    age: number,
}

type PropsFromDispatch = {
    onLoad: () => any
}


type AllProps = PropsFromDispatch & PropsFromParent;

type State = {

}

class IntroductionPage extends React.Component<AllProps, State> {

    componentDidMount() {
        this.props.onLoad();
    }

    state: State = {

    }


    render() {
        return (
            <div>
                Welcome to {this.props.name}
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        name: state.gameState.name
    }

}   


const mapDispatchToProps = {
    onLoad: () => (gameActions.asyncFetchGameInfoStart())
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroductionPage);