import React from "react";


export const CarImageRow = ({ image }) => (
    <>
        <div className="row">
            <img
                src={image}
                className="car-card-image"
                alt="car"/>
        </div>
    </>
)