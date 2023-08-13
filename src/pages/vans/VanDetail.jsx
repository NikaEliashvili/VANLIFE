import React from "react";
import Loading from "../../componenets/Loading";
import { getVan } from "../../api";
import { Link, useParams, useLocation } from "react-router-dom";

export default function VanDetail() {
  const { id } = useParams();
  const [van, setVan] = React.useState(null);
  const location = useLocation();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadVan() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVan();
  }, [id]);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <h1>There was an error: {error.message}</h1>;
  } else {
    const search = location.state?.search || "";
    const typeVan = location.state?.type || "all";
    return (
      <>
        {van && (
          <div className="van-detail-container" key={van.id}>
            <Link to={`..${search}`} relative="path" className="back-button">
              &larr; <span>Back to {typeVan} vans</span>
            </Link>
            <div className="van-detail">
              <img src={van.imageUrl} />
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
              <h2>{van.name}</h2>
              <p className="van-price">
                <span>${van.price}</span>/day
              </p>
              <p>{van.description}</p>
              <button className="link-button">Rent this van</button>
            </div>
          </div>
        )}
      </>
    );
  }

  // const { id, name, price, description, imageUrl, type } = van;
}
