import gasPumpIcon from "../../assets/svg/gasoline-pump.svg";
import dollarIcon from "../../assets/svg/currency-dollar.svg";
import React from "react";


export const CarFuelPriceRow = ({fuel, price, currency}) => (
            <div className="d-grid" style={{
                gridTemplateColumns: "1fr 1fr",
                gridGap:"6px",
                gridColumnStart: 2,
                gridColumnEnd: 3,
            }}>
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
                    >{price} рублей в минуту</div>
                </div>
            </div>
)