import { MouseEventHandler } from 'react';

export interface ICards {
    nome: string;
    sigla: string;
    regiao: string;
    link: MouseEventHandler<HTMLAnchorElement>;
}

export interface ICity {
    nome: string;
    mesorregiao: string | undefined;
}

export interface Microrregiao {
    nome: string;
}
export interface InfoData {
    id: number;
    nome: string;
    microrregiao: Microrregiao;
}
