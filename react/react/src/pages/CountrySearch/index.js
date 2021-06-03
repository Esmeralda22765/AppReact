import React, { useState, useRef, useEffect } from "react";
import Header from "components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autocomplete from "components/AutoComplete";
import CountriesList from "resources/data/countries-list.json";
import "./index.css";
import ExternalInfo from "components/ExternalInfo";

const AutocompletePage = () => {
    const [country, setcountry] = useState("");
    return (
        <>
            <Header title="Búsqueda" />

            <ExternalInfo page="autocomplete" />

            <div className="row">
                <div className="col text-center">
                    <h2></h2>
                    <p>Búsqueda de paises</p>
                    <div className="d-flex justify-content-center mb-3">
                        <div className="search-bar-container">
                            <Autocomplete
                                data={CountriesList}
                                onSelect={country => setcountry(country)}
                            />

                            <FontAwesomeIcon
                                icon="search"
                                className="search-bar-icon"
                            />
                        </div>
                    </div>

                    {country && (
                        <pre className="text-left">
                            {JSON.stringify(country, 0, 2)}
                        </pre>
                    )}
                </div>
            </div>
        </>
    );
};

export default AutocompletePage;
