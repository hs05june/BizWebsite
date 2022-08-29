import React from 'react'
import styled from 'styled-components';

function BuySell() {
  return (
    <BuySellStyle>
      <button className='buy'>BUY</button>
      <button className='sell'>SELL</button>
    </BuySellStyle>
  )
}

const BuySellStyle = styled.div`
  background:#FFF9D6;
  padding:7px;
  width:100%;
  text-align:right;
    .buy,.sell{
        border-radius:5px;
        border:0px;
        color:white;
        font-weight:bold;
        font-size:17px;
        padding:3px 6px;
        margin:0 10px;
    }
    .buy:hover,.sell:hover{
        cursor: pointer;
        box-shadow:0 0 2px 2px #C1AEB3;
    }
    .buy{
        background:#26059E;
    }
    .sell{
        background:#FF1F1F;
    }
`
export default BuySell
