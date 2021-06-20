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
            <h1 className="customize-plan-text">Customize Your Plan</h1>
            <div className="plan-duration">
                <button className="button is-rounded" onClick={handlePlanDuration3}>3 Months</button>
                <button className="button is-rounded" onClick={handlePlanDuration6}>6 Months</button>
                <button className="button is-rounded" onClick={handlePlanDuration12}>12 Months</button>
            </div>
            <div className="gb-volume">
                <button className="button is-rounded" onClick={handleGbVolume5}>5GB</button>
                <button className="button is-rounded" onClick={handleGbVolume10}>10GB</button>
                <button className="button is-rounded" onClick={handleGbVolume50}>50GB</button>
            </div>
            <div className="upfront-payment-box">
                <label className="upfront-payment">Upfront Payment (-20%)</label>
                <input
                type="checkbox"
                onChange={handleUpfrontPayments}
                />
            </div>
            <div className="next-btn">
                <button className="button" onClick={handleContinue}>
                    Next 
                </button>
            </div>
        </>
    )
}
