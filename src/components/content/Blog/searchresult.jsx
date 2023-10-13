import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Url } from '../../../../Url';
import { useEffect, useState } from 'react';
import SearchDesign from './SearchDesign';

const Searchblogs = () => {
    const [post, setPost] = useState([]); // Initialize post as an empty array
    let {name} = useParams();

    const searchvalue = async () => {
        try {
            const res = await axios.get(`${Url}api/blog/search/${name}`)
            console.log(res.data)
            setPost(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        searchvalue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]); // Include Params in the dependency array

    console.log(post);

    // Check if post is not null or undefined before mapping over it
    return (
        <>
            {post !== null && post !== undefined ? (
                post.map((item, index) => (
                    <SearchDesign key={index} item={item} />
                ))
            ) : (
                <p>No results found.</p> // Display a message when post is empty
            )}
        </>
    );
};


export default Searchblogs;
