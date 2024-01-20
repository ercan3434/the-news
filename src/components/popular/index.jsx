"use client";

// * React
import React from "react";

// * Next Js Components
import Link from "next/link";
import Image from "next/image";

// * Styles
import "./styles.css";

// * Components
import Heading from "@/components/heading";

// * Slick slider libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popular = ({ popular, title }) => {
  // Slick slider settings
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: title == "Popular" ? 2 : 1,
    speed: 500,
    rows: 10,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 10,
        },
      },
    ],
  };

  return (
    <div className={`container-category`}>
      <section className={`popular item-category`}>
        {/* Category title */}
        <Heading title={title} />
        {/* Category Content */}
        <div className={`content`}>
          {/* Slick slider */}
          {
            <Slider {...settings}>
              {popular?.map((val) => {
                return (
                  <>
                    <div className="items">
                      <div className="box shadow">
                        {/* image container */}
                        <div className="images row">
                          <div className="img">
                            <Image
                              fill
                              style={{ objectFit: "cover" }}
                              src={val.promoImage.url}
                              alt={title}
                              priority={true}
                            />
                          </div>
                        </div>
                        {/* text container */}
                        <Link href={`/single-new/${val.id}`} title={title}>
                          <div className="text row">
                            <h1 className="title">
                              {val.description?.slice(0, 40)}...
                            </h1>
                            <div className="date">
                              <i class="fas fa-calendar-days"></i>
                              <label style={{ cursor: "pointer" }}>
                                {val.shortDateFirstPublished}
                              </label>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
            </Slider>
          }
        </div>
      </section>
    </div>
  );
};

// * Export
export default Popular;
