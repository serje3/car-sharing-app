import React from "react";
import { Marker } from "@react-google-maps/api";
import { connect } from "react-redux";
import geoIcon from '../../assets/svg/geo-alt-fill.svg'
import { fetchCar, showCarInfo } from "../../redux/actions";


const CarMarkers = (props) => {
    const markers = props.markers
    if (!markers.length) {
        return <></>
    }

    return markers.map(marker => {
        const position = {
            lat: marker.latitude,
            lng: marker.longitude
        }
        return <div
            key={marker.id}
            className="ignore-onclickoutside"
            style={{
                width: "30px",
                height: "30px"
            }}>
            <Marker
                position={position}
                icon={geoIcon}
                onClick={(event) => {
                    props.fetchCar()
                    console.log(event.domEvent.target)
                    event.domEvent.target.classList.add("ignore-onclickoutside");
                    if (!props.toggle) {
                        props.showCarInfo()
                    }
                }
                }
            />
        </div>
    })
}

const mapStateToProps = state => ({
    markers: state.map.markers
})

const mapDispatchToProps = {
    fetchCar,
    showCarInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(CarMarkers)