import axiosInstance from "../../../axios/axios";
import * as actions from "../actionCreators";
import configureMockStore from "redux-mock-store";
import Thunk from "redux-thunk";

//Mock our axios instance for mocking api calls
jest.mock("../../../axios/axios");

describe("Redux: gameState action creators", () => {
    describe("FETCH_ALL_GAMES actions", () => {
        it("should create FETCH_ALL_GAMES_START action", () => {
            const expectedAction = {
                type: "FETCH_ALL_GAMES_START",
            };
            expect(actions.fetchAllGamesStart()).toEqual(expectedAction);
        });

        it("should create FETCH_ALL_GAMES_SUCCESS action", () => {
            const testPayload = [
                {
                    id: "test-id",
                    name: "test-name",
                    intro_text: "test-intro",
                    farewell_text: "test-farewell",
                    time: 10,
                },
            ];
            const expectedAction = {
                type: "FETCH_ALL_GAMES_SUCCESS",
                payload: testPayload,
            };

            expect(actions.fetchAllGamesSuccess(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should create FETCH_ALL_GAMES_FAILURE action", () => {
            const testPayload = {
                message: "Some error occurred",
            };
            const expectedAction = {
                type: "FETCH_ALL_GAMES_FAILURE",
                payload: testPayload,
            };

            expect(actions.fetchAllGamesFailure(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should start fetching games and create FETCH_ALL_GAMES_SUCCESS action when all games are fetched successfully", async () => {
            const mockResponse = [
                {
                    id: "test-id",
                    name: "test-name",
                    intro_text: "test-intro",
                    farewell_text: "test-farewell",
                    time: 10,
                },
            ];
            const expectedActions = [
                {
                    type: "FETCH_ALL_GAMES_START",
                },
                {
                    type: "FETCH_ALL_GAMES_SUCCESS",
                    payload: mockResponse,
                },
            ];
            axiosInstance.get.mockResolvedValue({ data: mockResponse });
            const middlewares = [Thunk];
            const mockStore = configureMockStore(middlewares);
            const store = mockStore({});
            await store.dispatch(actions.asyncFetchAllGamesStart());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe("FETCH_GAME_INFO actions", () => {
        it("should create FETCH_GAME_INFO_START action", () => {
            const expectedAction = {
                type: "FETCH_GAME_INFO_START",
            };
            expect(actions.fetchGameInfoStart()).toEqual(expectedAction);
        });

        it("should create FETCH_GAME_INFO_SUCCESS action", () => {
            const testPayload = {
                id: "test-id",
                name: "test-name",
                intro_text: "test-intro",
                farewell_text: "test-farewell",
                time: 10,
            };
            const expectedAction = {
                type: "FETCH_GAME_INFO_SUCCESS",
                payload: testPayload,
            };
            expect(actions.fetchGameInfoSuccess(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should create FETCH_GAME_INFO_FAILURE action", () => {
            const testPayload = {
                message: "Some error occurred",
            };
            const expectedAction = {
                type: "FETCH_GAME_INFO_FAILURE",
                payload: testPayload,
            };

            expect(actions.fetchGameInfoFailure(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should start fetching games and create FETCH_GAME_INFO_SUCCESS action when game is fetched successfully", async () => {
            const mockResponse = {
                id: "test-id",
                name: "test-name",
                intro_text: "test-intro",
                farewell_text: "test-farewell",
                time: 10,
            };
            const expectedActions = [
                {
                    type: "FETCH_GAME_INFO_START",
                },
                {
                    type: "FETCH_GAME_INFO_SUCCESS",
                    payload: mockResponse,
                },
            ];
            axiosInstance.get.mockResolvedValue({ data: mockResponse });
            const middlewares = [Thunk];
            const mockStore = configureMockStore(middlewares);
            const store = mockStore({});
            await store.dispatch(actions.asyncFetchGameInfoStart());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe("UPDATE_GAME_SCORE actions", () => {
        it("should create INCREMENT_GAME_SCORE action", () => {
            const expectedAction = {
                type: "INCREMENT_GAME_SCORE",
            };
            expect(actions.incrementGameScore()).toEqual(expectedAction);
        });

        it("should create UPDATE_GAME_SCORE_START action", () => {
            const expectedAction = {
                type: "UPDATE_GAME_SCORE_START",
            };
            expect(actions.updateGameScoreStart()).toEqual(expectedAction);
        });

        it("should create UPDATE_GAME_SCORE_SUCCESS action", () => {
            const testPayload = {
                id: "test-id",
                user_id: "test-user-id",
                score: 10,
                game_id: '"test-game-id',
            };
            const expectedAction = {
                type: "UPDATE_GAME_SCORE_SUCCESS",
                payload: testPayload,
            };
            expect(actions.updateGameScoreSuccess(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should create UPDATE_GAME_SCORE_FAILURE action", () => {
            const testPayload = {
                message: "Some error occurred",
            };
            const expectedAction = {
                type: "UPDATE_GAME_SCORE_FAILURE",
                payload: testPayload,
            };

            expect(actions.updateGameScoreFailure(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should start updatings score and create UPDATE_GAME_SCORE_SUCCESS action after successful updation", async () => {
            const mockResponse = {
                id: "test-id",
                user_id: "test-user-id",
                score: 10,
                game_id: 'test-game-id',
            };
            const expectedActions = [
                {
                    type: "UPDATE_GAME_SCORE_START",
                },
                {
                    type: "UPDATE_GAME_SCORE_SUCCESS",
                    payload: mockResponse,
                },
            ];
            axiosInstance.put.mockResolvedValue({ data: mockResponse });
            const middlewares = [Thunk];
            const mockStore = configureMockStore(middlewares);
            const store = mockStore({
                gameState: {
                    currentGameStats: {
                        current_score: mockResponse.score,
                    },
                    currentGameInfo: {
                        id: mockResponse.game_id
                    }
                },
                globalState: {
                    current_user: {
                        id: mockResponse.user_id
                    }
                }
            });
            await store.dispatch(actions.asyncUpdateGameScoreStart());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
