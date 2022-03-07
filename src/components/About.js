import React from "react";
import "./About.css";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function About() {
  const { name } = useParams();
  const url = `https://restcountries.com/v2/name/${name}`;
  const { data: country, error, isPending } = useFetch(url);
  console.log(country);

  return (
    <div className="backtop">
      <div className="container">
        {isPending && <div>Loading ...</div>}
        {error && <div> {error}</div>}
        <Link className="back" to="/">
          {" "}
          Back Home
        </Link>
      </div>

      {country &&
        country.map((country) => {
          return (
            <div key={country.numericCode} className="container abouts">
              <div className="img">
                <img src={country.flag} alt="flag" />
              </div>
              <div className="info">
                <h1 className="title">{country.name}</h1>
                <div className="info__text">
                  <div className="left">
                    <div>
                      <p className="about">Native Name:</p> {country.nativeName}
                    </div>
                    <div>
                      <p className="about">Population:</p> {country.population}
                    </div>
                    <div>
                      <p className="about">Region:</p> {country.region}
                    </div>
                    <div>
                      <p className="about">Sub Region:</p> {country.subregion}
                    </div>
                    <div>
                      <p className="about">Capital:</p> {country.capital}
                    </div>
                  </div>
                  <div className="right">
                    <div>
                      <p className="about">Top Level Domain:</p>{" "}
                      {country.topLevelDomain}
                    </div>
                    <div>
                      <p className="about">Currencies:</p>
                    </div>
                    <div>
                      <p className="about">Languages:</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
