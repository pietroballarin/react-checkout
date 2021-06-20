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

    return (
        <div>
            <h1>test</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="email">Enter your email:</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={userEmail}
                    onChange={e => handleEmailChange(e)}
                    />

                    <label for='terms-conditions'>Terms & Conditions</label>
                    <input
                    type="checkbox"
                    onChange={handleTermsConditionsCheck}
                    />
                </div>

                {termsConditions ? 
                <button
                    type="submit"
                    className="button is-yellow change-settings"
                >
                Confirm
                </button> : <h1>t&c</h1>
                }
            </form>
        </div>
    )
}
