import React from 'react';
import {render, cleanup, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '..';


const currentPhoto = {
    name:'Park bench', 
    category:'landscape',
    description:'Lorem ipsum',
    index:1
}

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal Component', () => {
    it('renders', () => {
        render(
            <Modal currentPhoto={currentPhoto} onClick={mockToggleModal} />
        );
    });

    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Modal currentPhoto={currentPhoto} onClick={mockToggleModal}/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto}/>)
        fireEvent.click(screen.getByText('Close this modal'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})