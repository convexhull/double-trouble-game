import React from 'react';
import { render } from "@testing-library/react";
import { DoubleTrouble } from "./DoubleTrouble";
import { BrowserRouter } from "react-router-dom";


describe("Pages/ <DoubleTrouble />", () => {



    it("should render a component", () => {
        const testProps = {
            match: {
                path: "/double-trouble"
            }
        }
        const { container } = render(<BrowserRouter>
            <DoubleTrouble {...testProps} />
        </BrowserRouter>);
        expect(container).toBeInTheDocument();
    })


})