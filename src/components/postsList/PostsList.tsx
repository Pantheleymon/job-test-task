import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IRootState } from "../redux";

import Spinner from "../spinner/Spinner";
import PostsListItem from "../postsListItem/PostsListItem";
import { IPost } from "../types/types";
import { addPost } from "../redux/postsSlice";

import './postsList.css'

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
    <div className="container">
        <header className="header">
            <h1 className="header_title">Блог</h1>
            <p className="header_text">Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>

            <div className="header_search">
                <input className="header_search" 
                        type="text" 
                        value={searchTerm} 
                        onChange={(event) => setSearchTerm(event.target.value)} 
                        placeholder="Поиск по названию статьи"/>
            </div>
        </header>

        <main className="main_posts">
            {filteredPosts}
        </main>
      
    </div>
    );
};

export default PostsList;