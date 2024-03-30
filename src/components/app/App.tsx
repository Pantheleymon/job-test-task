import { FC, Suspense } from "react";
import PostsList from "../postsList/PostsList";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import SinglePost from "../singlePost/SinglePost";

const App:FC = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner/>}>

          <Routes>
            <Route path="/" element={<PostsList/>}/>
            <Route path="/posts/:id" element={<SinglePost/>}/>
            <Route path="*" element={<>Ошибка 404, Страница не найдена</>}/>
          </Routes>

        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App;
