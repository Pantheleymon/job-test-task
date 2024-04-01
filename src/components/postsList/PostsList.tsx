import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IRootState } from "../redux";

import Spinner from "../spinner/Spinner";
import PostsListItem from "../postsListItem/PostsListItem";
import { IPost } from "../types/types";
import { addPost } from "../redux/postsSlice";

const PostsList = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => json.map((item:IPost) => {
                dispatch(addPost(item))
            }));
    }, []);

    const {postsStatus, posts} = useSelector((state:IRootState) => state.posts);

    const filteredPosts = posts
                            .filter((item:IPost) => {
                                return item.title.includes(searchTerm);
                            })
                            .map((item:IPost, index) => {
                                return (
                                    <PostsListItem {...item} key={index}/>
                                )
                            });
                        
  
    return (
      <>
        <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>

        {filteredPosts}
      
      </>
    );
};

export default PostsList;