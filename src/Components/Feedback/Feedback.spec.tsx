import React from 'react';
import { Warning, Loading } from './Feedback';
import { render, screen } from '@testing-library/react';

test('Should render component <Feedback/>', async () => {
    // do
    render(
        <>
            <Loading />
            <Warning />
        </>
    );

    // then
    const loading = screen.getByText('Baixando os dados...');
    expect(loading).toBeTruthy();

    const warning = screen.getByText('Nenhum dado coincide com a sua busca...');
    expect(warning).toBeTruthy();
});
