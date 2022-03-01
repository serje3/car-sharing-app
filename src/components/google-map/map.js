import React, { useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import styles from './map.module.css'
import geoIcon from '../../assets/svg/geo-alt-fill.svg'


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

    const mapRef = useRef(undefined)

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map
    }, [])

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
                { /* Child components, such as markers, info windows, etc. */}
                    <Marker
                        position={defaultCenter}
                        icon={geoIcon}
                    />
            </GoogleMap>
        </div>
    )
}


export { Map }