import '@testing-library/jest-dom';

import React from 'react';
import Entry from './Entry';
import { render, waitFor, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../../service/NotifySystem.ts');

test('Should render component <Entry />', async () => {
    await waitFor(async () => {
        // do
        render(<Entry />, { wrapper: Router });

        // then
        expect(screen.getByText('Baixando os dados...')).toBeInTheDocument();
    });
});
