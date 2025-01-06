import React, { ChangeEvent, Suspense, lazy, useEffect, useState } from 'react';
import { TCard } from '../../types';
import { Loading } from '../Feedback/Feedback';
import { useData } from '../../hooks';

const Cards = lazy(() => import('../Cards'));
const Search = lazy(() => import('../Search'));
const RenderResult = lazy(() => import('../Render'));

export const ListState = () => {
    const data = useData('estados');
    const [info, setInfo] = useState<JSX.Element[]>([]);

    const srt = (a: { nome: number }, b: { nome: number }) => (a.nome > b.nome ? 1 : 0);
    const getSortData = (a: { nome: number }, b: { nome: number }) => (a.nome < b.nome ? -1 : srt(a, b));

    const getCards = (e: TCard) => (
        <Cards key={e.id} nome={e.nome} sigla={e.sigla} regiao={e.regiao.nome} link={() => e} />
    );

    data.sort(getSortData);
    const renderData = data.map((info: TCard) => getCards(info));

    useEffect(() => setInfo(renderData), [data])

    const searchAction = (e: ChangeEvent<HTMLInputElement>) => {
        const searchCards = data.filter((el: { nome: string }) => {
            const search = new RegExp(e.target.value, 'gi');
            const input = el.nome;
            return search.test(input);
        });

        return setInfo(searchCards.map((info: TCard) => getCards(info)));
    };

    return (
        <Suspense fallback={<Loading />}>
            <h1 className="py-3" data-testid="title-list-state">
                Estados do Brasil
            </h1>
            <Search search={searchAction} />
            <RenderResult>{!info?.length ? <Loading /> : info}</RenderResult>
        </Suspense>
    );
};
