import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";

export default function Country({ coutries, error, isPending }) {
  const id = Math.floor(Math.random() * 1000000000);

  return (
    <div className="cards">
      {coutries &&
        coutries.map((coutries, id) => {
          return (
            <Link key={id} className="link" to={`/country/${coutries.name}`}>
              <div className="card">
                <img className="flag" src={coutries.flag} alt="" />
                <div className="text">
                  <h2 className="name">{coutries.name}</h2>
                  <div>
                    <p className="about">Population:</p> {coutries.population}
                  </div>
                  <div>
                    <p className="about">Region:</p>
                    {coutries.region}
                  </div>
                  <div>
                    <p className="about">Capital:</p>
                    {coutries.capital}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
