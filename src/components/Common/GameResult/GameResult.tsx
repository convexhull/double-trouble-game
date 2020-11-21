import React from 'react';

type Props = {
    name: string,
    age: number
}

type State = {

}

class GameResult extends React.Component<Props, State> {
    
    state: State = {
        
    }

    render() {
        return (
            <div>
                RESULT TIME!!!
            </div>
        )
    }
}


export default GameResult;