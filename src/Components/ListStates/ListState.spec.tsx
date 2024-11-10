import React from 'react';

import '@testing-library/jest-dom';

import { render, waitFor, screen } from '@testing-library/react';

import { ListState } from './ListState';
import { useData } from '../../hooks';

jest.mock('../../hooks/useData');

const useDataTest = [
    {
        nome: 'teste',
        sigla: 'ts',
        regiao: 'teste regiao',
        link: jest.fn(),
    },
    {
        nome: 'teste2',
        sigla: 'ts',
        regiao: 'teste regiao',
        link: jest.fn(),
    },
];

jest.mock('../Search', () => ({
    Search: ({ search }: string) => <input type="text" value="test" onChange={e => search(e.target.value)} />,
}));

test('Should render component <StateList />', async () => {
    //do
    (useData as jest.Mock).mockReturnValue(useDataTest);
    await waitFor(() => render(<ListState />));

    // then
    expect(screen.getByRole('alert')).toBeInTheDocument();
});
