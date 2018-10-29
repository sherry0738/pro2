import React from "react";
import cssClasses from "./Cockpit.css";

const cockpit = props => {
  const classes = [];
  let btnClass = "";
  if (props.showPerson) {
    btnClass = cssClasses.Red;
  }

  if (props.companies.length <= 2) {
    classes.push(cssClasses.red);
  }
  if (props.companies.length <= 1) {
    classes.push(cssClasses.bold);
  }
  return (
    <div className={cssClasses.Cockpit}>
      <h1>This is RXXXX 2</h1>
      <p className={classes.join(" ")}>And it's the 2nd step for react study</p>
      <button
        // style={style}
        className={btnClass}
        // onClick={this.switchCompanyHandler}
        // onClick={this.togglePersonHandler}

        // ------------ After refactor code into Cockpit.js------------------
        onClick={props.clicked}
      >
        Toggle Companies
      </button>
    </div>
  );
};

export default cockpit;
