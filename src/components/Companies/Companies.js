import React from "react";
import Company from "./Company/Company";

const companies = props =>
  props.companies.map((company, index) => {
    return (
      <Company
        click={() => props.clicked(index)}
        name={company.name}
        people={company.people}
        key={company.id}
        changed={event => props.changed(event, company.id)}
      />
    );
  });

export default companies;
