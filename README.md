# Self Decode Challenge (Double Trouble Game)

## Deployed [Here](https://selfdecode-double-trouble.netlify.app/)

This React-Typescript project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)'s Typescript template.\
\
Because of this open [issue](https://github.com/facebook/create-react-app/issues/10110) with Create-React-App, **you may need to delete tsconfig.json every time the app is started using `yarn start`**. Same is true for `yarn test`. \
I haven't updated the start/test script so as to avoid any future problems in case a fix comes up. 

## Installation and set-up

In the project directory run:

* ### `yarn install`
* ### `rm tsconfig.json && yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `rm tsconfig.json && yarn test`

Launches the test runner in the interactive watch mode.

### `rm tsconfig.json && yarn test --coverage --watchAll`
Check code coverage of the tests using Jest. 


### `yarn run build`

Builds the app for production to the `build` folder.


## Few more things that I would've implemented (or implemented in a better way) if time permitted: 

* Error handling: Currently all the error states because of the API requests throughout the app are stored in the dedicated errorState reducer. We can easily handle them and implement Error Boundaries.
* Animations: Though the app has all the required animations, they can be made more natural and better.
* Responsiveness: The app is totally responsive and working from iPhone8 all the way upto desktop screens. But the look and feel can definitely be improved. 
