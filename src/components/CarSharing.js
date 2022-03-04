import React from "react";
import { CarSharingUI } from "./sharing-ui";
import { Map } from "./google-map";

export const CarSharing = () => {
    return (
        <>
            <Map/>
            <CarSharingUI/>
        </>
    )
}