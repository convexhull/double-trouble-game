import React from 'react';
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Page404 from "./Page404";

describe('<Page404 />', () => {
    it("should render the component", () => {
        const { container } = render(<BrowserRouter><Page404 /></BrowserRouter>);
        expect(container).toBeInTheDocument();
    })
})
