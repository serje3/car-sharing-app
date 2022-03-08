import React from "react";
import { CarSharingUI } from "./sharing-ui";
import { Map } from "./google-map";
import {Loader} from "./Loader";
import {connect} from "react-redux";

const CarSharing = (props) => {
    return (
        <>
            <Map/>
            <CarSharingUI/>
            {props.loading?
                <Loader/>
                :
                ""
            }
        </>
    )
}

const mapStateToProps = state => ({
    loading: state.app.loading
})

export default connect(mapStateToProps,null)(CarSharing)