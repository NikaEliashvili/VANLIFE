import React from "react";
import Loading from "../../componenets/Loading";
import { getHostVans } from "../../api";
import { Link } from "react-router-dom";
import "../../../server";

export default function HostVans() {
  const [hostVans, setHostVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setHostVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  const hostVansElements = hostVans.map((van) => {
    const { id, name, imageUrl, price } = van;
    return (
      <Link to={id} key={`key-${id}`} className="host-van-link-wrapper">
        <div className="host-van-single" key={id}>
          <img src={imageUrl} alt={`Photo of ${name}`} />
          <div className="host-van-info">
            <h3>{name}</h3>
            <p>${price}/day</p>
          </div>
        </div>
      </Link>
    );
  });

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <h1>There was an error: {error.message}</h1>;
  } else {
    return (
      <section>
        <h1 className="host-vans-title">Your listed vans</h1>
        <div className="host-vans-list">
          {hostVans.length > 0 ? (
            <section>{hostVansElements}</section>
          ) : (
            <Loading />
          )}
        </div>
      </section>
    );
  }
}
