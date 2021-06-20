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

    const handleChange = (e) => {
        props.handleChange(e)
    }
    
    return (
        <div>
            <h1>Step2</h1>
            <div>
                <label>
                    CC:
                    <input 
                    type="text"
                    value={props.values}
                    onChange={e => handleChange(e)}
                    id='firstName'
                    label='firstName'
                    name='firstName' 
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
