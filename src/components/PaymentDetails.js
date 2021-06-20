import React from 'react';

export default function PaymentDetails(props) {

    const handleContinue = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    const handleGoBack = (e) => {
        e.preventDefault();
        props.prevStep()
    }

    const handleCardChange = (e) => {
        props.handleCardChange(e)
    }
    
    return (
        
        <>
            <h1 className="title">Your Payment Details</h1>
            <div className="card-details-box">
                <div className="field ">
                    <label className="label">
                        Card Number
                        <input 
                        className="input"
                        type='text'
                        value={props.creditCardValues.cardNumber}
                        onChange={e => handleCardChange(e)}
                        id='cardNumber'
                        label='cardNumber'
                        name='cardNumber'
                        maxLength="16"
                        />
                    </label>
                </div>
                <div className="cvc-expdate">
                    <label className="label">
                        CVC
                        <input
                        className="input" 
                        type='string'
                        value={props.creditCardValues.cvc}
                        onChange={e => handleCardChange(e)}
                        id='cvc'
                        label='cvc'
                        name='cvc'
                        maxLength={3}
                        />
                    </label>
                    <label className="label">
                        Expiration Date
                        <input
                        className="input"     
                        type="date"     
                        name="expDate"       
                        placeholder="Expire Date"
                        value={props.creditCardValues.expDate}     
                        onChange={e => handleCardChange(e)} 
                        required='true'   
                        /> 
                    </label>
                </div>
                <div className="back-next-btn">
                    <button className="button" onClick={handleGoBack}>Back</button>
                    <button className="button" onClick={handleContinue}>Next</button>
                </div>
            </div>
        </>
    )
}
