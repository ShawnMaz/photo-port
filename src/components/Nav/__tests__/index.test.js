import React from 'react'
import {render, cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    {name:'portraits', description:'Portraits of people in my life'}
];

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav 
            categories = {categories}
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockCurrentCategory}
            contactSelected = {mockContactSelected}
            setContactSelected = {mockSetContactSelected}
        />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<Nav 
            categories = {categories}
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockCurrentCategory}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('emoji is visible', () => {
    it('inserts emoji into h2', () => {
        render(<Nav 
            categories = {categories}
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockCurrentCategory}
        />);
        expect(screen.getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    it('inserts test into links', () => {
        render(<Nav 
            categories = {categories}
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockCurrentCategory}
        />);
        expect(screen.getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(screen.getByTestId('about')).toHaveTextContent('About me');
    });
});