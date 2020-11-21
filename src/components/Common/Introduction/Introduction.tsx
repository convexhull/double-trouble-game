import React from 'react';

type Props = {
    name: string,
    age: number
}

type State = {

}

class IntroductionPage extends React.Component<Props, State> {
    
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