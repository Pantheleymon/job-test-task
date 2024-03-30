import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../redux";

import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";

const SinglePost:FC = () => {

    const {id} = useParams<string>();
    
    const {data, isLoading, isError} = useGetPostByIdQuery(id)
    
    if (isLoading) {
        return <Spinner/>;
    }
        if (isError) {
        return <>'Ошибка загрузки'</>;
    }


    return (
        <div key={data?.id}>
            <Link to={`/`}>
                Вернуться
            </Link>
                <img src="https://placehold.co/600x400/orange/white" alt={data?.title} />
                <h2>{data?.title}</h2>
                <p>{data?.body}</p>
        </div>
    );
};

export default SinglePost;