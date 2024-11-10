import { useEffect, useState } from 'react';
import { instanceAPI } from '../service/RequestAPI';

export const useData = (param: string) => {
    const [data, setData] = useState<[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await instanceAPI.get(param);
            setData(data);
        })();
    }, []);

    return data;
};
