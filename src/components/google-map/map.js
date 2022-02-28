import React, { useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";
import styles from './map.module.css'


const containerStyle = {
    width: '100%',
    height: '100%'
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

const Map = ({ center }) => {

    const mapRef = useRef(undefined)

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map
    }, [])

    const onUnmount = React.useCallback(function callback() {
        mapRef.current = undefined
    }, [])
    console.log(styles)

    return (
        <div className={styles.container}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </div>
    )
}


export { Map }