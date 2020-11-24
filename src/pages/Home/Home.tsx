import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';

//import types
import { RootState } from '../../store/store';

/**
 * This is the Home Page that the user sees when he navigates to '/' 
 * 
 * # In this page, we display all the available games
 * # We fetch a list of available games from the backend
 * 
 */


//import styles
import classes from './Home.module.css';


//import action creators
import * as gameActions from '../../store/game/actionCreators';


type State = {

}

const mapStateToProps = (state: RootState) => {
    return {
        availableGames: state.gameState.availableGames,
        loading: state.loadingState.FETCH_ALL_GAMES
    }
}

const mapDispatchToProps = {
    onLoadAllGames: () => gameActions.asyncFetchAllGamesStart()
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromParents = {

}

type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & PropsFromRedux;

class Home extends React.Component<AllProps, State> {

    componentDidMount() {
        this.props.onLoadAllGames();
    }

    render() {
        let availableGames = this.props.availableGames.map((el) => {
            switch (el.name) {
                case "Double Trouble":
                    return (
                        <li>
                            <Link to={`/double-trouble/intro`}>{el.name}</Link>
                        </li>
                    )
                default:
                    return (
                        <li></li>
                    )
            }
        })
        let jsxToRender = null;
        if (!this.props.loading) {
            jsxToRender = (
                <React.Fragment>
                    <h1 className={classes["welcome"]}>WELCOME</h1>
                    <p className={classes["available-games"]}>Available game(s):</p>
                    <ul>
                        {availableGames}
                    </ul>
                </React.Fragment>
            )
        }
        return (
            <div className={classes["Container"]}>
                {jsxToRender}
            </div>
        );
    }
}


export default connector(Home);