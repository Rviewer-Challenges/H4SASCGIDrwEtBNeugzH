import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {

    const [result, setResult] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(url);
                setResult(response.data.available_currencies);
            } catch (error) {
                console.log(`Error: ${error}`)
            }
        }
        fetchData();
    },[url]);
    return result;
}
export default useFetch;