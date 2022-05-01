import {useState, useEffect} from "react";
import api_key from './keys';

const context_key = '6bdac29051717a05a';

const useGoogle = (term) => {
    const[data, setData] = useState(null);
    console.log(term);
    useEffect(() => {

        const fetchData = async() => {

            fetch(`https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${context_key}&q=${term}`)
            .then( res => res.json())
            .then( result => setData(result))   
        }

         fetchData();

    }, [term])

    return {data};
};

export default useGoogle;