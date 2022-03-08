import {Currency} from "./utils/currency";
import {connect} from "react-redux";
import React from "react";
import {OrderStatus} from "./utils/orderStatus";

const parseDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes()

    const monthStr = month.toString().length === 1 ? `0${month}` : month.toString();
    const dayStr = day.toString().length === 1 ? `0${day}` : day.toString();
    const hourStr = hour.toString().length === 1 ? `0${hour}` : hour.toString();
    const minuteStr = minute.toString().length === 1 ? `0${minute}` : minute.toString();

    return {
        year,
        month: monthStr,
        day: dayStr,
        hour: hourStr,
        minute: minuteStr
    };
}


class CarOrderBook extends React.Component {

    getBookStartTimeElement = () => {
        const bookStartDate = parseDate(new Date(this.props.booking.createdAt))
        return (
            <span>{bookStartDate.day + "." + bookStartDate.month + "." + bookStartDate.year +
                " в " + bookStartDate.hour + ":" + bookStartDate.minute}
            </span>
        )
    }

    getBookEndTimeElement = () => {
        const bookEndDate = parseDate(new Date(this.props.booking.deletedAt))
        return (
            <span>{bookEndDate.day + "." + bookEndDate.month + "." + bookEndDate.year +
                " в " + bookEndDate.hour + ":" + bookEndDate.minute}
            </span>
        )
    }

    getDurationElement = () => {
        const durationMinutes = Math.ceil(Math.abs(Date.now() - new Date(this.props.booking.createdAt)) / (1000 * 60));
        const durationHours = Math.floor(durationMinutes / 60);
        const durationDays = Math.floor(durationHours / 24);

        return durationHours === 0 ?
            <span>{durationHours}ч {durationMinutes % 60}м</span>
            :
            <span>{durationDays} дней</span>
    }


    render() {
        return (
            <div className="d-grid gap-3 car-card-order-active">
                <div className="col d-flex justify-content-center fw-bolder">Активный заказ</div>
                <div className="d-grid gap-3">
                    <div className="d-flex justify-content-between fw-bolder">
                        <span>Начало аренды:</span>
                        {this.getBookStartTimeElement()}
                    </div>
                    <div className="d-flex justify-content-between fw-bolder">
                        <span>Продолжительность:</span>
                        {this.getDurationElement()}
                    </div>
                    {
                        this.props.booking.orderStatus === OrderStatus.ENDED?
                    <div className="d-flex justify-content-between fw-bolder">
                        <span>Завершение аренды:</span>
                        {this.getBookEndTimeElement()}
                    </div>
                            :""
                    }

                    <div className="d-flex justify-content-between fw-bolder">
                        <span>Стоимость аренды:</span>
                        <span>{this.props.booking.total_cost} {Currency[this.props.booking.currency]}</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    booking: state.booking
})

export const CarOrder = connect(mapStateToProps, null)(CarOrderBook)