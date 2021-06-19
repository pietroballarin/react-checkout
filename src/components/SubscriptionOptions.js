import React, { useState } from 'react';


export default function SubscriptionOptions() {

const [planDuration, setPlanDuration] = useState('twelve-months');
const [gbVolume, setGbVolume] = useState('fiveGb');
const [upfrontPayment, setUpfrontPayment] = useState('no');

const changePlanDuration = (event) => {
    setPlanDuration(event.target.value);
}

const changeGbVolume = (event) => {
    setGbVolume(event.target.value);
}

const changeUpfrontPayment = (event) => {
    setUpfrontPayment(event.target.value);
}

    return (
        <>
            <div>
                <label htmlFor='planDuration'>
                    <input 
                        type='radio'
                        id='planDuration-3-months'
                        name='planDuration'
                        value='three-months'
                        checked={planDuration === 'three-months'}
                        onChange={changePlanDuration}
                    />
                    3 Months
                </label>
                <label htmlFor='planDuration'>
                    <input 
                        type='radio'
                        id='planDuration-6-months'
                        name='planDuration'
                        value='six-months'
                        checked={planDuration === 'six-months'}
                        onChange={changePlanDuration}
                    />
                    6 Months
                </label>
                <label htmlFor='planDuration'>
                    <input 
                        type='radio'
                        id='planDuration-12-months'
                        name='planDuration'
                        value='twelve-months'
                        checked={planDuration === 'twelve-months'}
                        onChange={changePlanDuration}
                    />
                    12 Months
                </label>
            </div>
            <div>
                <label htmlFor='gbVolume'>
                    <input 
                        type='radio'
                        id='gbVolume-five'
                        name='gbVolume'
                        value='fiveGb'
                        checked={gbVolume === 'fiveGb'}
                        onChange={changeGbVolume}
                    />
                    5 GB
                </label>
                <label htmlFor='gbVolume'>
                    <input 
                        type='radio'
                        id='gbVolume-ten'
                        name='gbVolume'
                        value='tenGb'
                        checked={gbVolume === 'tenGb'}
                        onChange={changeGbVolume}
                    />
                    10 GB
                </label>
                <label htmlFor='gbVolume'>
                    <input 
                        type='radio'
                        id='gbVolume-fifty'
                        name='gbVolume'
                        value='fiftyGb'
                        checked={gbVolume === 'fiftyGb'}
                        onChange={changeGbVolume}
                    />
                    50 GB
                </label>
            </div>
            <div>
                <label htmlFor='upfrontPayment'>
                    <input 
                        type='radio'
                        id='upfrontPayment-yes'
                        name='upfrontPayment'
                        value='yes'
                        checked={upfrontPayment === 'yes'}
                        onChange={changeUpfrontPayment}
                    />
                    YES
                </label>
                <label htmlFor='upfrontPayment'>
                    <input 
                        type='radio'
                        id='upfrontPayment-no'
                        name='upfrontPayment'
                        value='no'
                        checked={upfrontPayment === 'no'}
                        onChange={changeUpfrontPayment}
                    />
                    NO
                </label>
            </div>
        </>
    )
}
