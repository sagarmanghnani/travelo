import React, { useEffect, useState } from "react";
import avatarImage from "../../assets/avatarImage.jpeg";
import Section from './Testimonials.style'
import axios from "axios";

const CustomerFeedback = (props) => {
  const {email, name, ratings, review} = props;
  return (
    <div className="testimonial">
          <p>
            {review}
          </p>
          <div className="info">
            {/* <img src={avatarImage} alt="" /> */}
            <div className="details">
              <h4> {name} </h4>
              <span> {email} </span>
            </div>
          </div>
        </div>
  )
}

export default function Testimonials() {
  const [customerTestimonials, setCustomerTestimonials] = useState([]);

  const getCustomerTestimonials = async () => {
    const data = await axios.get('https://api.npoint.io/6194b5c9adeee45be3ca');
    console.log(data, "data");
    setCustomerTestimonials(data.data.customer_feedback);
  }
  useEffect(() => {
    getCustomerTestimonials()
  }, [])

  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        {customerTestimonials && customerTestimonials.map(testimonial => {
          return <CustomerFeedback {...testimonial} ></CustomerFeedback>
        }) }
        {/* <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>
        </div> */}
      </div>
    </Section>
  );
}


