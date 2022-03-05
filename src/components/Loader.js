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
        <div className="d-flex align-items-center justify-content-center" style={
            {
                height: "100%"
            }
        }>
            <div className="spinner-border text-danger center-block" role="status" style={spinnerSizeStyle}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}