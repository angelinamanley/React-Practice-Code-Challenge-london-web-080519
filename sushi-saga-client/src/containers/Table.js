import React, { Fragment } from 'react'
import AddMoneyForm from '../components/AddMoneyForm'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.balance} remaining!
      </h1>
      <AddMoneyForm handleSubmit={props.handleSubmit}/>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.sushisEaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table