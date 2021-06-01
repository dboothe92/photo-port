import React from 'react';
import { render, cleanup, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav/>);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Nav/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Camera emoji visibility', () => {
    it('inserts emoji into h2', () => {
        const { getByLabelText } = render(<Nav/>);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('Links are visible', () => {
    it('inserts tect into the links', () => {
        const { getByTestId } = render(<Nav/>);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');    
        expect(getByTestId('about')).toHaveTextContent('About me');    
    });
});