import React from "react";

const ProductDetails = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={props.image}
        alt=""
        style={{ width: "250px", marginBottom: "1.5rem", width: "100%" }}
      />
      <div
        style={{
          flexWrap: "wrap",
          textAlign: "left",
          color: "#108ee9",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        {props.name}
      </div>
      <div
        style={{
          color: "#f57224",
          fontSize: "1.8rem",
          alignSelf: "flex-start",
        }}
      >
        Rs. {props.price}
      </div>
    </div>
  );
};

export default ProductDetails;
