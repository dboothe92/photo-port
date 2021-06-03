import React from 'react';
import { render, cleanup, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
        { name: 'portraits', description: 'Portraits of people in my life' }
    ]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav
            categories={ categories }
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            ContactSelected={mockContactSelected}
            SetContactSelected={mockSetContactSelected}
        />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories={ categories }
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            ContactSelected={mockContactSelected}
            SetContactSelected={mockSetContactSelected}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Camera emoji visibility', () => {
    it('inserts emoji into h2', () => {
        const { getByLabelText } = render(<Nav
            categories={ categories }
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            ContactSelected={mockContactSelected}
            SetContactSelected={mockSetContactSelected}
        />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('Links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav
            categories={ categories }
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            ContactSelected={mockContactSelected}
            SetContactSelected={mockSetContactSelected}
        />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');    
        expect(getByTestId('about')).toHaveTextContent('About me');    
    });
});