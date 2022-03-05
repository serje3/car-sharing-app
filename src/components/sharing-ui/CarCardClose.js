import xIcon from "../../assets/svg/x-lg.svg";
import React from "react";

export const CarCardClose = (props) => (
    <div className="w-100">
        <img
            className="btn-close car-card-close"
            src={xIcon}
            alt={"close button"}
            onClick={() => props.callback()}
            style={{
                gridColumnStart: 3,
                gridColumnEnd: 4,
            }}
        />
    </div>
)