import React from 'react';
import { QuestionCard } from "./QuestionCard";
import { queryByAltText, render  } from "@testing-library/react";
import userEvent from '@testing-library/user-event';


describe("Double Trouble: <QuestionCard />", () => {
    it("should render the component", () => {
        const mockFunc = jest.fn();
        const testProps = {
            question: {
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
            },
            clicked: mockFunc,
            wrongChoice: false

        }
        const { container } = render(<QuestionCard {...testProps} />);
        expect(container).toBeInTheDocument();
    })

    it("should display question text RED in blue color", () => {
        const mockFunc = jest.fn();
        const testProps = {
            question: {
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
            },
            clicked: mockFunc,
            wrongChoice: false
        }
        const { container } = render(<QuestionCard {...testProps} />);
        expect(container.querySelector(".question")).toBeInTheDocument();
        expect(container.querySelector(".question")).toHaveClass("question--blue");
        expect(container.querySelector(".question")).toHaveTextContent("RED");
    })


    it("should display options with correct text", () => {
        const mockFunc = jest.fn();
        const testProps = {
            question: {
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
            },
            clicked: mockFunc,
            wrongChoice: false
        }
        const { container } = render(<QuestionCard {...testProps} />);
        expect(container.querySelector(".options")?.firstChild).toBeInTheDocument();
        expect(container.querySelector(".options")?.firstChild).toHaveTextContent("RED");
        expect(container.querySelector(".options")?.lastChild).toBeInTheDocument();
        expect(container.querySelector(".options")?.lastChild).toHaveTextContent("BLUE");
    })


    it("should display options with correct color", () => {
        const mockFunc = jest.fn();
        const testProps = {
            question: {
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
            },
            clicked: mockFunc,
            wrongChoice: false
        }
        const { container } = render(<QuestionCard {...testProps} />);
        expect(container.querySelector(".options")?.firstChild).toBeInTheDocument();
        expect(container.querySelector(".options")?.firstChild).toHaveClass("option--blue");
        expect(container.querySelector(".options")?.lastChild).toBeInTheDocument();
        expect(container.querySelector(".options")?.lastChild).toHaveClass("option--red");
    })


    it("should allow user to pick an option by clicking", () => {
        const mockFunc = jest.fn();
        const testProps = {
            question: {
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
            },
            clicked: mockFunc,
            wrongChoice: false
        }
        const { container } = render(<QuestionCard {...testProps} />);
        userEvent.click(container.querySelector(".options")?.firstChild);
        userEvent.click(container.querySelector(".options")?.firstChild);
        expect(mockFunc).toHaveBeenCalledTimes(2);
    })

    it("should disable both options when wrong choice chosen", () => {
        const mockFunc = jest.fn();
        const testProps = {
            question: {
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
            },
            clicked: mockFunc,
            wrongChoice: true
        }
        const { container } = render(<QuestionCard {...testProps} />);
        expect(container.querySelector(".options")?.firstChild).toHaveClass("click-disabled");
        expect(container.querySelector(".options")?.firstChild).toHaveClass("click-disabled");
    })


    it("should display cross sign on the wrong option if it is chosen", () => {
        const mockFunc = jest.fn();
        const testProps = {
            question: {
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
            },
            clicked: mockFunc,
            wrongChoice: true
        }
        //we are setting wrongChoice prop as true, because we are testing for wrong option chosen case. The check for correctness is a logic of parent component.  
        //we don't need to test that logic here, as this is a unit test. 
        const { container, queryByAltText } = render(<QuestionCard {...testProps} />);
        //click first option
        userEvent.click(container.querySelector(".options")?.firstChild);
        const imageNode = queryByAltText("cross-sign");
        //check that cross-sign is displayed in the first option
        expect(container.querySelector(".options").firstChild.contains(imageNode)).toBe(true);
    })


    it("shouldn't display cross sign if correct choice is chosen", () => {
        const mockFunc = jest.fn();
        const testProps = {
            question: {
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
            },
            clicked: mockFunc,
            wrongChoice: false
        }
        //if wrong choice is false, then we shouldn't see the cross sign. Whichever option we choose doesn't matter, since the logic for correctness of 
        //response is taken care of in parent component and out of scope of this unit test. 
        const { rerender, container, queryByAltText } = render(<QuestionCard {...testProps} />);
        //click first option
        userEvent.click(container.querySelector(".options")?.firstChild);
        expect(queryByAltText("cross-sign")).not.toBeInTheDocument();
        rerender(<QuestionCard {...testProps} />);
        //click second option
        userEvent.click(container.querySelector(".options")?.lastChild);
        expect(queryByAltText("cross-sign")).not.toBeInTheDocument();
    })
    
})



