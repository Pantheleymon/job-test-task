import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../redux";
import Spinner from "../spinner/Spinner";
import { useState } from "react";

const PostsList = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const {data = [], isLoading, isError} = useGetPostsQuery('/');

    if (isLoading) {
      return <Spinner/>
    }
    if (isError) {
      return <>'Ошибка загрузки'</>;
    }

    const filteredPosts = data
                            .filter((item) => {
                                return item.title.includes(searchTerm);
                            })
                            .map((item) => {
                                return (
                                <div key={item.id}>
                                    <Link to={`/posts/${item.id}`}>
                                    <img src="https://placehold.co/600x400/orange/white" alt={item.title} />
                                    <h2>{item.title}</h2>
                                    <p>{item.body}</p>
                                    </Link>
                                </div>
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