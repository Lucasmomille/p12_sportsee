import React from 'react'
import PropTypes from 'prop-types'
import './energycard.scss'

function EnergyCard(props) {
    const {name, src, count, unit} = props.data
  return (
    <div className='card'>
        <img src={src} alt="" className='card__img'/>
        <p className='card__legend'>
            <span className='card__count'>{count}{unit}</span><br />
            <span className='card__name'>{name}</span>
        </p>
    </div>
  )
}

EnergyCard.propTypes = {
    data: PropTypes.object.isRequired
}

export default EnergyCard

