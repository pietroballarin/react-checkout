import React, { useState }from "react";
import axios from "axios";
import SuccessScreen from "./SuccessScreen";

export default function Confirm(props) {

    const [userEmail, setUserEmail] = useState("");
    const [termsConditions, setTermsConditions] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [successScreen, setSuccessScreen] = useState(false);

    const planDuration = props.planDuration;
    const gbVolume = props.gbVolume;
    const upfrontPayment = props.upfrontPayment;
    const creditCardValues = props.creditCardValues;

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };

    const handleTermsConditionsCheck = (e) => {
        if (!termsConditions) setTermsConditions(true)
        else setTermsConditions(false);
    };

    const emailValidation = email => {
        var email_regexp = new RegExp("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$", "i");
        return email_regexp.test(email);
    };

    const handleSubmit = (e) => {
        if (emailValidation(userEmail) === false) {
            setEmailErrorMessage("Please provide a valid email address");
        } else { 
            axios.post("https://httpbin.org/post", {
                planDuration,
                gbVolume,
                upfrontPayment,
                creditCardValues,
                userEmail,
            })
            .then(response => {
                setSuccessScreen(true)
            })
            .catch(err => err);
        };
    };

    const handleGoBack = (e) => {
        e.preventDefault();
        props.prevStep();
    };

    return (

        <>

            {successScreen ? <SuccessScreen/> :

            <div>
                <h1 className="title">Confirm Your Choices</h1>
                    <div className="card-details-box email-box">
                        <label className="label" htmlFor="email">Enter Your Email Address</label>
                        <input
                        className="input" 
                        type="email" 
                        id="email" 
                        name="email"
                        value={userEmail}
                        onChange={e => handleEmailChange(e)}
                        />
                    </div>

                    <h3 className="email-error-msg">{emailErrorMessage}</h3>

                    <div className="terms-conditions">
                        <label for="terms-conditions" htmlFor="checkbox">I agree to the 
                            <a href=""> Terms & Conditions</a>
                        </label>
                        <input
                        className="checkbox"
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        onChange={handleTermsConditionsCheck}
                        />
                    </div>

                    <div className="next-btn">
                        <button className="button" onClick={handleGoBack}> Back </button>
                    </div>

                    {termsConditions ? 

                    <div className="confirm-btn">
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="button"
                        >
                        Confirm
                        </button>
                    </div> 
                    
                    : <p>Please accept the Terms & Conditions before continuing</p>
                    }
            </div>
            }
        </>
    )
};