import React, { Component } from "react";
import Company from "./Company/Company";
import "./App.css";
import { white } from "ansi-colors";

class App extends Component {
  state = {
    companis: [
      { id: "dggt", name: "Zusdesk", people: 1000 },
      { id: "dfregr", name: "Xeso", people: 2000 },
      { id: "df", name: "Saek", people: 1500 }
    ],
    otherState: "something else",
    showCompanies: false
  };

  // switchCompanyHandler = () => {
  //   this.setState({
  //     companis: [
  //       {name: 'Zesdesk', people: 10000},
  //       {name: 'Xero', people: 20000},
  //       {name: 'Seek', people: 15000}
  //     ]
  //   })
  // }

  deleteCompanyHandler = companyIndex => {
    // const companis = this.state.companis
    //const companis = [...this.state.companis];
    // -----------There are 2 other ways to create a copy, and change the copy, and update the state.-----------
    const companis = this.state.companis.slice();
    companis.splice(companyIndex, 1);
    this.setState({ companis: companis });
  };

  nameChangehandle = (event, id) => {
    const companyIndex = this.state.companis.findIndex(company => {
      return company.id === id;
    });

    // const company = this.state.companis[companyIndex];  This is not good approch to mutate original object
    const company = { ...this.state.companis[companyIndex] };

    company.name = event.target.value;

    const companis = [...this.state.companis];
    companis[companyIndex] = company;
    // const company = Object.assign({}, this.state.companis[companyIndex]);
    // alternative way to create a new javascript object
    this.setState({ companis: companis });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showCompanies;
    this.setState({ showCompanies: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "lightblue",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let companis = null;
    if (this.state.showCompanies) {
      companis = (
        <div>
          {this.state.companis.map((company, index) => {
            return (
              <Company
                click={() => this.deleteCompanyHandler(index)}
                name={company.name}
                people={company.people}
                key={company.id}
                changed={event => this.nameChangehandle(event, company.id)}
              />
            );
          })}
          {/* <Company name={this.state.companis[0].name} people={this.state.companis[0].people}/>
          <Company 
              name={this.state.companis[1].name} 
              people={this.state.companis[1].people}
              nameChange={this.nameChangehandle}
              click={this.switchCompanyHandler.bind(this, 'Harvard')}
              click={this.switchCompanyHandler.bind(this, 'Xeiver')} >
              Special company  
            </Company>
            <Company name={this.state.companis[2].name} people={this.state.companis[2].people}/> */}
        </div>
      );
      // ------------------------ This is Step 1 for styling -------------------------------------
      style.backgroundColor = "red";
    }

    // ------------------------ This is Step 2 for styling -------------------------------------
    // let classes = ["red", "bold"].join(" ");
    const classes = [];
    if (this.state.companis.length <= 2) {
      classes.push("red");
    }
    if (this.state.companis.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>This is React intro 2.</h1>
          <p className={classes.join(" ")}>
            And it's the 2nd step for react study
          </p>
        </header>
        <button
          style={style}
          // onClick={this.switchCompanyHandler}
          onClick={this.togglePersonHandler}
        >
          Toggle Company
        </button>
        {companis}
        {/* <div>

            <button onClick={()=>this.switchCompanyHandler('Harvard')}>Switch Company</button>
            <Company name="Zusdesk" people="1000"/>
            <Company name="Xeso" people="2000" >Special company</Company>
            <Company name="Saek" people="1500"/>

            <Company name={this.state.companis[0].name} people={this.state.companis[0].people}/>
            <Company 
              name={this.state.companis[1].name} 
              people={this.state.companis[1].people}
              nameChange={this.nameChangehandle}
              click={this.switchCompanyHandler.bind(this, 'Harvard')}>
              click={this.switchCompanyHandler.bind(this, 'Xeiver')} >
              Special company  
            </Company>
            <Company name={this.state.companis[2].name} people={this.state.companis[2].people}/>
            
          </div>  */}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1'), null, 'this is React intro 2')
  }
}

export default App;

// -----------S1---------------------
// 1. npm install --save Radium, import Radium, { StyleRoot }, export, add <StyleRoot></StyleRoot>. --- then  remove Radium
// 2. eject : do not use 'npm run eject', use 'yarn eject', 
// 3. webpack.config.dev.js  ------>
const weHaveToChangeHere =
                        {
                          test: cssRegex,
                          // exclude: cssModuleRegex,
                          use: getStyleLoaders({
                            importLoaders: 1,
                            modules: true,
                            getLocalIdent: getCSSModuleLocalIdent
                          })
                        },
                        // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
                        // using the extension .module.css
                        // {
                        //   test: cssModuleRegex,
                        //   use: getStyleLoaders({
                        //     importLoaders: 1,
                        //     modules: true,
                        //     getLocalIdent: getCSSModuleLocalIdent,
                        //   }),
                        // },

// 4. webpack.config.prod.js  ------>
              // {
                        //   test: cssRegex,
                        //   exclude: cssModuleRegex,
                        //   loader: getStyleLoaders({
                        //     importLoaders: 1,
                        //     sourceMap: shouldUseSourceMap,
                        //   }),
                        // Don't consider CSS imports dead code even if the
                        // containing package claims to have no side effects.
                        // Remove this when webpack adds a warning or an error for this.
                        // See https://github.com/webpack/webpack/issues/6571
                        //   sideEffects: true,
                        // },
                        // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
                        // using the extension .module.css
                        const weAlsoHaveToChangeHere =
                        {
                          test: cssRegex,
                          loader: getStyleLoaders({
                            importLoaders: 1,
                            sourceMap: shouldUseSourceMap,
                            modules: true,
                            getLocalIdent: getCSSModuleLocalIdent
                          })
                        },
// 5. import css module variable (name one and import)
// 6.  ----------css modules var into the code and update the var name--------
if (this.state.companis.length <= 2) {
  // classes.push("red");
  classes.push(cssClasses.red);
}
if (this.state.companis.length <= 1) {
  // classes.push("bold");
  classes.push(cssClasses.bold);
}

return (
  // <div className={"App"}>
  <div className={cssClasses.App}>       </div>             

// 7. ----