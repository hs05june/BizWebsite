import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ListItem = props => {
  return (
    <div>
      
    </div>
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
`
export default ListItem
