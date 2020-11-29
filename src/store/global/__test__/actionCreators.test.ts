import axiosInstance from "../../../axios/axios";
import * as actions from "../actionCreators";
import {
    TIMER_START,
    TIMER_TICK,
    TIMER_RESET,
    GET_USER_START,
    GET_USER_SUCCESS,
} from "../types";
import configureMockStore from "redux-mock-store";
import Thunk from "redux-thunk";

//Mock our axios instance for mocking api calls
jest.mock("../../../axios/axios");

describe("globalState redux Actions", () => {
    it("should create action to start timer", () => {
        const expectedAction = {
            type: TIMER_START,
            payload: {
                baseTime: 10,
            },
        };
        const payload = {
            baseTime: 10,
        };
        expect(actions.timerStart(payload)).toEqual(expectedAction);
    });

    it("should create action for timer tick", () => {
        const expectedAction = {
            type: TIMER_TICK,
        };

        expect(actions.timerTick()).toEqual(expectedAction);
    });

    it("should create action to reset timer", () => {
        const expectedAction = {
            type: TIMER_RESET,
        };
        expect(actions.timerReset()).toEqual(expectedAction);
    });

    it("should create action to start user fetch request", () => {
        const expectedAction = {
            type: GET_USER_START,
        };
        expect(actions.getUserStart()).toEqual(expectedAction);
    });

    it("should create action on user fetch successfull", () => {
        const testPayload = {
            name: "testuser",
            id: "testuser-123",
            email: "testuser@email.com",
        };
        const expectedAction = {
            type: GET_USER_SUCCESS,
            payload: testPayload,
        };
        expect(actions.getUserSuccess(testPayload)).toEqual(expectedAction);
    });

    it("should create GET_USER_SUCCESS action when user is fetched successfully", async () => {
        const testUserDetails = {
            name: "testuser",
            id: "testuser-123",
            email: "testuser@email.com",
        };
        const expectedActions = [
            {
                type: "GET_USER_START",
            },
            {
                type: "GET_USER_SUCCESS",
                payload: testUserDetails,
            },
        ];
        axiosInstance.get.mockResolvedValue({ data: testUserDetails });
        const middlewares = [Thunk];
        const mockStore = configureMockStore(middlewares);
        const store = mockStore({});
        await store.dispatch(actions.asyncGetUserStart());
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should create TIMER_TICK action every second", async () => {
        //essentially, checking if 3 ticks are sent in 3 seconds.

        //for mocking setInterval
        jest.useFakeTimers();
        const middlewares = [Thunk];
        const mockStore = configureMockStore(middlewares);
        const store = mockStore({ globalState: { timer: 10 } });
        let baseTime = 3;

        let expectedActions = [
            { type: "TIMER_START", payload: { baseTime: baseTime } },
            { type: "TIMER_TICK" },
            { type: "TIMER_TICK" },
            { type: "TIMER_TICK" },
        ];

        await store.dispatch(actions.asyncGameTimerStart(baseTime));
        jest.advanceTimersByTime(1000);
        jest.advanceTimersByTime(1000);
        jest.advanceTimersByTime(1000);
        expect(store.getActions()).toEqual(expectedActions);
        jest.clearAllTimers();
    });
});
