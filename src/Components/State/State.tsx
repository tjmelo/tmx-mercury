import React, { KeyboardEvent, lazy, useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useParams } from 'react-router-dom';

import { Loading } from '../Feedback/Feedback';
import { BackIcon } from '../Icons/BackIcon';
import Search from '../Search';
import { useData } from '../../hooks';
import { InfoData } from '../../types/interfaces';

const City = lazy(() => import('../City'));

const State = () => {
    const { estado } = useParams();
    const data = useData(`estados/${estado}/municipios`);
    const [query, setQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(20);

    const filteredData = useMemo(() => {
        if (!query.trim()) {
            return data;
        }

        const search = new RegExp(query, 'gi');
        return data.filter((item: InfoData) => search.test(item.nome));
    }, [data, query]);

    useEffect(() => {
        setVisibleCount(20);
    }, [filteredData]);

    const searchAction = (e: KeyboardEvent<HTMLInputElement>) => {
        setQuery((e.target as HTMLInputElement).value);
    };

    const renderData = filteredData
        .slice(0, visibleCount)
        .map((info: InfoData) => (
            <City key={info.id} nome={info.nome} mesorregiao={info.microrregiao.nome} />
        ));

    return (
        <div className="mercury-page mercury-page--detail">
            <Link to="/" className="mercury-back-link">
                <BackIcon />
                voltar para os estados
            </Link>

            <header className="mercury-header">
                <h1 className="mercury-title">Municípios do {estado?.toUpperCase()}</h1>
                <Search search={searchAction} placeholder="Buscar município ..." />
            </header>

            <hr className="mercury-divider" />

            <InfiniteScroll
                dataLength={visibleCount}
                next={() => setVisibleCount((prev) => Math.min(prev + 20, filteredData.length))}
                hasMore={visibleCount < filteredData.length}
                loader={<Loading />}
                scrollThreshold={0.95}
            >
                <div className="mercury-city-list">{renderData}</div>
            </InfiniteScroll>

            {renderData.length === 0 && <Loading />}
        </div>
    );
};

export { State };
