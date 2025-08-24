import { useState , useEffect } from "react";
import axios from "axios";

function useBlogPosts() {

    const[ data , setData ] = useState([]);
    const[ isLoading , setIsLoading ] = useState(null);
    const[ isError , setIsError ] = useState(null);

    const getPosts = async () => {
        try{

            setIsError(false);
            setIsLoading(true);
            const results = await axios("http://localhost:4000/posts");
            setData(results.data.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);   
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return { data, isLoading, isError };
}

export default useBlogPosts;
