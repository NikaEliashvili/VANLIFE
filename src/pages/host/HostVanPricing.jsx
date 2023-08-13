import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();
  const { price } = currentVan;
  return (
    <h1 className="host-van-detail-pricing">
      ${price}.00<span>/day</span>{" "}
    </h1>
  );
}
