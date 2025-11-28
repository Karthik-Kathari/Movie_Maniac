import React, { useEffect, useState, useRef } from "react";
import { fetchMovies } from "../utils/api";
import MovieCard from "./MovieCard";
import "../styles/MovieList.css";
import _ from "lodash";

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(null);
  const [sortBy, setSortBy] = useState("release_date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [activeDot, setActiveDot] = useState(0);

  const listRef = useRef(null);

  const handleScrollTo = (position) => {
    if (!listRef.current) return;
    listRef.current.scrollTo({
      left: position,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!listRef.current) return;
    const { scrollLeft, scrollWidth } = listRef.current;

    if (scrollLeft < scrollWidth * 0.33) setActiveDot(0);
    else if (scrollLeft < scrollWidth * 0.66) setActiveDot(1);
    else setActiveDot(2);
  };

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(category);
      setMovies(Array.isArray(data) ? data : []);
    };
    loadMovies();
  }, [category]);

  useEffect(() => {
    let result = [...movies];
    if (ratingFilter)
      result = result.filter((m) => m.vote_average >= ratingFilter);
    result = _.orderBy(result, [sortBy], [sortOrder]);
    setFilteredMovies(result);
  }, [movies, ratingFilter, sortBy, sortOrder]);

  const toggleRatingFilter = (rating) => {
    setRatingFilter((current) => (current === rating ? null : rating));
  };

  if (!movies.length) return <p>Loading movies...</p>;

  return (
    <>
      <div className="filter-sort-controls">
        <div className="filter">
          <span>Filter by Rating: </span>
          <button
            className={ratingFilter === 8 ? "active" : ""}
            onClick={() => toggleRatingFilter(8)}
          >
            8+
          </button>
          <button
            className={ratingFilter === 7 ? "active" : ""}
            onClick={() => toggleRatingFilter(7)}
          >
            7+
          </button>
        </div>

        <div className="sort">
          <label>
            Sort by:{" "}
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="release_date">Release Date</option>
              <option value="vote_average">Rating</option>
            </select>
          </label>
          <label>
            Order:{" "}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>
      </div>

      <div className="movie-list" ref={listRef} onScroll={handleScroll}>
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      <div className="scroll-dots">
        <span
          className={activeDot === 0 ? "active" : ""}
          onClick={() => handleScrollTo(0)}
        ></span>
        <span
          className={activeDot === 1 ? "active" : ""}
          onClick={() => handleScrollTo(listRef.current?.scrollWidth / 2)}
        ></span>
        <span
          className={activeDot === 2 ? "active" : ""}
          onClick={() => handleScrollTo(listRef.current?.scrollWidth)}
        ></span>
      </div>
    </>
  );
};

export default MovieList;
