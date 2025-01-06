import React, { lazy } from 'react';

import { Link, useParams } from 'react-router-dom';

import { Loading } from '../Feedback/Feedback';
const City = lazy(() => import('../City'));

import { useData } from '../../hooks';
import { InfoData } from '../../types/interfaces';

const State = () => {
    const { estado } = useParams();
    const data = useData(`estados/${estado}/municipios`);

    const renderData = data.map((info: InfoData) => (
        <City key={info.id} nome={info.nome} mesorregiao={info.microrregiao.nome} />
    ));

    return (
        <>
            <h1 className="mt-3">Muncípios do {estado?.toUpperCase()}</h1>
            <Link to="/" className="btn btn-link mb-3">
                Voltar para os estados
            </Link>
            {renderData ?? <Loading />}
        </>
    );
};

export { State };
