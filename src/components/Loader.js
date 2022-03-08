import React from "react";
import { useWindowDimensions } from "../hooks";


export const Loader = () => {
    const { height, width } = useWindowDimensions()
    const coefficient = 0.1
    const computedSize = ((height + width) / 2) * coefficient
    const spinnerSizeStyle = {
        width: `${computedSize}px`,
        height: `${computedSize}px`,
    }
    return (
        <div className="position-absolute d-flex align-items-center justify-content-center" style={
            {
                top:0,
                left: "50%",
                transform:"translateX(-50%)",
                height: "100%",
                zIndex: 1000
            }
        }>
            <div className="spinner-border text-danger center-block" role="status" style={spinnerSizeStyle}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}