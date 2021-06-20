import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function PriceOverview(props) {

    const [pricingInfo, setPricingInfo] = useState([])

    useEffect(() => {
        axios.get('https://cloud-storage-prices-moberries.herokuapp.com/prices')
        .then(response => {
            setPricingInfo(response.data.subscription_plans)
            console.log(response.data.subscription_plans)
        })
        .catch(err => err)
    }, [])

    const findPrices = pricingInfo.filter(el => {
        if (el.duration_months === props.planDuration) 
        return el.price_usd_per_gb;
    })

    const monthlyPrice = findPrices.map(el => el.price_usd_per_gb);

    const showPrice = () => {

        let price = 0;
        
        if (props.planDuration === 3) {
            price = props.gbVolume * monthlyPrice 
        };
        if (props.planDuration === 6) {
            price = props.gbVolume * monthlyPrice 
        };
        if (props.planDuration === 12) {
            price = props.gbVolume * monthlyPrice 
        };
        if (props.upfrontPayment === true) {
            price = price * 0.8
        };
        return price;
    }

    return (
        <div className="box">
            <h3>Storage: {props.gbVolume}GB</h3>
            <h3>Duration: {props.planDuration} Months</h3>
            <h3>Monthly Price: {showPrice()}€</h3>
            
            {props.upfrontPayment ?
            <>
                <h3>TOTAL: {showPrice() * props.planDuration}€</h3>
                <h3>-20%</h3>
            </>
            : false}
            
        </div>
    )
}
