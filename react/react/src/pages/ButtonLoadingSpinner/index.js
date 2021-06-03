import React, { useState } from "react";
import Header from "components/Header";
import useButtonLoader from "hooks/useButtonLoader";
import ExternalInfo from "components/ExternalInfo";
import AppConfig from "App.config";
import useFullPageLoader from "hooks/useFullPageLoader";

const ButtonLoadingSpinner = () => {
  //Method 1
  const [isLoading, setLoading] = useState(false);

  //Method 2
  const [subscribeButtonElement, setSubscribeLoading] = useButtonLoader(
    "Spinner 2",
    "Cargando 2..."
  );
  const [subscribe3ButtonElement, setSubscribe3Loading] = useButtonLoader(
   
  );

  const [loader, showLoader, hideLoader] = useFullPageLoader();

  const subscribe = () => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setLoading(false);
      });
  };

  const subscribe2 = () => {
    setSubscribeLoading(true);

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setSubscribeLoading(false);
      });
  };

  const subscribe3 = () => {
    setSubscribe3Loading(true);

    fetch("")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setSubscribe3Loading(false);
      });
  };

  const fetchData = () => {
    showLoader();

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        hideLoader();
        console.log(json);
      });
  };

  const throwKnownError = () => {
    throw new Error("This is an error from sentry tutorial");
  };

  return (
    <>
      <Header title="Spinners" />

      <div className="row w-100">
        <div className="col text-center">
          <h2>Botones spinners</h2>
          <ExternalInfo
            code={AppConfig.links.buttonLoaderHooks.code}
            tutorial={AppConfig.links.buttonLoaderHooks.tutorial}
          />
        
          <p>
            {!isLoading && (
              <button className="btn btn-danger mr-2" onClick={subscribe}>
                Subscribirse
              </button>
            )}
            {isLoading && (
              <button className="btn btn-danger mr-2" disabled>
                <i className="fas fa-spinner fa-spin"></i>
              </button>
            )}
          </p>

          <p>
            <button
              className="btn btn-danger mr-2"
              onClick={subscribe2}
              ref={subscribeButtonElement}
            >
              
            </button>
            <button
              className="btn btn-danger mr-2"
              onClick={subscribe3}
              ref={subscribe3ButtonElement}
            >
             
            </button>
          </p>
        </div>
      </div>
      <hr />
      <div className="row w-100 mt-5">
        <div className="col text-center">
          <h2>Spinner animación</h2>
          

          <p>
            <button className="btn btn-primary mr-2" onClick={fetchData}>
              animación
            </button>
          </p>
        </div>
      </div>

      <div className="row w-100 mt-5">
        <div className="col text-center">
          
          <p>
          
          </p>
        </div>
      </div>
      {loader}
    </>
  );
};

export default ButtonLoadingSpinner;
