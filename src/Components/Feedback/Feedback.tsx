import React from 'react';

const Loading = (): JSX.Element => {
    return (
        <div className="mercury-feedback mercury-feedback--loading" role="alert">
            Baixando os dados...
        </div>
    );
};

const Warning = (): JSX.Element => {
    return (
        <div className="mercury-feedback mercury-feedback--warning" role="alert">
                            Nenhum dado coincide com a sua busca...
        </div>
    );
};

export { Loading, Warning };
