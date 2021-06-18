import React, { useState } from 'react';


export default function SubscriptionOptions() {

const [planDuration, setPlanDuration] = useState('twelve-months')

const handleOptionChange = (event) => {
    setPlanDuration(event.target.value)
}
    return (
        <div>
            <label htmlFor='planDuration'>
                <input 
                    type='radio'
                    id='planDuration-3-months'
                    name='planDuration'
                    value='three-months'
                    checked={planDuration === 'three-months'}
                    onChange={handleOptionChange}
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
                    onChange={handleOptionChange}
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
                    onChange={handleOptionChange}
                />
                12 Months
            </label>
        </div>
    )
}
