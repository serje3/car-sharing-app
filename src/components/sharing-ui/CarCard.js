import React from "react";
import { connect } from "react-redux";
import { hideCarInfo, showCarInfo } from "../../redux/actions";
import xIcon from "../../assets/svg/x-lg.svg"
import { CarModelRow } from "./CarModelRow";
import { CarFuelPriceRow } from "./CarFuelPriceRow";
import { CarEquipmentRow } from "./CarEquipmentRow";
import { CarRentButton } from "./CarRentButton";


const CarCard = (props) => {
    return (
        <div ref={props.nodeRef} className={`container car-card ${props.classNameState}`}>
            {/*Close button start*/}
            <img
                className="btn-close car-card-close"
                src={xIcon}
                alt={"close button"}
                onClick={() => props.hideCarInfo()}
            />
            {/*Close button end*/}

            <CarModelRow name={props.info.name} image={props.info.image}/>
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
                <CarRentButton/>
            </div>

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