import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { Map } from "./components/google-map";


const API_KEY = process.env.REACT_APP_API_KEY

const defaultCenter = {
    lat: 55.7522,
    lng: 37.6156
};

const libraries = ['places']

function App() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries
    })


    return (
        <div className="wrapper">
            {isLoaded ? <Map center={defaultCenter}/> : <h2>Loading</h2>}
        </div>
    );
}

export default App;
