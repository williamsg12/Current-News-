import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import {Fade} from 'react-reveal'

const Stock = () => {
    const [coins,setCoins]=useState([])
        useEffect(() => {
            axios(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_STOCK_API_KEY}&ids=BTC,ETH,XRP,ADA,USDT,BNB&interval=1d`,{
	headers: {
	  'Access-Control-Allow-Origin': '*',
	})
							.then((res) => setCoins(res.data))
							.catch((err) => console.log(err));
        }, [])

    return (
			 <div>
                {coins.map(coin=>{
                   return (             
											<Container>
                                                <Fade bottom cascade>
												<ol
                                                 className='coin-list'>
													<h1>{coin.name}</h1>
													<li>Symbol:{coin.symbol}</li>
													<li>Rank:{coin.rank}</li>
													<li>Price:{coin.price}</li>
													<li>
														LOGO:{' '}
														<img
															src={coin.logo_url}
															alt=''
															className='coin-image'
														/>
													</li>
												</ol>
                                                    </Fade>
											</Container>
										);
                })}
        </div>
    );
};

export default Stock;