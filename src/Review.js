import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // we set our default 0 because our array is 0 based to show the first person
  const [index, setIndex] = useState(0);
  // console.log(people); people is our array

  // we are getting all our properites from our people array
  const { name, job, image, text } = people[index];

  // to not get errors and to go forward and backword
  const checkNumber = (number) => {
    // if our number is bigger than the last index of our people
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };
  const nextPerson = () => {
    setIndex((index) => {
      // to see the next person
      let newIndex = index + 1;

      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      // to see the next person
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // Random person
  const randomPerson = () => {
    // console.log(Math.random());
    let randomNumber = Math.floor(Math.random() * people.length);
    // console.log(randomNumber);

    // TO NOT REPEAT THE SAME INDEX
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <div>
        <h4 className="author"> {name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          Suprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
