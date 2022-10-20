import React, { useRef, useState } from "react";
import "./TvShowsComponent.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Anime from "../../Data/Anime";
import CrimeTvShows from "../../Data/CrimeTvShows";
import InternationalTvDramas from "../../Data/InternationalTvDramas";
import UsTvShows from "../../Data/UsTvShows";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export default function TvShowsComponent() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="input">
        <input
          className="form-control me-2 forms"
          type="search"
          placeholder="Search Your TV Shows Here"
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
        {Anime.filter((movie) => movie.title.toLowerCase().includes(query)).map(
          (movie) => (
            <SwiperSlide key={movie.id}>
              <img className="listImg" src={movie.img} alt="" />
              <p
                className="movieTitle"
                style={{ textAlign: "center", color: "whitesmoke" }}
              >
                {movie.title}
              </p>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <h2 className="genre-title">Crime TV Shows</h2>

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
        {CrimeTvShows.filter((movie) =>
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
      <h2 className="genre-title">Suspenseful TV Shows</h2>

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
        {InternationalTvDramas.filter((movie) =>
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
      <h2 className="genre-title">Psychological TV Shows</h2>

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
        {UsTvShows.filter((movie) =>
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
        {Anime.filter((movie) => movie.title.toLowerCase().includes(query)).map(
          (movie) => (
            <SwiperSlide key={movie.id}>
              <img className="listImg" src={movie.img} alt="" />
              <p
                className="movieTitle"
                style={{ textAlign: "center", color: "whitesmoke" }}
              >
                {movie.title}
              </p>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <h2 className="genre-title-mobile">Crime TV Shows</h2>

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
        {CrimeTvShows.filter((movie) =>
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
      <h2 className="genre-title-mobile">Suspenseful TV Shows</h2>

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
        {InternationalTvDramas.filter((movie) =>
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
      <h2 className="genre-title-mobile">Psychological TV Shows</h2>

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
        {UsTvShows.filter((movie) =>
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
