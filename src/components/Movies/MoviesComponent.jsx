import React, { useRef, useState } from "react";
import "./MoviesComponent.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import IndianMovies from "../../Data/MoviesData";
import SuspenseMovies from "../../Data/Suspense";
import CrimeMovies from "../../Data/CrimeMovies";
import PsychologicalMovies from "../../Data/Psychological";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export default function MoviesComponent() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="input">
        <input
          className="form-control me-2 forms"
          type="search"
          placeholder="Search Your Movies Here"
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <h2 className="genre-title">Made in India</h2>

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
        {IndianMovies.filter((movie) =>
          movie.title.toLowerCase().includes(query)
        ).map((movie) => (
          <SwiperSlide key={movie.id}>
            <img className="listImg" src={movie.img} alt="" />
            <p
              className="movieTitle"
              style={{ textAlign: "center", color: "whitesmoke" }}
            >
              {movie.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="genre-title">Crime Movies</h2>

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
        {CrimeMovies.filter((movie) =>
          movie.title.toLowerCase().includes(query)
        )
          .filter((movie) => movie.title.toLowerCase().includes(query))
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <img className="listImg" src={movie.img} alt="" />
              <p
                className="movieTitle"
                style={{ textAlign: "center", color: "whitesmoke" }}
              >
                {movie.title}
              </p>
            </SwiperSlide>
          ))}
      </Swiper>
      <h2 className="genre-title">Suspenseful Movies</h2>

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
        {SuspenseMovies.filter((movie) =>
          movie.title.toLowerCase().includes(query)
        ).map((movie) => (
          <SwiperSlide key={movie.id}>
            <img className="listImg" src={movie.img} alt="" />
            <p
              className="movieTitle"
              style={{ textAlign: "center", color: "whitesmoke" }}
            >
              {movie.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="genre-title">Psychological Movies</h2>

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
        {PsychologicalMovies.filter((movie) =>
          movie.title.toLowerCase().includes(query)
        ).map((movie) => (
          <SwiperSlide key={movie.id}>
            <img className="listImg" src={movie.img} alt="" />
            <p
              className="movieTitle"
              style={{ textAlign: "center", color: "whitesmoke" }}
            >
              {movie.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* mobile view */}
      <h2 className="genre-title-mobile">Made in India</h2>

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
        {IndianMovies.filter((movie) =>
          movie.title.toLowerCase().includes(query)
        ).map((movie) => (
          <SwiperSlide key={movie.id}>
            <img className="listImg" src={movie.img} alt="" />
            <p
              className="movieTitle"
              style={{ textAlign: "center", color: "whitesmoke" }}
            >
              {movie.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="genre-title-mobile">Crime Movies</h2>

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
        {CrimeMovies.filter((movie) =>
          movie.title.toLowerCase().includes(query)
        ).map((movie) => (
          <SwiperSlide key={movie.id}>
            <img className="listImg" src={movie.img} alt="" />
            <p
              className="movieTitle"
              style={{ textAlign: "center", color: "whitesmoke" }}
            >
              {movie.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="genre-title-mobile">Suspenseful Movies</h2>

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
        {SuspenseMovies.filter((movie) =>
          movie.title.toLowerCase().includes(query)
        ).map((movie) => (
          <SwiperSlide key={movie.id}>
            <img className="listImg" src={movie.img} alt="" />
            <p
              className="movieTitle"
              style={{ textAlign: "center", color: "whitesmoke" }}
            >
              {movie.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="genre-title-mobile">Psychological Movies</h2>

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
        {PsychologicalMovies.filter((movie) =>
          movie.title.toLowerCase().includes(query)
        ).map((movie) => (
          <SwiperSlide key={movie.id}>
            <img className="listImg" src={movie.img} alt="" />
            <p
              className="movieTitle"
              style={{ textAlign: "center", color: "whitesmoke" }}
            >
              {movie.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
