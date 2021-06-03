import React, { useState } from "react";
import Header from "components/Header";
import AppConfig from "App.config";
import ExternalInfo from "components/ExternalInfo";

const OTPBox = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
            <Header title="OTP box usando Hooks" />

            <ExternalInfo page="otpBox" />

            <div className="row">
                <div className="col text-center">
                    <h2>Código de verificación</h2>
                   

                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                    <p>Código a insertar - {otp.join("")}</p>
                    <p>
                        <button
                            className="btn btn-secondary mr-2"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Limpiar
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={e =>
                                alert("Código insertado " + otp.join(""))
                            }
                        >
                            Verificando OTP
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
};

export default OTPBox;
