import React from 'react';
import { ICity } from '../../types';

const City: React.FC<ICity> = ({ nome, mesorregiao }): JSX.Element => {
    return (
        <article className="mercury-city" data-testid="city">
            <span className="mercury-city__name">{nome}</span>
            <span className="mercury-city__divider" aria-hidden="true" />
            <span className="mercury-city__region">{mesorregiao}</span>
        </article>
    );
};

export { City };
