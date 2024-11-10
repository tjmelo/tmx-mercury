import React, { KeyboardEventHandler } from 'react';
interface SearchProps {
    search: KeyboardEventHandler<HTMLInputElement> | undefined;
}

export const Search: React.FC<SearchProps> = ({ search }): JSX.Element => {
    const SearchProps = {
        type: "text",
        onKeyUp: search,
        className:"form-control form-control-lg mb-4",
        placeholder: "Digite o nome de um estado aqui..."
    }

    return <input {...SearchProps} />;
};
