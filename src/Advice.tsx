import React from "react";
import { useFetch } from "./useFetch";

export const Advice = () => {
  const url = "https://api.adviceslip.com/advice";
  const { adviceData } = useFetch(url);

  const getData = () => {
    alert("si");
  };

  return (
    <section className="container">
      <div className="container__adivice">
        {adviceData.map((item: { id: any; advice: any; index: any }) => {
          const { id, advice, index } = item;
          return (
            <div key={index}>
              <h1>Advice #{id}</h1>
              <p>"{advice}"</p>
            </div>
          );
        })}
      </div>
      <button
        className="container__btn btn"
        onClick={() => console.log(adviceData)}
      ></button>
    </section>
  );
};
