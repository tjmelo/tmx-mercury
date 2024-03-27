import React, { Suspense, lazy, useEffect, useState } from 'react';
import { instanceAPI } from '../../service/RequestAPI';
import { TCard } from '../../types';
import { Loading } from '../Feedback/Feedback';

const Cards = lazy(() => import('../Cards'));
const Search = lazy(() => import('../Search'));
const RenderResult = lazy(() => import('../Render'));

const ListState = () => {
    const [data, setData] = useState<[]>([]);
    const [renderData, setRenderData] = useState<[] | any>([]);

    const getCards = (e: TCard) => (
        <Cards key={e.id} nome={e.nome} sigla={e.sigla} regiao={e.regiao.nome} link={() => e} />
    );

    const getSortData = (a: { nome: number }, b: { nome: number }) => (a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0);

    useEffect(() => {
        (async () => {
            const { data } = await instanceAPI.get('estados');
            setData(data);
            data.sort(getSortData);
            setRenderData(data.map((info: TCard) => getCards(info)));
        })();
    }, []);

    const searchAction = (e: any) => {
        const searchCards = data.filter((el: any) => {
            const search = new RegExp(e.target.value, 'gi');
            const input = el.nome;
            return search.test(input);
        });

        setRenderData(searchCards.map((info: TCard) => getCards(info)));
    };

    return (
        <Suspense fallback={<Loading />}>
            <h1 className="py-3" data-testid="title-list-state">
                {' '}
                Estados do Brasil{' '}
            </h1>
            <Search search={searchAction} />
            <RenderResult>{!renderData.length ? <Loading /> : renderData}</RenderResult>
        </Suspense>
    );
};

export { ListState };
