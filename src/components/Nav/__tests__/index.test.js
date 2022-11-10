import React from 'react'
import {render, cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('emoji is visible', () => {
    it('inserts emoji into h2', () => {
        render(<Nav />);
        expect(screen.getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    it('inserts test into links', () => {
        render(<Nav />);
        expect(screen.getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(screen.getByTestId('about')).toHaveTextContent('About me');
    });
});