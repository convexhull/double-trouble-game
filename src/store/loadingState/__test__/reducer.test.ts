import reducer from '../reducer';



describe("Redux: loadingState reducer", () => {

    it("should return initial state", () => {


        const initState = {
            UPDATE_GAME_SCORE: false,
            FETCH_ALL_GAMES: false,
            FETCH_GAME_INFO: false
        };

        expect(reducer(undefined, {})).toEqual(initState);
    })


    it("should set respective request value to true for *_START type actions", () => {


        const initState = {
            UPDATE_GAME_SCORE: false,
            FETCH_ALL_GAMES: false,
            FETCH_GAME_INFO: false
        };
        const action = {
            type: "FETCH_ALL_GAMES_START"
        }
        const expectedState = {
            UPDATE_GAME_SCORE: false,
            FETCH_ALL_GAMES: true,
            FETCH_GAME_INFO: false
        }

        expect(reducer(initState, action)).toEqual(expectedState);
    })

    it("should set respective request value to false for *_SUCCESS type actions", () => {


        const initState = {
            UPDATE_GAME_SCORE: true,
            FETCH_ALL_GAMES: false,
            FETCH_GAME_INFO: false
        };
        const action = {
            type: "UPDATE_GAME_SCORE_SUCCESS"
        }
        const expectedState = {
            UPDATE_GAME_SCORE: false,
            FETCH_ALL_GAMES: false,
            FETCH_GAME_INFO: false
        }

        expect(reducer(initState, action)).toEqual(expectedState);
    })

    it("should set respective request value to false for *_FAILURE type actions", () => {


        const initState = {
            UPDATE_GAME_SCORE: true,
            FETCH_ALL_GAMES: false,
            FETCH_GAME_INFO: true
        };
        const action = {
            type: "FETCH_GAME_INFO_FAILURE"
        }
        const expectedState = {
            UPDATE_GAME_SCORE: true,
            FETCH_ALL_GAMES: false,
            FETCH_GAME_INFO: false
        }

        expect(reducer(initState, action)).toEqual(expectedState);
    })


    it("should not change respective request value if action not of type *_START|FAILURE|SUCCESS", () => {
        const initState = {
            UPDATE_GAME_SCORE: true,
            FETCH_ALL_GAMES: false,
            FETCH_GAME_INFO: true
        };
        const action = {
            type: "SOME_RANDOM_ACTION"
        }
        const expectedState = {
            UPDATE_GAME_SCORE: true,
            FETCH_ALL_GAMES: false,
            FETCH_GAME_INFO: true
        }

        expect(reducer(initState, action)).toEqual(expectedState);
    })
})