import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function PriceOverview(props) {

    useEffect(() => {
        axios.get('https://cloud-storage-prices-moberries.herokuapp.com/prices')
        .then(response => {
            const prices = response.data.subscription_plans.price_usd_per_gb
            console.log(prices)
        })
        .catch(err => err)
    })

    // const price1 = price.map(el => {
    //     console.log(el)
    // })

    

    return (
        <div>
            <h1>{props.planDuration}</h1>
            <h1>h</h1>
        </div>
    )
}
