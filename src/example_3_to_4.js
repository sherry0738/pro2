import React, { Component } from "react";
// import Company from "../components/Companies/Company/Company";
import Companies from "../components/Companies/Companies";
import Cockpit from "../components/Cockpit/Cockpit";

// import "./App.css";
import cssClasses from "./App.css";

// import Radium, { StyleRoot } from "radium";
// import { white } from "ansi-colors";

class App extends Component {
  state = {
    companies: [
      { id: "dggt", name: "Zusdesk", people: 1000 },
      { id: "dfregr", name: "Xeso", people: 2000 },
      { id: "df", name: "Saek", people: 1500 }
    ],
    otherState: "something else",
    showCompanies: false
  };

  // switchCompanyHandler = () => {
  //   this.setState({
  //     companies: [
  //       {name: 'Zesdesk', people: 10000},
  //       {name: 'Xero', people: 20000},
  //       {name: 'Seek', people: 15000}
  //     ]
  //   })
  // }

  deleteCompanyHandler = companyIndex => {
    // const companies = this.state.companies
    //const companies = [...this.state.companies];
    // -----------There are 2 other ways to create a copy, and change the copy, and update the state.-----------
    const companies = this.state.companies.slice();
    companies.splice(companyIndex, 1);
    this.setState({ companies: companies });
  };

  nameChangehandle = (event, id) => {
    const companyIndex = this.state.companies.findIndex(company => {
      return company.id === id;
    });

    // const company = this.state.companies[companyIndex];  This is not good approch to mutate original object
    const company = { ...this.state.companies[companyIndex] };

    company.name = event.target.value;

    const companies = [...this.state.companies];
    companies[companyIndex] = company;
    // const company = Object.assign({}, this.state.companies[companyIndex]);
    // alternative way to create a new javascript object
    this.setState({ companies: companies });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showCompanies;
    this.setState({ showCompanies: !doesShow });
  };

  render() {
    // ------------comment out after yarn eject and config CSS module------------
    // const style = {
    //   backgroundColor: "lightblue",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer"
    // ------------comment out after Radium practice ----------
    // ":hover": {
    //   backgroundColor: "lightyellow",
    //   color: "black"
    // }
    // };

    let companies = null;
    // ----------S1 after config CSS module and works -----------

    // -------move to Cockpit.js file---------
    // let btnClass = "";

    if (this.state.showCompanies) {
      companies = (
        <div>
          <Companies
            companies={this.state.companies}
            clicked={this.deleteCompanyHandler}
            changed={this.nameChangehandle}
          />

          {/* <Company name={this.state.companies[0].name} people={this.state.companies[0].people}/>
          <Company 
              name={this.state.companies[1].name} 
              people={this.state.companies[1].people}
              nameChange={this.nameChangehandle}
              click={this.switchCompanyHandler.bind(this, 'Harvard')}
              click={this.switchCompanyHandler.bind(this, 'Xeiver')} >
              Special company  
            </Company>
            <Company name={this.state.companies[2].name} people={this.state.companies[2].people}/> */}
        </div>
      );
      // style.backgroundColor = "red";

      // ----------S1 after config CSS module and works -----------
      // ----------move to Cockpit.js file---------------
      // btnClass = cssClasses.Red;
    }

    // ------------------------ This is Step 2 for styling -------------------------------------
    // let classes = ["red", "bold"].join(" ");

    // -------Move to Cockpit.js file-----------------
    // const classes = [];
    // if (this.state.companies.length <= 2) {
    //   // classes.push("red");
    //   classes.push(cssClasses.red);
    // }
    // if (this.state.companies.length <= 1) {
    //   // classes.push("bold");
    //   classes.push(cssClasses.bold);
    // }

    return (
      // <div className={"App"}>
      <div className={cssClasses.App}>
        {/* ---------move to cockpit.js file ---------- */}

        {/* <header className="App-header">
          <h1>This is RXXXX 2.</h1>
          <p className={classes.join(" ")}>
            And it's the 2nd step for react study
          </p>
        </header>
        <button
          // style={style}
          className={btnClass}
          // onClick={this.switchCompanyHandler}
          onClick={this.togglePersonHandler}
        >
          Toggle Company
        </button> */}

        {/* -------After refactor code to the Cockpit.js file--------- */}
        <Cockpit
          showCompanies={this.state.showCompanies}
          companies={this.state.companies}
          clicked={this.togglePersonHandler}
        />

        {companies}
        {/* <div>

            <button onClick={()=>this.switchCompanyHandler('Harvard')}>Switch Company</button>
            <Company name="Zusdesk" people="1000"/>
            <Company name="Xeso" people="2000" >Special company</Company>
            <Company name="Saek" people="1500"/>

            <Company name={this.state.companies[0].name} people={this.state.companies[0].people}/>
            <Company 
              name={this.state.companies[1].name} 
              people={this.state.companies[1].people}
              nameChange={this.nameChangehandle}
              click={this.switchCompanyHandler.bind(this, 'Harvard')}>
              click={this.switchCompanyHandler.bind(this, 'Xeiver')} >
              Special company  
            </Company>
            <Company name={this.state.companies[2].name} people={this.state.companies[2].people}/>
            
          </div>  */}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1'), null, 'this is React intro 2')
  }
}

export default App;
