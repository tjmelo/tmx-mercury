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


    // Check for a heading (if present)
    const heading = screen.queryByRole('heading');
    if (heading) {
        expect(heading).toBeVisible();
    }

    // Check for a back button (if present)
    const backButton = screen.queryByRole('button', { name: /voltar/i });
    if (backButton) {
        expect(backButton).toBeEnabled();
    }

    // Check for links (if any)
    const links = screen.queryAllByRole('link');
    links.forEach(link => {
        expect(link).toBeVisible();
    });
});
