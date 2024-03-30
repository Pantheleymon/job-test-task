import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../redux";
import Spinner from "../spinner/Spinner";

const PostsList = () => {
    const {data = [], isLoading, isError} = useGetPostsQuery('/');

    if (isLoading) {
      return <Spinner/>
    }
    if (isError) {
      return <>'Ошибка загрузки'</>;
    }
  
    return (
      <>{data.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/posts/${item.id}`}>
              <img src="https://placehold.co/600x400/orange/white" alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </Link>
          </div>
        )
      })}</>
    );
};

export default PostsList;