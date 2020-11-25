import axiosInstance from '../../../axios/axios';
import * as actions from '../actionCreators';
import {
    TIMER_START,
    TIMER_TICK,
    TIMER_RESET,
    GET_USER_START,
    GET_USER_SUCCESS
} from '../types';
import configureMockStore from "redux-mock-store";
import Thunk from 'redux-thunk';


//Mock our axios instance for mocking api calls
jest.mock('../../../axios/axios');

describe("globalState redux Actions", () => {

    it("should pass", () => {
        expect(1).toBe(1);
    })

})

