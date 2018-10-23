import React from 'react'
import './CompanyCard.css'

const companyCard = (props) => {
  return (
  <div className="CompanyCard">
    <p>{props.name} has {props.people} people.</p>
    {/* <p onClick={props.click}>{props.name} has {props.people} people.</p> */}
    <p>{props.children}</p>
    <input
    onChange={props.nameChange}
    />
  </div>
  // <div>
  //   <p>Zusdesk has 1000 people</p>
  //   {/* Math */}
  //   </div>
    
)
}
export default companyCard;