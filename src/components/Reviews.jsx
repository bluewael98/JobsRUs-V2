"use client";
import React, { useState, useEffect } from "react";
import Flickity from "react-flickity-component";
import "./flickity.css";
import reviewsData from "./reviewsdata.json";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.app.outscraper.com/requests/ab-18f57175-1ca0-4ee5-bbc4-bed5ae0a65d0"
  //     )
  //     .then((response) => {
  //       const data = response.data.data[0].reviews_data;
  //       setReviews(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // https://api.app.outscraper.com/maps/reviews-v2?query=ChIJAQCsfRC8EmsRrvtItQ_le8A&reviewsLimit=20 && Headers: X-API-KEY:Z29vZ2xlLW9hdXRoMnwxMDU4NDIyNDIxNTE5NTU3Nzc5MjJ8NjNhMjVlNTdlZQ

  useEffect(() => {
    // Set the reviews data from the imported JSON file
    setReviews(reviewsData);
  }, []);

  const renderStars = (rating) => {
    switch (rating) {
      case 1:
        return <span>★</span>;
      case 2:
        return <span>★★</span>;
      case 3:
        return <span>★★★</span>;
      case 4:
        return <span>★★★★</span>;
      case 5:
        return <span>★★★★★</span>;
      default:
        return null;
    }
  };
  const options = {
    wrapAround: true,
    fullscreen: true,
    contain: true,
    prevNextButtons: true,
    pageDots: false,
    autoPlay: true,
    selectedAttraction: 0.01,
    friction: 0.15,
  };

  return (
    <section className="my-[200px]">
      <div className="max-w-2/3 flex flex-col justify-center items-center  sm:text-4xl text-3xl text-center font-bold text-primary">
        <h1>We&apos;re all about openess and honesty..</h1>
        <h1>so here&apos;s our live google reviews, from good to bad.</h1>
      </div>

      <Flickity
        className="carousel"
        elementType="div"
        disableImagesLoaded={true}
        reloadOnUpdate
        static
        cellClassName="carousel-cell w-screen md:w-[1000px] h-[600px] justify-center flex items-center  text-2xl text-alt2 px-5"
        options={options}
      >
        {reviews.map((review) => (
          <div
            key={review.review_id}
            className="carousel cell w-screen md:w-[1000px] h-[600px] justify-center flex items-center  text-2xl text-alt2 px-5"
          >
            <div className="p-5 flex justify-center items-center flex-col gap-10">
              <h3 className="text-2xl font-semibold">{review.author_title}</h3>
              <img crossOrigin="anonymous" src={review.author_image} alt="" />
              <p className="max-w-[600px] text-center">{review.review_text}</p>
              <div className="text-[#fbbc04] flex items-center justify-center gap-2">
                <img
                  src="/google.jpg"
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                {renderStars(review.review_rating)}
              </div>
            </div>
          </div>
        ))}
      </Flickity>
    </section>
  );
}

export default Reviews;
