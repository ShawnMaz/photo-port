import React from 'react';
import {render, cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '..';

afterEach(cleanup);

describe('Contact is rendering', () => {
    it('renders', () => {
        render(
            <Contact></Contact>
        )
    });

    it('matches snapshot', () => {
        const {asFragment} = render(<Contact></Contact>);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('Elements are rendering correctly', () => {
    it('Matches title', () => {
        render(<Contact></Contact>);
        expect(screen.getByTestId('contact')).toHaveTextContent('Contact me');
    });

    it('Matches button name', () => {
        render(<Contact></Contact>);
        expect(screen.getByTestId('submitBtn')).toHaveTextContent('Submit');
    });
});

