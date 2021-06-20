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
        <div>
            <h1>Step2</h1>
            <div>
                <label>
                    Card Number:
                    <input 
                    type='text'
                    value={props.creditCardValues.cardNumber}
                    onChange={e => handleCardChange(e)}
                    id='cardNumber'
                    label='cardNumber'
                    name='cardNumber' 
                    />
                </label>
                <label>
                    cvc:
                    <input 
                    type='number'
                    value={props.creditCardValues.cvc}
                    onChange={e => handleCardChange(e)}
                    id='cvc'
                    label='cvc'
                    name='cvc' 
                    />
                </label>
                <label>
                    date
                    <input     
                    type="date"     
                    name="expDate"       
                    placeholder="Expire Date"
                    value={props.creditCardValues.expDate}     
                    onChange={e => handleCardChange(e)} 
                    required='true'   
                    /> 
                </label>
            </div>
            
            <div>
                <button onClick={handleGoBack}>
                        Back 
                </button>
                <button onClick={handleContinue}>
                        Next »
                </button>
            </div>
            
            
        </div>
    )
}
