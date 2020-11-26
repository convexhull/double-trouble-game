import React from 'react';
import { GameArena } from "./GameArena";
import { render, waitFor } from "@testing-library/react";

//mock components
jest.mock('../../Common/GameArena/ControlPanel/ControlPanel');
jest.mock('../../Common/GameArena/StartButton/StartButton');
jest.mock('../Gameplay/Gameplay');


describe("Double Trouble: <GameArena />", () => {
    
    it("should render the component", () => {
        const mockFunc = jest.fn();
        const testProps = {
            timeRemaining: 10,
            timerRunning: false,
            onResetTimer: mockFunc
        }
        const { container } = render(<GameArena {...testProps} />);
        expect(container).toBeInTheDocument();
    })


    it("should render <ControlPanel /> component", () => {
        const mockFunc = jest.fn();
        const testProps = {
            timeRemaining: 10,
            timerRunning: false,
            onResetTimer: mockFunc
        }
        const { container, queryByText } = render(<GameArena {...testProps} />);
        expect(queryByText("CONTROL PANEL COMPONENT")).toBeInTheDocument();
    })

    it("should render <StartButton /> if timer is not running", () => {
        const mockFunc = jest.fn();
        const testProps = {
            timeRemaining: 10,
            timerRunning: false,
            onResetTimer: mockFunc
        }
        let { container, queryByText } = render(<GameArena {...testProps} />);
        expect(queryByText("START BUTTON COMPONENT")).toBeInTheDocument();
    })


    it("should render <GamePlay /> if timer is running", () => {
        const mockFunc = jest.fn();
        const testProps = {
            timeRemaining: 10,
            timerRunning: true,
            onResetTimer: mockFunc
        }
        const { container, queryByText } = render(<GameArena {...testProps} />);
        expect(queryByText("GAMEPLAY COMPONENT")).toBeInTheDocument();
    })

    it("should reset redux timer when time is up", async () => {
        const mockFunc = jest.fn();
        const historyPush = jest.fn();
        const testProps = {
            timeRemaining: 0,
            timerRunning: true,
            onResetTimer: mockFunc,
            history: {
                push: historyPush
            }
        }
        const { rerender, container, queryByText } = render(<GameArena {...testProps} />);
        //Since onResetTimer() is executed in componentDidUpdate(), a re-render is needed to test this 
        rerender(<GameArena {...testProps} />);
        expect(mockFunc).toHaveBeenCalledTimes(1);
    })


    it("should redirect the user to /result page once game time over", async () => {
        const mockFunc = jest.fn();
        const historyPush = jest.fn();
        const testProps = {
            timeRemaining: 0,
            timerRunning: true,
            onResetTimer: mockFunc,
            history: {
                push: historyPush
            }
        }
        const { rerender, container, queryByText } = render(<GameArena {...testProps} />);
        //Since onResetTimer() is executed in componentDidUpdate(), a re-render is needed to test this 
        rerender(<GameArena {...testProps} />);
        expect(historyPush).toHaveBeenCalledWith('./result');
    })

})



