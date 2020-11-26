import React from 'react';
import ControlPanel from "./ControlPanel";
import { render } from "@testing-library/react";


jest.mock("../ControlPanel/Timer/Timer");
jest.mock("../ControlPanel/Score/Score");
jest.mock("../ControlPanel/Sound/Sound");

describe("<ControlPanel />", () => {
    

    it("should render the component", () => {
        const { container } = render(<ControlPanel />);
        expect(container).toBeInTheDocument();
    })

    it("should render <Timer />", () => {
        const { queryByText } = render(<ControlPanel />);
        expect(queryByText(/timer component/i)).toBeInTheDocument();
    })

    it("should render <Score />", () => {
        const { queryByText } = render(<ControlPanel />);
        expect(queryByText(/score component/i)).toBeInTheDocument();
    })

    it("should render <Sound />", () => {
        const { queryByText } = render(<ControlPanel />);
        expect(queryByText(/sound component/i)).toBeInTheDocument();
    })
})



