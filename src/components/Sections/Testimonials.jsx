import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

const testimonialsData = [
  {
    id: 1,
    content:
        "Rahul had great skills in flutter frontend design and ",
    authorImage: "images/clients/prof.jpg",
    authorName: "Sandeep Kumar",
    authorStatus: "Senior at Bright Infonet",
  },
  {
    id: 2,
    content:
       "I enjoying working with him, he can find optimal solution to any problem.",
       authorImage: "images/clients/prof.jpg",
    authorName: "Vinod Bhat",
    authorStatus: "colleague",
  },
 
];

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-wrapper">
      <Slider {...settings} className="padding-slider">
        {testimonialsData.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
