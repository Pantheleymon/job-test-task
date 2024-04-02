import { FC } from "react";
import { Link } from "react-router-dom";

import { IPost } from "../types/types";

import { useDispatch, useSelector } from "react-redux";

import { updatePost } from "../redux/postsSlice";
import { IRootState } from "../redux";

import './postsListItem.css'

const PostsListItem:FC<IPost> = ({id}) => {

    const dispatch = useDispatch();

    const post:IPost = useSelector((state:IRootState) => state.posts.posts.filter((item) => item.id == id)[0]);


    const handleClick = (userReaction:string) => {
        if (userReaction === reaction) {
            const idle = '';
            dispatch(updatePost({id, idle}))
        } else {
            dispatch(updatePost({id, userReaction}));
        }
    }


    const {title, body, reaction, likes, dislikes} = post;

    return (

        <article className="post">
            <img src="https://placehold.co/558x273/EEE/31343C?font=roboto&text=Roboto" alt={title} className="post_image"/>

            <div className="post__information">
                <h2 className="post__information_title">{title}</h2>
                <p className="post__information_text">{body}</p>

                <div className="post__actions">
                    <div className="post__reactions_flex">
                        <div className="post__reactions_item" 
                        onClick={() => handleClick('like')}
                        >
                            <div className="post__reactions_item_icon">
                                <svg width="32" height="33" viewBox="0 0 32 33" fill={reaction == 'like' ? 'green' : "#959298"} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.66669 27.1667H5.33335C6.06669 27.1667 6.66669 26.5667 6.66669 25.8334V13.8334C6.66669 13.1 6.06669 12.5 5.33335 12.5H2.66669V27.1667ZM29.1067 17.6734C29.2534 17.34 29.3334 16.98 29.3334 16.6067V15.1667C29.3334 13.7 28.1334 12.5 26.6667 12.5H19.3334L20.56 6.30002C20.6267 6.00669 20.5867 5.68669 20.4534 5.42002C20.1467 4.82002 19.76 4.27335 19.28 3.79335L18.6667 3.16669L10.12 11.7134C9.61335 12.22 9.33335 12.9 9.33335 13.6067V24.06C9.33335 25.7667 10.7334 27.1667 12.4534 27.1667H23.2667C24.2 27.1667 25.08 26.6734 25.56 25.8734L29.1067 17.6734Z"/>
                                </svg>
                            </div>
                            <div className="post__reactions_item_text">
                                { reaction === 'like' ? likes + 1 : likes }
                            </div>
                        </div>
                        <div className="post__reactions_item" 
                        onClick={() => handleClick('dislike')}
                        >
                            <div className="post__reactions_item_icon">
                                <svg width="32" height="33" viewBox="0 0 32 33" fill={reaction == "dislike" ? 'red' : '#959298'} transform="scale(1,-1)" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.66669 27.1667H5.33335C6.06669 27.1667 6.66669 26.5667 6.66669 25.8334V13.8334C6.66669 13.1 6.06669 12.5 5.33335 12.5H2.66669V27.1667ZM29.1067 17.6734C29.2534 17.34 29.3334 16.98 29.3334 16.6067V15.1667C29.3334 13.7 28.1334 12.5 26.6667 12.5H19.3334L20.56 6.30002C20.6267 6.00669 20.5867 5.68669 20.4534 5.42002C20.1467 4.82002 19.76 4.27335 19.28 3.79335L18.6667 3.16669L10.12 11.7134C9.61335 12.22 9.33335 12.9 9.33335 13.6067V24.06C9.33335 25.7667 10.7334 27.1667 12.4534 27.1667H23.2667C24.2 27.1667 25.08 26.6734 25.56 25.8734L29.1067 17.6734Z"/>
                                </svg>
                            </div>
                            <div className="post__reactions_item_text">
                                { reaction === 'dislike' ? dislikes + 1 : dislikes }
                            </div>
                        </div>
                    </div>

                    <Link to={`/posts/${id}`} className="post__link">
                            Читать далее
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default PostsListItem;