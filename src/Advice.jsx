import React, { useEffect, useState } from "react";

export const Advice = () => {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(advice => {
        const { slip } = advice;
        setAdvice(slip);
      });
  };

  return (
    <section className="container">
      <div className="container__adivice">
        <h1>Advice #{advice.id}</h1>
        <p>"{advice.advice}"</p>
      </div>
      <button className="container__btn btn" onClick={getAdvice}></button>
    </section>
  );
};
