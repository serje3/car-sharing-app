import React from "react";
import { connect } from "react-redux";
import {closeErrorBook, deleteBook, hideCarInfo, showCarInfo, updateBook} from "../../redux/actions";
import { CarImageRow } from "./CarImageRow";
import { CarFuelPriceRow } from "./CarFuelPriceRow";
import { CarEquipmentRow } from "./CarEquipmentRow";
import { CarBookButton } from "./CarBookButton";
import {CarOrder} from "./CarOrder";
import {CarCardName} from "./CarCardName";
import {CarCardClose} from "./CarCardClose";
import {OrderStatus} from "./utils/orderStatus";


class CarCard extends React.Component {
    constructor(props) {
        super(props);

        this.updateBookInterval = undefined
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.updateBookInterval && this.props.booking.orderStatus === OrderStatus.ACTIVE){
            this.createUpdateBookInterval()
        }
        else if (this.props.booking.orderStatus === OrderStatus.ENDED){
            this.clearUpdateBookInterval()
        }
    }

    componentWillUnmount() {
        this.clearUpdateBookInterval()
        this.props.deleteBook(this.props.booking.orderId)
    }

    createUpdateBookInterval = () => {
        this.updateBookInterval = setInterval(()=>
            this.props.updateBook(this.props.booking.orderId), 5000)
    }

    clearUpdateBookInterval = () => {
        clearInterval(this.updateBookInterval);
        this.updateBookInterval = undefined;
    }

    render() {
        return (
            <div
                ref={this.props.nodeRef}
                className={`container d-grid car-card ${this.props.classNameState}`}
            >
                <div className="d-grid first-cell">
                    <CarCardName name={this.props.info.name}/>
                    <CarCardClose callback={this.props.hideCarInfo}/>
                </div>
                <CarImageRow name={this.props.info.name} image={this.props.info.image}/>
                <div className="d-grid third-cell">
                    {this.props.booking.orderStatus !== OrderStatus.ENDED_CONFIRMED?
                        <CarOrder
                            createdAt={this.props.booking.createdAt}
                            totalCost={this.props.booking.total_cost}
                            currency={this.props.booking.currency}
                        />
                        :
                        <>
                        <CarFuelPriceRow
                            fuel={this.props.info.fuel}
                            price={this.props.info.price}
                            currency={this.props.info.currency}
                            priceUnit={this.props.info.priceUnit}
                        />
                        <CarEquipmentRow
                            equipments={this.props.info.equipments}
                        />
                        </>
                    }
                </div>
                <CarBookButton/>
            </div>
        )
    }


}

const mapStateToProps = state => ({
    info: state.car.info,
    booking: state.booking
})

const mapDispatchToProps = {
    showCarInfo,
    hideCarInfo,
    deleteBook,
    updateBook,
    closeErrorBook
}

export default connect(mapStateToProps, mapDispatchToProps)(CarCard)