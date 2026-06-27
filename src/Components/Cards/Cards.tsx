import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import { ICards } from '../../types';

const MapIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path
            d="M6 1C4.067 1 2.5 2.567 2.5 4.5C2.5 7.125 6 11 6 11C6 11 9.5 7.125 9.5 4.5C9.5 2.567 7.933 1 6 1ZM6 5.75C5.241 5.75 4.625 5.134 4.625 4.375C4.625 3.616 5.241 3 6 3C6.759 3 7.375 3.616 7.375 4.375C7.375 5.134 6.759 5.75 6 5.75Z"
            fill="currentColor"
        />
    </svg>
);

const ChevronIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Cards: React.FC<ICards> = ({ nome, sigla, regiao, link }): JSX.Element => {
    useEffect(() => ScrollReveal().reveal('.mercury-card'), []);

    return (
        <article className="mercury-card" data-testid="cards">
            <div className="mercury-card__header">
                <span className="mercury-card__name">{nome}</span>
                <span className="mercury-card__divider" aria-hidden="true" />
                <span className="mercury-card__sigla">{sigla}</span>
            </div>
            <p className="mercury-card__region">Região {regiao} do Brasil</p>
            <Link to={`/estado/${sigla.toLowerCase()}`} className="mercury-card__action" onClick={link}>
                <MapIcon />
                Ver cidades do {sigla}
                <ChevronIcon />
            </Link>
        </article>
    );
};

export { Cards };
