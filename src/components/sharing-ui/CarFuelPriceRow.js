import gasPumpIcon from "../../assets/svg/gasoline-pump.svg";
import dollarIcon from "../../assets/svg/currency-dollar.svg";
import React from "react";
import {Currency} from "./utils/currency";
import {PriceUnits} from "./utils/priceUnits";


export const CarFuelPriceRow = ({fuel, price, currency, priceUnit}) => (
            <div className="d-grid car-card-fuel-price">
                <div className="d-flex justify-content-start gap-3" style={{
                    minWidth: "110px"
                }}>
                    <img
                        src={gasPumpIcon}
                        className=""
                        alt="fuel percent"
                    />
                    <div
                        className="gap-1 align-self-center fw-bold"
                    >{fuel} км
                    </div>
                </div>
                <div className="d-flex justify-content-start gap-2"
                     style={{
                         minWidth: "235px"
                     }}
                >
                    <img
                        src={dollarIcon}
                        className=""
                        alt={"price"}
                    />
                    <div
                        className="align-self-center fw-bold text-wrap"
                    >{price} {Currency[currency]} в {PriceUnits[priceUnit]}</div>
                </div>
            </div>
)