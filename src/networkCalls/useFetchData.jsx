import { useEffect, useState } from "react";

export default function UseFetchData() {
    const [data, setdata] = useState(null);
    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/users")
        // fetch("http://localhost:3000/forms/")
        fetch("http://127.0.0.1:8000/projects_list/")
        .then(res => res.json())
        .then(val => setdata(val));
    },[])
    return data;
}

//http://localhost:3000/forms/