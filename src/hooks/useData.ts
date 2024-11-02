import { useEffect, useState } from "react";
import { instanceAPI } from "../service/RequestAPI";

export const useData = () => {
    const [data, setData] = useState<[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await instanceAPI.get('estados');
            setData(data);
        })();
    }, []);

    return data
}
