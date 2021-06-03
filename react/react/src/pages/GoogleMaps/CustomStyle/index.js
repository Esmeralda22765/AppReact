import React, { useState } from "react";
import Map from "google-map-react";
import Header from "components/Header";
import AppConfig from "App.config";

import mapStyles from "./mapStyles";
import ExternalInfo from "components/ExternalInfo";

const GoogleMaps = () => {
    const [mapStyle, setMapStyle] = useState([]);

    const updateMapStyle = (style = "") => setMapStyle(mapStyles[style] || []);

    return (
        <>
            <Header title="Mapas" />

            <div className="row w-100">
                <ExternalInfo page="customGoogleMaps" />

                <div className="" role="alert">
                    
                    <p>
                       
                        <a
                            href="https://github.com/Esmeralda22765"
                            _target="blank"
                            className="alert-link"
                        >
                           
                        </a>
                    </p>
                </div>
                <div className="col mb-3 col-12 text-center">
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        <button
                            type="button"
                            className="btn btn-light border-dark"
                            onClick={() => updateMapStyle()}
                        >
                            Default
                        </button>
                        <button
                            type="button"
                            className="btn btn-dark border-dark"
                            onClick={() => updateMapStyle("dark")}
                        >
                            Dark Mode
                        </button>
                        <button
                            type="button"
                            className="btn btn-light border-dark"
                            onClick={() => updateMapStyle("light")}
                        >
                            Light Mode
                        </button>
                    </div>
                </div>
                <div
                    className="col text-center"
                    style={{ width: "100%", height: "550px" }}
                >
                    <Map
                        bootstrapURLKeys={{ key: AppConfig.GOOGLE.GAPI_KEY }}
                        defaultZoom={13}
                        options={{ styles: mapStyle }}
                        defaultCenter={{
                            lat:20.130676,
                            lng: -101.191057
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default GoogleMaps;
