import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Stock = () => {
    const [coins,setCoins]=useState([])
        useEffect(() => {
            axios(`https://api.coinpaprika.com/v1/coins`)
            .then(res=>setCoins(res.data))
            .catch(err=>console.log(err))
        }, [])
        console.log(coins)
    return (
        <div>
                {coins.map(coin=>{
                   return <Container>
                    <ul>
                        <li>{coin.name}</li>
                        <li>{coin.symbol}</li>
                        <li>{coin.rank}</li>
                    </ul>
                    </Container>
                })}
        </div>
    );
};

export default Stock;