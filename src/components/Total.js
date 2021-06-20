import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Total(props) {

    const [price, setPrice] = useState()

    useEffect(() => {
        axios.get('https://cloud-storage-prices-moberries.herokuapp.com/prices')
        .then(response => {
            console.log(response.data.subscription_plans);
            
        })
    })

    return (
        <div>
            <h1>{props.planDuration}</h1>
            <h1>h</h1>
        </div>
    )
}
