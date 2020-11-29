import React from 'react';
import { IntroIllustration } from "./IntroIllustration";
import { render } from "@testing-library/react";



describe("Double Trouble: <IntroIllustration />", () => {
    it("should render the component", () => {
        const { container } = render(<IntroIllustration />);
        expect(container).toBeInTheDocument();
    })

    it("should display question tool tip", () => {
        const { queryByText } = render(<IntroIllustration />);
        expect(queryByText(/WORD IS IN BLUE COLOR/)).toBeInTheDocument();
    })

    it("should display question text in blue color", () => {
        const { container } = render(<IntroIllustration />);
        expect(container.querySelector(".question")).toBeInTheDocument();
        expect(container.querySelector(".question")).toHaveClass("question--blue");
    })


    it("should display first option in red color", () => {
        const { queryByTestId } = render(<IntroIllustration />);
        expect(queryByTestId("first-option")).toBeInTheDocument();
        expect(queryByTestId("first-option")).toHaveClass("option--blue");
        expect(queryByTestId("first-option")).toHaveTextContent("RED");
    })

    it("should display second option with text BLUE in red color", () => {
        const { queryByTestId } = render(<IntroIllustration />);
        expect(queryByTestId("second-option")).toBeInTheDocument();
        expect(queryByTestId("second-option")).toHaveClass("option--red");
        expect(queryByTestId("second-option")).toHaveTextContent("BLUE");
    })


    it("should display the phrase WRONG ANSWER", () => {
        const { container } = render(<IntroIllustration />);
        expect(container).toHaveTextContent("WRONG ANSWER");
    })


    it("should display the phrase CORRECT ANSWER", () => {
        const { container } = render(<IntroIllustration />);
        expect(container).toHaveTextContent("CORRECT ANSWER");
    })

})



