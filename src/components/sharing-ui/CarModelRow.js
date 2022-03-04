import React from "react";


export const CarModelRow = ({ name, image }) => (
    <>
        <div className="car-card-title text-center fw-bold fs-4">{name}</div>
        <div className="row">
            <img
                src={image}
                className="car-card-image img-fluid"
                alt="car"/>
        </div>
    </>
)