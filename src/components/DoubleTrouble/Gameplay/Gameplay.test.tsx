import React from 'react';
import { Gameplay } from "./Gameplay";
import { render  } from "@testing-library/react";
import { create } from "react-test-renderer";

//mock components
jest.mock('../UI/QuestionCard/QuestionCard');

describe("Double Trouble: <Gameplay />", () => {
    it("should render the component", () => {
        const mockFunc = jest.fn();
        const testProps = {
            onIncrementScore: mockFunc
        }
        const { container } = render(<Gameplay {...testProps} />);
        expect(container).toBeInTheDocument();
    })

    it("should render <QuestionCard /> component", () => {
        const mockFunc = jest.fn();
        const testProps = {
            onIncrementScore: mockFunc
        }
        const { queryByText } = render(<Gameplay {...testProps} />);
        expect(queryByText("QUESTIONCARD COMPONENT")).toBeInTheDocument();
    })

    it("should increment score if right option is chosen", () => {
        const mockFunc = jest.fn();
        const testProps = {
            onIncrementScore: mockFunc
        }
        const component = create(<Gameplay {...testProps} />);
        //create instance of component so that we can execute the component method.
        const instance = component.getInstance();
        let question = {
            "question" : {
                "text" : "red",
                "color" : "blue"
            },
            "options" : [
                {
                    "text" : "red",
                    "color" : "blue"
                },
                {
                    "text" : "blue",
                    "color" : "red"
                }
            ]
        };
        let answer = {
            "text" : "blue",
            "color" : "red"
        };
        //execute component method
        instance.optionClickHandler(question, answer);
        //since our answer is correct, mockFunc should have been called
        expect(mockFunc).toBeCalledTimes(1);
    })


    it("should not increment score if wrong option is chosen", () => {
        const mockFunc = jest.fn();
        const testProps = {
            onIncrementScore: mockFunc
        }
        const component = create(<Gameplay {...testProps} />);
        //create instance of component so that we can execute the component method.
        const instance = component.getInstance();
        let question = {
            "question" : {
                "text" : "red",
                "color" : "blue"
            },
            "options" : [
                {
                    "text" : "red",
                    "color" : "blue"
                },
                {
                    "text" : "blue",
                    "color" : "red"
                }
            ]
        };
        let answer = {
            "text" : "red",
            "color" : "blue"
        };
        //execute component method
        instance.optionClickHandler(question, answer);
        //since our answer is correct, mockFunc should have been called
        expect(mockFunc).not.toBeCalledTimes(1);
    })

})



