import React from "react";
import { useFetch } from "./useFetch";

export const Advice = () => {
  const API_URL = "https://api.adviceslip.com/advice";
  const [data] = useFetch(API_URL);

  return (
    <section className="container">
      <div className="container__adivice">
        {Object.values(data).map(item => {
          const { id, advice } = item;
          return (
            <div key={id}>
              <h1>Advice #{id}</h1>
              <p>"{advice}"</p>
            </div>
          );
        })}
      </div>
      <button className="container__btn btn"></button>
    </section>
  );
};
function data(data: any) {
  throw new Error("Function not implemented.");
}
