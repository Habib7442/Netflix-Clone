import React, { useEffect, useRef, useState } from "react";
import "./TopRated.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import requests from "../../Request";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export default function TopRated() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [trending, setTrending] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(requests.requestTopRated, requests.requestUpcoming)
      .then((response) => {
        setMovies(response.data.results);
      });
    axios.get(requests.requestUpcoming).then((response) => {
      setUpcoming(response.data.results);
    });
    axios.get(requests.requestTrending).then((response) => {
      setTrending(response.data.results);
    });
  }, []);

  return (
    <>
      <h2 className="genre-titles">Top Rated Movies</h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper laptop"
      >
        {movies.map((movie) => (
          <SwiperSlide>
            <img
              className="listImg"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt=""
            />
            <p
              className="movieTitle"
              style={{ textAlign: "center", color: "whitesmoke" }}
            >
              {movie?.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="genre-titles">Upcoming Movies</h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper laptop"
      >
        {upcoming.map((movie) => (
          <SwiperSlide>
            <img
              className="listImg"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt=""
            />
            <p
              className="movieTitle"
              style={{ textAlign: "center", color: "whitesmoke" }}
            >
              {movie?.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="genre-title">Trending Movies</h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper laptop"
      >
        {trending.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img className="listImg" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
            <p
              className="movieTitle"
              style={{ textAlign: "center", color: "whitesmoke" }}
            >
              {movie?.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>


      {/* mobile view */}

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mobile"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              className="listImg"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt=""
            />
            <p
              className="movieTitle"
              style={{ textAlign: "center", color: "whitesmoke" }}
            >
              {movie?.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mobile"
      >
        {trending.map((movie) => (
          <SwiperSlide>
            <img className="listImg" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
            <p
              className="movieTitle"
              style={{ textAlign: "center", color: "whitesmoke" }}
            >
              {movie?.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mobile"
      >
        {upcoming.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img className="listImg" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
            <p
              className="movieTitle"
              style={{ textAlign: "center", color: "whitesmoke" }}
            >
              {movie?.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
