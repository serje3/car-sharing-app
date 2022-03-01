import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { Map } from "./components/google-map";
import { Loader } from "./components/Loader";


const API_KEY = process.env.REACT_APP_API_KEY

function App() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    })


    return (
        <div className="wrapper">
            {isLoaded ?

                <Map />
                :
                <Loader/>
            }
        </div>
    );
}

export default App;
