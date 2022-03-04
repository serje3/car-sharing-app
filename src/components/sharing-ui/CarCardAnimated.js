import { useRef } from "react";
import { Transition } from "react-transition-group";
import { connect } from "react-redux";
import CarCard from "./CarCard";


const CarCardAnimated = (props) => {
    const carCard = useRef()

    return (
        <Transition
            in={props.toggle}
            timeout={1000}
            nodeRef={carCard}
        >
            {state => (
                <CarCard
                    nodeRef={carCard}
                    classNameState={state}
                />
            )}
        </Transition>
    )
}

const mapStateToProps = state => ({
    toggle: state.car.toggle
})

export default connect(mapStateToProps, null)(CarCardAnimated)