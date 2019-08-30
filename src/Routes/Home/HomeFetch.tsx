import React, { useState, useEffect } from "react";
import axios from "axios";

interface IList {
    id: number;
    name: string;
    svgPath: string;
}

const URL: string = "/dummy/setting_list.json";

const useFetch = (handleCallback) => {
    const [ loading, setLoading ] = useState(true);
    const initialData = async () => {
            const result = await axios(URL);
            if(result.status === 200 && result.statusText === "OK") {
                console.log(result);
                const { data }: { data: IList[] } = result;
                handleCallback([ ...data ]);
                setLoading(false);
            }
    }

    useEffect(() => {
        setTimeout(() => {
            initialData();
        }, 2000);
    }, []);

    return loading;
};

export default useFetch;