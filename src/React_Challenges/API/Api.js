import React, { useEffect, useState } from "react";
import './Api.css'


function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(url)
                if (!response.ok) throw Error
                const DD = await response.json();
                setData(DD)
                setLoading(false)
            }
            catch (err){
                setError(err)
                console.log(err);
            }
        }
        fetchData()
    }, [url])

    return {  loading, data, error };
}

export default function Api() {
    const postIds = [1, 2, 3, 4, 5, 6, 7, 8];
    const [index, setIndex] = useState(0);

    const { loading, data: post, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`
    );

    const incrementIndex = () => {
        setIndex((i) => (i === postIds.length - 1 ? i : i + 1));
        console.log(index);
    };

    if (loading === true) {
        return <p>Loading</p>;
    }

    if (error) {
        return (
            <>
                <p>{error}</p>
                <button onClick={incrementIndex}>Next Post</button>
            </>
        );
    }


    return (
        <div className="App">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            {error && <p>{error}</p>}
            {index === postIds.length - 1 ? (
                <p>No more posts existss ....</p>
            ) : (
                <button onClick={incrementIndex}>Next Post</button>
            )}
        </div>
    )
}

// export default Api