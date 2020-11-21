import React from 'react';




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


type Props = {
    name: string,
    age: number
}

type State = {

}

class IntroductionPage extends React.Component<Props, State> {

    componentDidMount() {

    }

    state: State = {

    }


    render() {
        return (
            <div>
                Welcome to Double Trouble!!!
            </div>
        )
    }
}


export default IntroductionPage;