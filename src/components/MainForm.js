import React, { useState } from 'react';
import PaymentDetails from './PaymentDetails';
import SubscriptionOptions from './SubscriptionOptions';
import Confirm from './Confirm';
import PriceOverview from './PriceOverview';

export default function MainForm() {

    const [step, setStep] = useState(1);

    //step1

    const [planDuration, setPlanDuration] = useState(12);
    const [gbVolume, setGbVolume] = useState(5);
    const [upfrontPayment, setUpfrontPayment] = useState(false);

    //step2
    
    const [creditCardValues, setCreditCardValues] = useState({cardNumber:'', cvc:'', expMonth:'', expYear: ''});

    // Plan Duration
    const changePlanDurationTo3 = () => {
        setPlanDuration(3);
    };

    const changePlanDurationTo6 = () => {
        setPlanDuration(6);
    };

    const changePlanDurationTo12 = () => {
        setPlanDuration(12);
    };

    // Cloud Gb Volume
    const changeGbVolumeTo5 = () => {
        setGbVolume(5);
    };

    const changeGbVolumeTo10 = () => {
        setGbVolume(10);
    };

    const changeGbVolumeTo50 = () => {
        setGbVolume(50);
    };

    // Upfront payments yes/no
    const changeUpfrontPaymentTrue = () => {
        setUpfrontPayment(true);
    };

    const changeUpfrontPaymentFalse = () => {
        setUpfrontPayment(false);
    };

    //Credit card details 
    const handleCardChange = event => {
        setCreditCardValues({...creditCardValues, [event.target.name]: event.target.value});
    };

    // handles next and back buttons
    const nextStep = () => {
        setStep(step +1);
    };

    const prevStep = () => {
        setStep(step -1);
    };

    const showStep = () => {

        if (step === 1) {
            return (<SubscriptionOptions
                nextStep = {nextStep}
                changePlanDurationTo3={changePlanDurationTo3}
                changePlanDurationTo6={changePlanDurationTo6} 
                changePlanDurationTo12={changePlanDurationTo12}  
                changeGbVolumeTo5={changeGbVolumeTo5}
                changeGbVolumeTo10={changeGbVolumeTo10}
                changeGbVolumeTo50={changeGbVolumeTo50}
                changeUpfrontPaymentTrue={changeUpfrontPaymentTrue}
                changeUpfrontPaymentFalse={changeUpfrontPaymentFalse}
            />);

        } else if (step === 2) {
            return (<PaymentDetails
                nextStep = {nextStep}
                prevStep = {prevStep}
                creditCardValues={creditCardValues}
                handleCardChange={handleCardChange}
            />);

        } else if (step === 3) {
            return (<Confirm
                prevStep = {prevStep}
                planDuration = {planDuration}
                gbVolume = {gbVolume}
                upfrontPayment = {upfrontPayment}
                creditCardValues = {creditCardValues}
            />);
        }; 
    };

    return (

        <>    
            <div>
            <h1 className="step-text">Step {step} of 3</h1>
            {showStep()}
            </div>
            <PriceOverview
                planDuration = {planDuration}
                gbVolume = {gbVolume}
                upfrontPayment = {upfrontPayment}
            />
        </>
    )
};