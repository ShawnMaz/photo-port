import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import PhotoList from '..';

const category = 'Protrait';

afterEach(cleanup);

describe('PhotoList is rendering', () => {
    it('renders', () => {
        render(
            <PhotoList category={category} />
        );
    });

    it('matches snapshot', () => {
        const {asFragment} = render(
            <PhotoList category={category} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});