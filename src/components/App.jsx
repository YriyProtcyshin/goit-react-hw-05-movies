import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "page/Home/Home";
import { lazy, Suspense } from "react";
// import Movie from "page/Movie/Movies";
// import MoviesDetail from "page/MoviesDetail/MoviesDetail";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

const Movie = lazy(() => import("../page/Movie/Movies"))
const MoviesDetail = lazy(() => import("../page/MoviesDetail/MoviesDetail"))
// const Cast = lazy(() => import("../components/Cast/Cast"))
// const Reviews = lazy(() => import("../components/Reviews/Reviews"))


export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movie/>} />
          <Route path="movies/:id" element={<MoviesDetail />}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>       
        </Route>
      </Routes>
    </Suspense>
  );
};
