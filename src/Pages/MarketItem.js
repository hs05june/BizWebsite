import React from 'react'
import BuySell from '../Components/BuySell';
import styled from 'styled-components';
import { useState } from 'react';

const MarketItem = (props) => {
    const [showBtn,toggleShowBtn] = useState(false);
    const colour = props.increase ? '#5CA818' : '#D8601D';
  return (
    <MarketItemStyled>
      <tr className='element' onClick={() => toggleShowBtn(!showBtn)}>
                    <td style={{display:'inline-block',width:'25vw',textAlign:'left',fontWeight:'600'}}>{props.name}</td>
                    <td style={{display:'inline-block',width:'7vw',textAlign:'center'}}>{props.ltp}</td>
                    <td style={{display:'inline-block',width:'9vw',textAlign:'center',color:colour}}>{props.change}</td>
                    <td style={{display:'inline-block',width:'10vw',textAlign:'center',color:colour}}>{props.changePercent}</td>
                    <td style={{display:'inline-block',width:'13vw',textAlign:'center'}}>{props.volume}</td>
                    <td style={{display:'inline-block',width:'10vw',textAlign:'center'}}>{props.value}</td>
    </tr>
    {showBtn && <BuySell />}
    </MarketItemStyled>
  )
}
const MarketItemStyled = styled.div`
width: 77vw;
&:hover{
    cursor: pointer;
}
.element{
    font-family:Inter;
    color:#2C2C2C;
    font-weight:400;
    font-size:1vw;
    background: #FEFBFB;
    border: 2px solid #E1E1E1;
    box-sizing: border-box;
    height:2.5vw;
    z-index:1;
    position:sticky;
    top:10.2vh;
}
`
export default MarketItem
