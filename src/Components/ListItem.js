import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BuySell from './BuySell'

const ListItem = (props) => {
    const [showBtn,toggleShowBtn] = useState(false);
    const colour = props.increase ? 'green' : 'red';
  return (
    <ListStyle >
        <div onClick={()=>toggleShowBtn(!showBtn)}>
        <div className="up" style={{color:colour}}>
        <div>{props.title}</div>
        <div>{props.value}</div>
        </div>
        <div className="down" style={{color:'gray'}}>
            <div>{props.subtitle}</div>
            <div>{props.change}({props.percent})%</div>
        </div>
        </div>
      {showBtn && <BuySell/>}
    </ListStyle>
  )
}

ListItem.propTypes = {
    increase: PropTypes.bool,
    title:PropTypes.string,
    subtitle:PropTypes.string,
    value: PropTypes.number,
    change: PropTypes.number,
    percent: PropTypes.number
}
const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  border-bottom: 2px solid #dedee3;
    .up,.down{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding:1px 5px;
    }
    .up{
        font-size: 12px;
    }
    .down{
        font-size: 7px;
        color:gray;
    }
`
export default ListItem
