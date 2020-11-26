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
        const action = {
            type: "FETCH_GAME_INFO_SUCCESS",
        };
        const expectedState = {
            timer: {
                timeRemaining: 9,
                running: true,
                baseTime: 10,
            },
            current_user: {
                id: "",
                name: "",
                email: "",
            },
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });

    it("should handle 'TIMER_START'", () => {
        const initState = {
            timer: {
                timeRemaining: 0,
                running: false,
                baseTime: 0,
            },
            current_user: {
                id: "",
                name: "",
                email: "",
            },
        };
        const action = {
            type: "TIMER_START",
            payload: {
                baseTime: 10,
            },
        };
        const expectedState = {
            timer: {
                timeRemaining: 10,
                running: true,
                baseTime: 10,
            },
            current_user: {
                id: "",
                name: "",
                email: "",
            },
        };

        expect(reducer(initState, action)).toEqual(expectedState);
    });

    it("should handle 'TIMER_RESET'", () => {
        const initState = {
            timer: {
                timeRemaining: 10,
                running: true,
                baseTime: 10,
            },
            current_user: {
                id: "",
                name: "",
                email: "",
            },
        };
        const action = {
            type: "TIMER_RESET",
        };
        const expectedState = {
            timer: {
                timeRemaining: 0,
                running: false,
                baseTime: 10,
            },
            current_user: {
                id: "",
                name: "",
                email: "",
            },
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });

    it("should handle 'GET_USER_SUCCESS'", () => {
        const initState = {
            timer: {
                timeRemaining: 0,
                running: false,
                baseTime: 0,
            },
            current_user: {
                id: "",
                name: "",
                email: "",
            },
        };
        const action = {
            type: "GET_USER_SUCCESS",
            payload: {
                name: "test-user",
                id: "testuser-123",
                email: "testuser@email.com",
            },
        };
        const expectedState = {
            timer: {
                timeRemaining: 0,
                running: false,
                baseTime: 0,
            },
            current_user: {
                id: "testuser-123",
                name: "test-user",
                email: "testuser@email.com",
            },
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });
});
