import React from "react";
import {connect} from "react-redux";
import {bookCar, confirmEndedBook, deleteBook} from "../../redux/actions";
import {OrderStatus} from "./utils/orderStatus";

class CarBookBtn extends React.Component{

    submitHandler = event => {
        event.preventDefault();
        const btn = event.target.children[0]
        btn.disabled = true
        const vehicleId = this.props.info.id;
        switch (this.props.orderStatus) {
            case OrderStatus.ACTIVE:
                this.props.deleteBook(this.props.orderId)
                break
            case OrderStatus.ENDED:
                this.props.confirmEndedBook()
                break
            default:
                this.props.bookCar(vehicleId)
                break
        }
        setTimeout(()=>btn.disabled = false, 1000)
    }

    render() {
        return (
            <form
                className="d-flex justify-content-center align-self-end"
                onSubmit={this.submitHandler}
            >
                <button type="submit" className="btn btn-lg row car-card-rent-button">
                    {
                        this.props.orderStatus === OrderStatus.ACTIVE?
                        "Завершить аренду"
                        : this.props.orderStatus === OrderStatus.ENDED?
                        "До встречи снова"
                        :
                        "Начать аренду"
                    }
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    info: state.car.info,
    orderId: state.booking.orderId,
    orderStatus: state.booking.orderStatus
})

const mapDispatchToProps = {
    bookCar,
    deleteBook,
    confirmEndedBook
}

export const CarBookButton = connect(mapStateToProps,mapDispatchToProps)(CarBookBtn)