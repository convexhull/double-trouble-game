import React from 'react';

import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { Sound } from './Sound';
import SoundOnIcon from '../../../../../assets/images/sound/sound-on.svg';



describe('Unit Test: <Sound />', () => {

    it("should render the component", () => {
        const { container } = render(<Sound />);
        expect(container).toBeInTheDocument();
    })
    
    it("should display sound on icon by default", () => {
        const { queryByAltText } = render(<Sound />);
        const imageNode = queryByAltText("sound-on button");
        expect(imageNode?.getAttribute("src")).toBe(SoundOnIcon);
    })

    it("should toggle sound icon on click", () => {
        const { queryByAltText } = render(<Sound />);
        const imageNode = queryByAltText("sound-on button");
        expect(imageNode).toBeInTheDocument();
        if(!imageNode){
            throw new Error("image node doesn't exist");
        }
        userEvent.click(imageNode);
        expect(queryByAltText("sound-off button")).toBeInTheDocument();
        userEvent.click(imageNode);
        expect(queryByAltText("sound-on button")).toBeInTheDocument();
    })

})




