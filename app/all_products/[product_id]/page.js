import BestSellerProducts from "components/BestSellerProducts";
import OurVideos from "components/OurVideos";
import ProductDetails from "components/ProductDetails";
import Reviews from "components/Reviews";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h2>Product Details for ID: {params.product_id}</h2>
      <ProductDetails />
      {/* -----------------Reviews------------------------- */}
      <Reviews />
      {/* ----------------------Related Products--------------------------- */}
      <BestSellerProducts title="Explore Related Products" />
      {/* ----------------------Hair Products Reviews--------------------------- */}
      <OurVideos />
    </div>
  );
};

export default page;
