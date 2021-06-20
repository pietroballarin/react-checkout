import React from 'react'

export default function PaymentDetails(props) {

    const handleContinue = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    const handleGoBack = (e) => {
        e.preventDefault();
        props.prevStep()
    }

    return (
        <div>
            <h1>Step2</h1>
            <button onClick={handleContinue}>
                    Next »
            </button>
            <button onClick={handleGoBack}>
                    Back 
            </button>
        </div>
    )
}
