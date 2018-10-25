import React, { Component } from "react";
import CompanyCard from "./CompanyCard/CompanyCard";
import "./App.css";

class App extends Component {
  state = {
    companis: [
      { name: "Zusdesk", people: 1000 },
      { name: "Xeso", people: 2000 },
      { name: "Saek", people: 1500 }
    ]
  };

  switchCompanyHandler = () => {
    this.setState({
      companis: [
        { name: "Zesdesk", people: 10000 },
        { name: "Xero", people: 20000 },
        { name: "Seek", people: 15000 }
      ]
    });
  };

  nameChangehandle = event => {
    this.setState({
      companis: [
        { name: "Zesdesk", people: 10000 },
        { name: event.target.value, people: 20000 },
        { name: "Seek", people: 15000 }
      ]
    });
  };

  render() {
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border:'1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // }
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is React intro 2.</h1>
          <p>And it is step 2 for React study</p>
        </header>
        <div>
          <button
            // style={style}
            onClick={this.switchCompanyHandler}
          >
            Switch Company
          </button>
          <button onClick={() => this.switchCompanyHandler("Harvard")}>
            Switch Company
          </button>
          <CompanyCard name="Zusdesk" people="1000" />
          <CompanyCard name="Xeso" people="2000">
            Special company
          </CompanyCard>
          <CompanyCard name="Saek" people="1500" />

          <CompanyCard
            name={this.state.companis[0].name}
            people={this.state.companis[0].people}
          />

          <CompanyCard
            name={this.state.companis[1].name}
            people={this.state.companis[1].people}
            nameChange={this.nameChangehandle}
            click={this.switchCompanyHandler}
            click={this.switchCompanyHandler.bind(this, "Xeiver")}
          >
            Special company
          </CompanyCard>

          <CompanyCard
            name={this.state.companis[2].name}
            people={this.state.companis[2].people}
          />
        </div>
        ggi{" "}
      </div>
    );
    // ---------------- S2 --------------------------
    // return React.createElement('div', null, React.createElement('h1'), null, 'this is React intro 2')
  }
}

export default App;

// ---------- Steps ---------------
// React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
// 1. remove most of code at App.js
// 2. create new title, return ...
// 3. create component, write functional form component(different class & functional component??),
// 4. export & import, hard code some <p>, use some js code to explain jsx like  {/* Math */}
// 5. add state, and state and props
// 6. ? switchCompanyHandler-onCliick, explain '=> function', how to pass params in that funtion
