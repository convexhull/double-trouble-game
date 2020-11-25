

test.only("",() => {})
// //testing globalState reducer
// import reducer from "../reducer";

// describe("Redux: gameState reducers", () => {
//     describe("related to TIMER actions", () => {
//         it("should return initial state", () => {
//             const initState = {
//                 timer: {
//                     timeRemaining: 0,
//                     running: false,
//                     baseTime: 0,
//                 },
//                 current_user: {
//                     id: "",
//                     name: "",
//                     email: "",
//                 },
//             };
//             expect(reducer(undefined, {})).toEqual(initState);
//         });

//         it("should handle 'TIMER_TICK'", () => {
//             const initState = {
//                 timer: {
//                     timeRemaining: 10,
//                     running: true,
//                     baseTime: 10,
//                 },
//                 current_user: {
//                     id: "",
//                     name: "",
//                     email: "",
//                 },
//             };
//             const action = {
//                 type: "TIMER_TICK",
//             };
//             const expectedState = {
//                 timer: {
//                     timeRemaining: 9,
//                     running: true,
//                     baseTime: 10,
//                 },
//                 current_user: {
//                     id: "",
//                     name: "",
//                     email: "",
//                 },
//             };
//             expect(reducer(initState, action)).toEqual(expectedState);
//         });

//         it("should handle 'TIMER_START'", () => {
//             const initState = {
//                 timer: {
//                     timeRemaining: 0,
//                     running: false,
//                     baseTime: 0,
//                 },
//                 current_user: {
//                     id: "",
//                     name: "",
//                     email: "",
//                 },
//             };
//             const action = {
//                 type: "TIMER_START",
//                 payload: {
//                     baseTime: 10,
//                 },
//             };
//             const expectedState = {
//                 timer: {
//                     timeRemaining: 10,
//                     running: true,
//                     baseTime: 10,
//                 },
//                 current_user: {
//                     id: "",
//                     name: "",
//                     email: "",
//                 },
//             };

//             expect(reducer(initState, action)).toEqual(expectedState);
//         });

//         it("should handle 'TIMER_RESET'", () => {
//             const initState = {
//                 timer: {
//                     timeRemaining: 10,
//                     running: true,
//                     baseTime: 10,
//                 },
//                 current_user: {
//                     id: "",
//                     name: "",
//                     email: "",
//                 },
//             };
//             const action = {
//                 type: "TIMER_RESET",
//             };
//             const expectedState = {
//                 timer: {
//                     timeRemaining: 0,
//                     running: false,
//                     baseTime: 10,
//                 },
//                 current_user: {
//                     id: "",
//                     name: "",
//                     email: "",
//                 },
//             };
//             expect(reducer(initState, action)).toEqual(expectedState);
//         });
//     });

//     describe("Redux: GlobalState USER related", () => {
//         it("should handle 'GET_USER_SUCCESS'", () => {
//             const initState = {
//                 timer: {
//                     timeRemaining: 0,
//                     running: false,
//                     baseTime: 0,
//                 },
//                 current_user: {
//                     id: "",
//                     name: "",
//                     email: "",
//                 },
//             };
//             const action = {
//                 type: "GET_USER_SUCCESS",
//                 payload: {
//                     name: "test-user",
//                     id: "testuser-123",
//                     email: "testuser@email.com",
//                 },
//             };
//             const expectedState = {
//                 timer: {
//                     timeRemaining: 0,
//                     running: false,
//                     baseTime: 0,
//                 },
//                 current_user: {
//                     id: "testuser-123",
//                     name: "test-user",
//                     email: "testuser@email.com",
//                 },
//             };
//             expect(reducer(initState, action)).toEqual(expectedState);
//         });
//     });
// });
