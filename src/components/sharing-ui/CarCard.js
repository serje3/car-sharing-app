import React from "react";
import { connect } from "react-redux";
import { hideCarInfo, showCarInfo } from "../../redux/actions";
import xIcon from "../../assets/svg/x-lg.svg"
import { CarImageRow } from "./CarImageRow";
import { CarFuelPriceRow } from "./CarFuelPriceRow";
import { CarEquipmentRow } from "./CarEquipmentRow";
import { CarRentButton } from "./CarRentButton";


const CarCard = (props) => {
    return (
        <div
            ref={props.nodeRef}
            className={`container d-grid car-card ${props.classNameState}`}
            style={{
                gridTemplateRows: "0.2fr 1fr 1fr 1fr",
            }}
        >
            <div className="d-grid"
                 style={{
                     gridTemplateColumns: "1fr 2fr 1fr",
                     maxHeight: "32px"
                 }}
            >
                <div
                    className="car-card-title text-center fw-bold fs-4"
                    style={{
                        gridColumnStart: 2,
                    }}
                >{props.info.name}</div>
                {/*Close button start*/}
                <div className="w-100">
                    <img
                        className="btn-close car-card-close"
                        src={xIcon}
                        alt={"close button"}
                        onClick={() => props.hideCarInfo()}
                        style={{
                            gridColumnStart: 3,
                            gridColumnEnd: 4,
                        }}
                    />
                </div>
                {/*Close button end*/}
            </div>
            <CarImageRow name={props.info.name} image={props.info.image}/>
            <div className="d-grid" style={{
                gridTemplateColumns: "1fr 2fr 1fr",
                gridRowGap: "13%",
            }}>
                <CarFuelPriceRow
                    fuel={props.info.fuel}
                    price={props.info.price}
                    currency={props.info.currency}
                />

                <CarEquipmentRow
                    equipment={props.info.equipment}
                />
            </div>
            <CarRentButton/>
        </div>
    )
}

const mapStateToProps = state => ({
    info: state.car.info,
})

const mapDispatchToProps = {
    showCarInfo,
    hideCarInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(CarCard)