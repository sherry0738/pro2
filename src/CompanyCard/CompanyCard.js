import React from "react";
import "./CompanyCard.css";

const companyCard = props => {
  return (
    <div>
      <p>Zusdesk has 1000 people</p>
    </div>
  );
};
export default companyCard;

// ---------------- S1 --------------------------
// <div className="CompanyCard">
//   <p>{props.name} has {props.people} people.</p>

// ---------------- S2 --------------------------
//   <p onClick={props.click}>      <---
//   {/* <p> */}
//     {props.name} has {props.people} people.
//   </p>
//   <p>{props.children}</p>

// ---------------- S3 --------------------------
//   <input type="text" onChange={props.changed} value={props.name} />
// </div>
