import React, { useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import styles from './Map.module.css'
import CarMarkers from "./CarMarkers";
import { fetchMarkers } from "../../redux/actions";


const containerStyle = {
    width: '100%',
    height: '100%'
};

const defaultCenter = {
    lat: 55.7522,
    lng: 37.6156
};

const defaultOptions = {
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    fullscreenControl: false
}

const Map = () => {
    const dispatch = useDispatch()
    const mapRef = useRef(undefined)

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map
        dispatch(fetchMarkers())
    }, [dispatch])

    const onUnmount = React.useCallback(function callback() {
        mapRef.current = undefined
    }, [])

    return (
        <div className={styles.container}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                <CarMarkers/>
            </GoogleMap>
        </div>
    )
}


export { Map }