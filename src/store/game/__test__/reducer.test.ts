import reducer from "../reducer";

describe("Redux: gameState reducers", () => {
    it("should return initial state", () => {
        const initState = {
            currentGameInfo: {
                id: "",
                name: "",
                intro_text: "",
                farewell_text: "",
                time: 0,
            },
            currentGameStats: {
                timeRemaining: null,
                current_score: 0,
                updatedScore: 0,
            },
            availableGames: [],
        };
        expect(reducer(undefined, {})).toEqual(initState);
    });

    it("should handle 'FETCH_GAME_INFO_SUCCESS'", () => {
        const initState = {
            currentGameInfo: {
                id: "",
                name: "",
                intro_text: "",
                farewell_text: "",
                time: 0,
            },
            currentGameStats: {
                timeRemaining: null,
                current_score: 0,
                updatedScore: 0,
            },
            availableGames: [],
        };
        const testPayload = {
            id: "test-id",
            name: "test-name",
            intro_text: "test-intro_text",
            farewell_text: "test-farewell_text",
            time:10
        }
        const action = {
            type: "FETCH_GAME_INFO_SUCCESS",
            payload: testPayload
        };
        const expectedState = {
            currentGameInfo: testPayload,
            currentGameStats: {
                timeRemaining: null,
                current_score: 0,
                updatedScore: 0,
            },
            availableGames: [],
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });

    it("should handle 'INCREMENT_GAME_SCORE'", () => {
        const initState = {
            currentGameInfo: {
                id: "",
                name: "",
                intro_text: "",
                farewell_text: "",
                time: 0,
            },
            currentGameStats: {
                timeRemaining: null,
                current_score: 0,
                updatedScore: 0,
            },
            availableGames: [],
        };
        const action = {
            type: "INCREMENT_GAME_SCORE"
        };
        const expectedState = {
            currentGameInfo: {
                id: "",
                name: "",
                intro_text: "",
                farewell_text: "",
                time: 0,
            },
            currentGameStats: {
                timeRemaining: null,
                current_score: 1,
                updatedScore: 0,
            },
            availableGames: [],
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });

    it("should handle 'UPDATE_GAME_SCORE_SUCCESS'", () => {
        const initState = {
            currentGameInfo: {
                id: "",
                name: "",
                intro_text: "",
                farewell_text: "",
                time: 0,
            },
            currentGameStats: {
                timeRemaining: null,
                current_score: 0,
                updatedScore: 0,
            },
            availableGames: []
        };
        const testPayload = {
            id: "test-id",
            user_id: "test-user-id",
            score: 10,
            game_id: '"test-game-id',
        };
        const action = {
            type: "UPDATE_GAME_SCORE_SUCCESS",
            payload: testPayload
        };
        const expectedState = {
            currentGameInfo: {
                id: "",
                name: "",
                intro_text: "",
                farewell_text: "",
                time: 0,
            },
            currentGameStats: {
                timeRemaining: null,
                current_score: 0,
                updatedScore: testPayload.score,
            },
            availableGames: [],
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });

    it("should handle 'FETCH_ALL_GAMES_SUCCESS'", () => {
        const initState = {
            currentGameInfo: {
                id: "",
                name: "",
                intro_text: "",
                farewell_text: "",
                time: 0,
            },
            currentGameStats: {
                timeRemaining: null,
                current_score: 0,
                updatedScore: 0,
            },
            availableGames: []
        };
        const testPayload = [{
            id: "test-id",
            name: "test-name",
            intro_text: "test-intro_text",
            farewell_text: "test-farewell_text",
            time:10
        }]
        const action = {
            type: "FETCH_ALL_GAMES_SUCCESS",
            payload: testPayload
        };
        const expectedState = {
            currentGameInfo: {
                id: "",
                name: "",
                intro_text: "",
                farewell_text: "",
                time: 0,
            },
            currentGameStats: {
                timeRemaining: null,
                current_score: 0,
                updatedScore: 0,
            },
            availableGames: testPayload
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });
});
