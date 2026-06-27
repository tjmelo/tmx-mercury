import React, { KeyboardEventHandler } from 'react';
import { SearchIcon } from '../Icons/SearchIcon';

interface SearchProps {
    search?: KeyboardEventHandler<HTMLInputElement>;
    placeholder?: string;
}

export const Search: React.FC<SearchProps> = ({
    search,
    placeholder = 'Buscar estado...',
}): JSX.Element => {
    const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
        type: 'text',
        onKeyUp: search,
        className: 'mercury-search',
        placeholder,
        'aria-label': placeholder,
    };

    return (
        <div className="mercury-search-container">
            <input {...inputProps} />
            <SearchIcon />
        </div>
    );
};
