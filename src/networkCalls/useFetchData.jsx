import { useEffect, useState } from "react";

export default function UseFetchData() {
    const [data, setdata] = useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(val => setdata(val));
    },[])
    return data;
}