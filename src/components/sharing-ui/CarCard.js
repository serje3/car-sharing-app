import React from "react";
import { connect } from "react-redux";
import { hideCarInfo, showCarInfo } from "../../redux/actions";
import { CarImageRow } from "./CarImageRow";
import { CarFuelPriceRow } from "./CarFuelPriceRow";
import { CarEquipmentRow } from "./CarEquipmentRow";
import { CarRentButton } from "./CarRentButton";
import {CarOrderActive} from "./CarOrderActive";
import {CarCardName} from "./CarCardName";
import {CarCardClose} from "./CarCardClose";


const CarCard = (props) => {
    return (
        <div
            ref={props.nodeRef}
            className={`container d-grid car-card ${props.classNameState}`}
        >
            <div className="d-grid first-cell">
                <CarCardName name={props.info.name}/>
                <CarCardClose callback={props.hideCarInfo}/>
            </div>
            <CarImageRow name={props.info.name} image={props.info.image}/>
            <div className="d-grid third-cell">
                <CarFuelPriceRow
                    fuel={props.info.fuel}
                    price={props.info.price}
                    currency={props.info.currency}
                />

                {/*<CarEquipmentRow*/}
                {/*    equipment={props.info.equipment}*/}
                {/*/>*/}
                <CarOrderActive/>
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