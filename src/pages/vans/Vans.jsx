import React from "react";
import Loading from "../../componenets/Loading";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

import "../../../server";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const filterType = searchParams.get("type");

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  const filterVans = filterType
    ? vans.filter((van) => van.type.toLowerCase() === filterType)
    : vans;

  const vanElements = filterVans.map((van) => {
    const { id, name, price, imageUrl, type } = van;
    return (
      <div key={id} className="van">
        <Link
          to={id}
          state={{ search: `?${searchParams.toString()}`, type: filterType }}
        >
          <img src={imageUrl} alt={name} className="van-image" />
          <div className="van-info">
            <span>{name} </span>
            <span className="van-info-price">
              <span>${price}</span>
              <span className="van-info-price-day">/day</span>
            </span>
          </div>
          <i className={`van-type ${type} selected`}>{type}</i>
        </Link>
      </div>
    );
  });

  function handleSearchParams(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="vans">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleSearchParams("type", "simple")}
          className={`van-type simple 
          ${filterType === "simple" && "selected"}`}
        >
          simple
        </button>
        <button
          onClick={() => handleSearchParams("type", "luxury")}
          className={`van-type luxury 
          ${filterType === "luxury" && "selected"}`}
        >
          luxury
        </button>
        <button
          onClick={() => handleSearchParams("type", "rugged")}
          className={`van-type rugged 
          ${filterType === "rugged" && "selected"}`}
        >
          rugged
        </button>
        {filterType && (
          <button
            onClick={() => handleSearchParams("type", null)}
            className="van-type clear-filters"
          >
            Clear Filter
          </button>
        )}
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <h1>There was an error: {error.message}</h1>
      ) : (
        <div className="vans-list">{vanElements}</div>
      )}
    </div>
  );
}
