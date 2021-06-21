import React, { useState }from 'react';
import axios from "axios";

export default function Confirm(props) {

    const [userEmail, setUserEmail] = useState('');
    const [termsConditions, setTermsConditions] = useState(false);

    const planDuration = props.planDuration;
    const gbVolume = props.gbVolume;
    const upfrontPayment = props.upfrontPayment;
    const creditCardValues = props.creditCardValues;

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value)
    }

    const handleTermsConditionsCheck = (e) => {
        if (!termsConditions) setTermsConditions(true)
        else setTermsConditions(false)
    }

    const handleSubmit = (e) => {
        axios.post('https://httpbin.org/post', {
            planDuration,
            gbVolume,
            upfrontPayment,
            creditCardValues,
            userEmail,
        })
        .then(response => {
            props.nextStep()
            console.log('confirm')
        })
        .catch(err => err)
    }

    const handleGoBack = (e) => {
        e.preventDefault();
        props.prevStep()
    }

    return (
        <div>
            <h1 className="title">Confirm Your Choices</h1>
            <form onSubmit={handleSubmit}>
                <div className="card-details-box">
                    <label className="label">Enter Your Email Address</label>
                    <input
                    className="input" 
                    type="email" 
                    id="email" 
                    name="email"
                    value={userEmail}
                    onChange={e => handleEmailChange(e)}
                    />
                </div>
                
                <div className="terms-conditions">
                    <label for='terms-conditions'>I agree to the 
                        <a href="#"> Terms & Conditions</a>
                    </label>
                    <input
                    className="checkbox"
                    type="checkbox"
                    onChange={handleTermsConditionsCheck}
                    />
                </div>

                <div className="next-btn">
                    <button className="button" onClick={handleGoBack}>Back </button>
                </div>

                {termsConditions ? 

                <div className="confirm-btn">
                    <button
                        type="submit"
                        className="button"
                    >
                    Confirm
                    </button>
                </div> 
                
                : <p>Please confirm the Terms & Conditions before continuing</p>

                }
            </form>
        </div>
    )
}
