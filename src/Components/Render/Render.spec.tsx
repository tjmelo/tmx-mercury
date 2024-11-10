import React from 'react';

import { RenderResult } from './Render';
import { render, screen } from '@testing-library/react';

test('Should render component <State />', async () => {
    // do
    render(
        <RenderResult>
            <div />
        </RenderResult>
    );

    // then
    const element = screen.getByTestId('render-result');
    expect(element).toBeTruthy();
});
