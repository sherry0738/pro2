import React from "react";
import cssClasses from "./CompanyCard.css";
// import Radium from "radium";

const companyCard = props => {
  // const style = {
  //   "@media(min-width: 500px": {
  //     width: "450px"
  //   }
  // };
  return (
    <div className={cssClasses.companyCard}>
      {/* <p>{props.name} has {props.people} people.</p> */}
      <p onClick={props.click}>
        {props.name} has {props.people} people.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
    // <div>
    //   <p>Zusdesk has 1000 people</p>
    //   {/* Math */}
    //   </div>
  );
};
export default companyCard;
