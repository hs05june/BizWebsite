import React from 'react';
import styled from 'styled-components';
import MarketItem from './MarketItem';

function MarketPage() {

    return (
            <ResumePageStyled>
                <table className='portTable'>
                <tr className='heading'>
                    <th style={{width:'25vw',textAlign:'left'}}>Name</th>
                    <th style={{width:'7vw'}}>LTP</th>
                    <th style={{width:'9vw'}}>Change</th>
                    <th style={{width:'10vw'}}>Change %</th>
                    <th style={{width:'13vw'}}>Volume</th>
                    <th style={{width:'10vw'}}>Value (in Cr.)</th>
                </tr>
                <div className='tableContent'>
                <MarketItem name="Bharat Petroleum" ltp="335.15" change="1.00" changePercent="0.30" volume="38,31,736" value="128.819" increase={false} />
                <MarketItem name="Bharat Petroleum" ltp="335.15" change="1.00" changePercent="0.30" volume="38,31,736" value="128.819" increase={true} />
                <MarketItem name="Bharat Petroleum" ltp="335.15" change="1.00" changePercent="0.30" volume="38,31,736" value="128.819" increase={false} />
                </div>
            </table>       
         </ResumePageStyled>
    )
}
const ResumePageStyled = styled.div`
width:100%;
.portTable{
    margin-left: 65px;
    width: 76vw;
    // overflow:auto;
}
.portTable th, .portTable td{
    padding-left:1.5vw;
}
font-size:1.2vw;
.heading{
    background:#fffbf8;
    height: 5vh;
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    color:rgba(0,0,0,0.5);
    box-shadow:0px -1px 4px rgba(0,0,0,0.5);
    margin-bottom:0.5vh;
    z-index:10;
    top:10.1vh;
    position:sticky;
}
.tableContent{
    overflow-y:scroll;
    height:30vh;
}
`
export default MarketPage