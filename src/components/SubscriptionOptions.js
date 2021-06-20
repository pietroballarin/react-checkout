import React, { useState } from 'react';


export default function SubscriptionOptions(props) {



const handleContinue = (e) => {
    e.preventDefault();
    props.nextStep();
}

const handlePlanDuration3 = (e) => {
    e.preventDefault();
    props.changePlanDurationTo3()
}

const handlePlanDuration6 = (e) => {
    e.preventDefault();
    props.changePlanDurationTo6()
}

const handlePlanDuration12 = (e) => {
    e.preventDefault();
    props.changePlanDurationTo12()
}

const handleGbVolume5 = (e) => {
    e.preventDefault();
    props.changeGbVolumeTo5()
}

const handleGbVolume10 = (e) => {
    e.preventDefault();
    props.changeGbVolumeTo10()
}

const handleGbVolume50 = (e) => {
    e.preventDefault();
    props.changeGbVolumeTo50()
}

const handleUpfrontPayments = (e) => {
    e.preventDefault();
    props.changeUpfrontPayments()
}

    return (
        <>
            <div>

                <h1>Customize Your Plan</h1>
                <button onClick={handlePlanDuration3}>3 Months</button>
                <button onClick={handlePlanDuration6}>6 Months</button>
                <button onClick={handlePlanDuration12}>12 Months</button>
            </div>
            <div>
                <button onClick={handleGbVolume5}>5GB</button>
                <button onClick={handleGbVolume10}>10GB</button>
                <button onClick={handleGbVolume50}>50GB</button>
            </div>
            <div>
                <input
                type="checkbox"
                onChange={handleUpfrontPayments}
                
                />
            </div>
            <div>
                <button onClick={handleContinue}>
                    Next 
                </button>
            </div>
        </>
    )
}
