import React from 'react';
import "@testing-library/jest-dom";

import { State } from './State';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

test('Should render component <State/>', async () => {
    // do
    render(
        <BrowserRouter>
            <State />
        </BrowserRouter>
    );

    // then
    expect(screen.getByText('Muncípios do')).toBeInTheDocument();
    expect(screen.getByText('Voltar para os estados')).toBeInTheDocument();
});
