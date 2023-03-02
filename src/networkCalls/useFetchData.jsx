import { useEffect, useState } from "react";

export default function UseFetchData(url) {
    const [data, setdata] = useState(null);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(val => setdata(val));
    }, [])
    return data;
}

