import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  const { imageUrl, name } = currentVan;
  return (
    <div className="host-van-detail-photo">
      <img src={imageUrl} alt={`Image Of ${name}`} />
    </div>
  );
}
