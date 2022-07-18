import React from "react";
import { useFetch } from "./useFetch";

export const Advice = () => {
  const url = "https://api.adviceslip.com/advice";
  const { adviceData } = useFetch(url);

  return (
    <section className="container">
      <div className="container__adivice">
        <h1>Advice #{adviceData.id}</h1>
        <p>"{adviceData.advice}"</p>
      </div>
      <button
        className="container__btn btn"
        onClick={() => adviceData}
      ></button>
    </section>
  );
};
