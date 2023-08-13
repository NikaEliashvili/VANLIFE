import React from "react";
import { getVan } from "../../api";
import Loading from "../../componenets/Loading";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

export default function HostVanDetail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    async function loadVan() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setCurrentVan(data);
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
    return (
      <section>
        <Link to=".." relative="path" className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>
        {currentVan && (
          <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
              <img src={currentVan.imageUrl} />
              <div className="host-van-detail-info-text">
                <i className={`van-type van-type-${currentVan.type}`}>
                  {currentVan.type}
                </i>
                <h3>{currentVan.name}</h3>
                <h4>${currentVan.price}/day</h4>
              </div>
            </div>
            <nav className="host-van-detail-nav">
              <NavLink
                to="."
                end
                className={({ isActive }) => (isActive ? "isActive" : null)}
              >
                Details
              </NavLink>
              <NavLink
                to="pricing"
                className={({ isActive }) => (isActive ? "isActive" : null)}
              >
                Pricing
              </NavLink>
              <NavLink
                to="photos"
                className={({ isActive }) => (isActive ? "isActive" : null)}
              >
                Photos
              </NavLink>
            </nav>
            <Outlet context={{ currentVan }} />
          </div>
        )}
      </section>
    );
  }
}
