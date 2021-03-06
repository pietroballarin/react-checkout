import React, { useState } from "react";

export default function PaymentDetails(props) {


    const [invalidCardMessage, setInvalidCardMessage] = useState("");

    const handleContinue = (e) => {
        if (props.creditCardValues.cardNumber.length !== 16 ||
            props.creditCardValues.cvc.length !== 3 ||
            props.creditCardValues.expMonth.length !== 2 ||
            props.creditCardValues.expYear.length !== 2 ||
            props.creditCardValues.expMonth > 12) {
            setInvalidCardMessage("Please provide a valid credit card");
        } else { 
            e.preventDefault();
            props.nextStep();
        };
    };

    const handleGoBack = (e) => {
        e.preventDefault();
        props.prevStep();
    };

    const handleCardChange = (e) => {
        props.handleCardChange(e);
    };
    
    return (
        
        <>
            <h1 className="title">Your Payment Details</h1>

            <div className="card-details-box">
                <div className="field">
                    <label className="label" htmlFor="cardNumber">
                        Card Number
                        <input 
                        className="input"
                        type="number"
                        value={props.creditCardValues.cardNumber}
                        onChange={e => handleCardChange(e)}
                        id="cardNumber"
                        label="cardNumber"
                        name="cardNumber"
                        placeholder="1234567890123456"
                        />
                    </label>
                </div>
                <div>
                    <label className="label" htmlFor="cvc">
                        CVC
                        <input
                        className="input" 
                        type="number"
                        value={props.creditCardValues.cvc}
                        onChange={e => handleCardChange(e)}
                        id="cvc"
                        label="cvc"
                        name="cvc"
                        placeholder="123"
                        />
                    </label>
                    <h3 className="label">Expiration Date</h3>
                    <div className="label exp-date">
                        <label htmlFor="expMonth">
                            <input
                            className="input exp-date-left"     
                            type="number"     
                            name="expMonth"
                            id="expMonth"       
                            value={props.creditCardValues.expMonth}     
                            onChange={e => handleCardChange(e)}
                            placeholder="MM"
                            /> 
                        </label>
                        <label className="label" htmlFor="expYear">
                            <input
                            className="input exp-date-right"     
                            type="number"     
                            name="expYear"
                            id="expYear"       
                            value={props.creditCardValues.expYear}     
                            onChange={e => handleCardChange(e)}
                            placeholder="YY"
                            /> 
                        </label>
                    </div>
                </div>

                <h3 className="card-error-msg">{invalidCardMessage}</h3>

                <div className="back-next-btn">
                    <button className="button" onClick={handleGoBack}>Back</button>
                    <button className="button" onClick={handleContinue}>Next</button>
                </div>
        
            </div>
        </>
    )
};