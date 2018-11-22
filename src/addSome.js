// ------------App.js------------

import React from "react";
import PasswordInput from "./PasswordInput";
import Peep from "./peep";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peeps: ["loading..."],
      operation: "view"
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/peeps")
      .then(res => res.json())
      .then(res => this.setState({ peeps: res }));
  }
  render() {
    const operation = this.state.operation;

    return (
      <div>
        <div className="password">
          <h1>Test your password strength</h1>
          <PasswordInput />
        </div>
        <div>
          <Peep />
          {this.state.peeps.map(function(peep, index) {
            return <p key={index}>{peep}</p>;
          })}
        </div>
        <div>
          <Slider startValue="5" />
          <Slider />
          <hr />
          <Slider />
          <LikeButton startCount={1000} />
        </div>
      </div>
    );
  }
}

// ------------Peep.js------------
import React from "react";
import "./Peep.scss";
// jsx -> js
export default class Peep extends React.Component {
  constructor(props) {
    super(props);
    // this === peeper
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.state = {
      content: "",
      maxPeepLength: 40
    };
  }

  onTextAreaChange(event) {
    //console.log('this function work, we use hard bind above instead of using this below')
    this.setState({
      content: event.target.value
    });
    console.log(this.state.content);
  }

  render() {
    // const maxPeepLength = this.state.maxPeepLength
    // const content = this.state.content
    const { maxPeepLength, content } = this.state; // maping the stucture
    const isDisabled = content.length <= 0 || content.length > maxPeepLength;
    const charsLeft = maxPeepLength - content.length;
    const spanClass = charsLeft < 20 ? "peeper_span--warning" : "";
    // if (content.length < 20) {
    // return 'peeper_span--warning'
    // } else {
    // return ''
    // }
    // can write function with if statement here
    return (
      <div className="peeper">
        <textarea
          className="peeper_textarea"
          onChange={this.onTextAreaChange}
        />
        <footer className="peeper_footer">
          <span className={spanClass}>{charsLeft}</span>
          {/* <span className="peeper_span--warning">{maxPeepLength - content.length}</span> */}
          <button disabled={isDisabled}>peep</button>
        </footer>
      </div>
    );
  }
}
// ------------Peep.scss----------
.peeper {
  width: 100%;
}

.peeper_textarea {
  width: 100%;
  height: 5rem;
  display: block;
  margin-bottom: 0.5rem;
}

.peeper_footer {
  display: flex;
  justify-content: space-between;
}
.peeper_span--warning {
  color: red;
}


// ------------Like.js----------
import React from "react";

// putting html in your js -jsx

export default function Like(props) {
  return (
    <div>
      like
      <span>{props.count}</span>
      <span>hates {props.hate}</span>
    </div>
  );
}

// module.exports = Like; // export default


// ------------LikeButton.js----------
import React from 'react'

export default class LikeButton extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            count: this.props.startCount || 0
        }
    }
    handleClick(event) {
        this.setState({
            count: this.state.count + 1
            
        })
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>like</button><span>{this.state.count}</span>
            </div>
        )

    }
    ;
}


var express = require('express')
var app = express();
var cors = require('cors');

app.use(cors())  // if use Sinatra , no need cors

app.get('/', function(req, res) {
    res.send('hello')
})

app.get('/api/peeps',(req, res) => {
    res.json(['Geri', 'Summer', 'Matt'])
})

app.listen(5000)


// fetch('http://localhost:5000/api/peeps')     // can turn url to object to make req
//     .then(res => res.json())
//     .then(res => console.log(res))