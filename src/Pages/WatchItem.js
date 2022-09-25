import React from 'react'
import BuySell from '../Components/BuySell';
import styled from 'styled-components';
import { useState } from 'react';

const WatchItem = (props) => {
    const [showBtn,toggleShowBtn] = useState(false);
    const colour = props.increase ? '#5CA818' : '#D8601D';
  return (

    <>
    <MarketItemStyled>
      <tr className='element' onClick={() => toggleShowBtn(!showBtn)}>
                    <td style={{display:'inline-block',width:'25vw',textAlign:'left',fontWeight:'600'}}>{props.name}</td>
                    <td style={{display:'inline-block',width:'8vw',textAlign:'center'}}>{props.ltp}</td>
                    <td style={{display:'inline-block',width:'9.5vw',textAlign:'center',color:colour}}>{props.change}</td>
                    <td style={{display:'inline-block',width:'10vw',textAlign:'center',color:colour}}>{props.changePercent}</td>
                    <td style={{display:'inline-block',width:'13vw',textAlign:'center'}}>{props.volume}</td>
                    <td style={{display:'inline-block',width:'10vw',textAlign:'center'}}>{props.value}</td>
    </tr>
    </MarketItemStyled>
    {showBtn && <BuySell use="REMOVE FROM WATCHLIST"/>}
    </>
  )
}
const MarketItemStyled = styled.div`
  width: 100%;
  border-bottom:var(--border-color) 1px solid;
  &:hover{
    cursor: pointer;
  }
  .element{
    font-family:Inter;
    color:var(--text-color);
    font-weight:400;
    font-size:1.2vw;
    background: var(--item-background);
    border: 2px solid #E1E1E1;
    box-sizing: border-box;
    height:2.5vw;
    z-index:1;
    position:sticky;
    top:10.2vh;
    width: 77vw;
}
`
export default WatchItem
