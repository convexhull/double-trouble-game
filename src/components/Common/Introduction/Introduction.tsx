//import npm modules
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link, RouteComponentProps, Route } from 'react-router-dom';


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

//import Components
import DoubleTroubleIllustration from '../../DoubleTrouble/IntroIllustration/IntroIllustration';
import Button from '../UIElements/Button/Button';




type State = {

}



type PropsFromParent = {

}

const mapStateToProps = (state: RootState) => {
    return {
        introText: state.gameState.currentGameInfo.intro_text,
        loading: state.loadingState.FETCH_GAME_INFO
    }
}


const mapDispatchToProps = {
    onLoad: () => (gameActions.asyncFetchGameInfoStart())
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;



type AllProps = PropsFromParent & RouteComponentProps & PropsFromRedux;

export class IntroductionPage extends React.Component<AllProps, State> {

    componentDidMount() {
        this.props.onLoad();
    }

    state: State = {

    }

    render() {
        let introText = this.props.introText;
        //replace periods by newlines for proper formatting.
        let formattedIntroText = introText.replace(/\./g, '.\n');

        let jsxToRender = null;
        if (!this.props.loading) {
            jsxToRender = (
                <React.Fragment>
                    <h1 className={classes["title"]}>Instructions</h1>
                    <p className={classes["intro-text"]}>{formattedIntroText}</p>
                    <div className={classes["illustration"]}>
                        <Route path="/double-trouble/intro" component={DoubleTroubleIllustration} />
                    </div>
                    {/** similarly illustrations of other games can be added using Routes */}
                    <div className={classes["proceed-btn"]}>
                        <Link data-testid="link-to-play" to="./play">
                            <Button type="cta" clicked={() => { }}>I understand</Button>
                        </Link>
                    </div>
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


export default connector(IntroductionPage);