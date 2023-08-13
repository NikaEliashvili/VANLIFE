import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { currentVan } = useOutletContext();
  const { id, name, description, imageUrl, price, type } = currentVan;
  return (
    <div className="host-van-detail-info">
      <h3>
        Name: <span>{name}</span>
      </h3>
      <h3>
        Category: <span>{type}</span>
      </h3>
      <h3>
        Description: <span>{description}</span>
      </h3>
      <h3>
        Visibility: <span>Public</span>
      </h3>
    </div>
  );
}
