import React from 'react';
import { render, cleanup, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav
            categories={ categories }
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories={ categories }
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
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
        />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('Links are visible', () => {
    it('inserts tect into the links', () => {
        const { getByTestId } = render(<Nav
            categories={ categories }
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');    
        expect(getByTestId('about')).toHaveTextContent('About me');    
    });
});