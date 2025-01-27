import React from 'react';
import { Search } from './Search';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

test('Should render component <Search />', async () => {
    // do
    render(<Search search={jest.fn()} />);

    // then
    const element = screen.getByPlaceholderText('Digite o nome de um estado aqui...');
    expect(element).toBeTruthy();
});
