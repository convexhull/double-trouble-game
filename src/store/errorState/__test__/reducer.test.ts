import reducer from '../reducer';


describe("Redux: errorState reducer", () => {

    it("should return initial state", () => {
        const initState = {
            UPDATE_GAME_SCORE: "",
            FETCH_ALL_GAMES: "",
            FETCH_GAME_INFO: "",
            GET_USER: "",
        };
        expect(reducer(undefined, {})).toEqual(initState);
    })


    it("should assign error message to corresponding request for *_FAILURE type actions", () => {
        const initState = {
            UPDATE_GAME_SCORE: "",
            FETCH_ALL_GAMES: "",
            FETCH_GAME_INFO: "",
            GET_USER: ""
        };
        const action = {
            type: "FETCH_ALL_GAMES_FAILURE",
            payload: {
                message: "Some error occurred"
            }
        }
        const expectedState = {
            UPDATE_GAME_SCORE: "",
            FETCH_ALL_GAMES: "Some error occurred",
            FETCH_GAME_INFO: "",
            GET_USER: ""
        }

        expect(reducer(initState, action)).toEqual(expectedState);
    })

    it("should clear error message of corresponding request for *_START type actions", () => {
        const initState = {
            UPDATE_GAME_SCORE: "Some error occurred",
            FETCH_ALL_GAMES: "",
            FETCH_GAME_INFO: "",
            GET_USER: "Some error occurred"
        };
        const action = {
            type: "UPDATE_GAME_SCORE_START"
        }
        const expectedState = {
            UPDATE_GAME_SCORE: "",
            FETCH_ALL_GAMES: "",
            FETCH_GAME_INFO: "",
            GET_USER: "Some error occurred"
        }
        expect(reducer(initState, action)).toEqual(expectedState);
    })
    it("should not change state value for any other type of actions", () => {
        const initState = {
            UPDATE_GAME_SCORE: "Some error occurred",
            FETCH_ALL_GAMES: "",
            FETCH_GAME_INFO: "",
            GET_USER: "Some error occurred"
        };
        const action = {
            type: "GET_USER_SUCCESS"
        }
        const expectedState = {
            UPDATE_GAME_SCORE: "Some error occurred",
            FETCH_ALL_GAMES: "",
            FETCH_GAME_INFO: "",
            GET_USER: "Some error occurred"
        }
        expect(reducer(initState, action)).toEqual(expectedState);
    })
})