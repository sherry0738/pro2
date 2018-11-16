import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import CompanyCard from "./CompanyCard/CompanyCard";

class App extends Component {
  state = {
    companis: [
      { name: "zundesk", people: 3000 },
      { name: "Xexro", people: 2000 },
      { name: "Seak", people: 2400 }
    ]
  };
  render() {
    // return React.createElement("div", "h1", "this is React intro 2");
    return (
      <div className="App">
        <header className="App-header">
          <h1>React intro 2.</h1>
          <p>REACT_VERSION is : {React.version}</p>
        </header>
        <hr />
        {/* <CompanyCard />
          <CompanyCard />
          <CompanyCard /> */}

        {/* <CompanyCard name="zundesk" people="3000" />
          <CompanyCard name="Xero" people="2000" /> */}

        {/* <CompanyCard
          name={this.state.companis[0].name}x
          people={this.state.companis[0].people}
        />
        <CompanyCard
          name={this.state.companis[1].name}
          people={this.state.companis[2].people}
        >
          SPECIAL
        </CompanyCard>
        <CompanyCard
          name={this.state.companis[2].name}
          people={this.state.companis[2].people}
        /> */}
      </div>
    );
  }
}

export default App;
