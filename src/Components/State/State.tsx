import React, { lazy, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Link, useParams } from 'react-router-dom';

import { Loading } from '../Feedback/Feedback';
const City = lazy(() => import('../City'));

import { useData } from '../../hooks';
import { InfoData } from '../../types/interfaces';

const State = () => {
    const { estado } = useParams();
    const data = useData(`estados/${estado}/municipios`);

    const [visibleCount, setVisibleCount] = useState(20);

    useEffect(() => setVisibleCount(20), [data]);

    const renderData = data
        .slice(0, visibleCount)
        .map((info: InfoData) => (
            <City key={info.id} nome={info.nome} mesorregiao={info.microrregiao.nome} />
        ));

    return (
        <>
            <h1 className="mt-3">Muncípios do {estado?.toUpperCase()}</h1>
            <Link to="/" className="btn btn-link mb-3">
                Voltar para os estados
            </Link>
            <InfiniteScroll
                dataLength={visibleCount}
                next={() => setVisibleCount((prev) => Math.min(prev + 20, data.length))}
                hasMore={visibleCount < data.length}
                loader={<Loading />}
                scrollThreshold={0.95}
            >
                {renderData}
            </InfiniteScroll>
            {renderData.length === 0 && <Loading />}
        </>
    );
};

export { State };
