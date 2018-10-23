# Basic Features & Syntax

1. We use [Create React App](https://github.com/facebook/create-react-app) to create our first react app.
2. Remove some default code of the our new app.

3. Let's do coding now. Ok firstly, we create a new heading in `App.js`. And we are going to talk about the `jsx` in `App.js` . 

4. Now we write this new heading code with javascript. You can comment the `return` part code, and then copy the code below and paste into the `return` part. 
 
```js
return React.createElement('div', null, React.createElement('h1'), null, 'this is React intro 2')
```

4. Now we can create functional component for our new app.

```js
import React from 'react'

const companyCard = () => {
  return (
  <div>
    <p>A  card here for {props.people} people.</p>
    <p>{props.children}</p>
  </div>
)
}
export default companyCard;

```

5.Outputting Dynamic content - props & state

** props allow you to pass data down the component tree, and state is used to change the component, and changes to state also trigger an UI update.

We set data of companis in this state object for `CompanyCard` in App class.

```js
state = {
  companis: [
    {name: 'Zusdesk', people: 1000}, 
    {name: 'Xeso', people: 2000},
    {name: 'Saek', people: 1500}
  ]

```
**Our code above, the `App` component contains `state`. Only class-based components can define and use`state` . You can pass the `state` down to functional components, but these then can not directly edit it.**

**`state` simply is a property of the component class, you have to call it `state` though - the name is not optional. You can then access it via`this.state` in your class JSX code (which you return in the required `render()` method).**

**Whenever `state` changes (through `this.setState()` method), the component will re-render and reflect the new state. The difference to `props` is, that this happens within one and the same component - you don't receive new data (`props`) from outside!**

Now we can now access a property using render method with any property to output something daynamic with `{}` like this.

```js
<CompanyCard name={this.state.companis[0].name} people={this.state.companis[0].people}/>
<CompanyCard name={this.state.companis[1].name} people={this.state.companis[1].people} >Special company</CompanyCard>
<CompanyCard name={this.state.companis[2].name} people={this.state.companis[2].people}/>
```

Here above `name` and `people` are the properties (props) set up on the `CompanyCard` component. 


The CompanyCard component receives this `props` argument. React will pass one argument to your componnent function => An object, which contains all properties you set up on `<CompanyCard .../>`

```js
<div>
    <p>{props.name} has {props.people} people.</p>
    <p>{props.children}</p>
  </div>

```

`{props.name}` and `{props.people}` then dynamically output the `name` and `people` property of the `props`object - which is available since we set the `name` and `people` property inside `App` component (see above)
 
6.Ok next, we will create `switchCompanyHandler` function, add function code just above `render()`method.

```js
switchCompanyHandler = () => {
  
}
```

and go to `<button>`, add click listener wrapped in `{}` like this:

```js
<button onClick={this.switchNameHandler}>Switch Company</button>

```

**Do not add `()` for that function because we only want to pass a reference and we call this switch function by using `this` and then referring to that property which
holds this switch function, rather than executing it immediately once react renders this to the dom(coz we execute this fuction with parentheses)**

Let's add some code to make switch function work. 

```js
this.setState({ 
    companis: [
      {name: 'Zesdesk', people: 1000}, 
      {name: 'Xero', people: 2000},
      {name: 'Seek', people: 1500}
    ]
  })
```

**Remeber `state` and `props` are read only. `this.setState()` trigger re-render().**

**The reasons we should use function form of components as often as possible are that these simple components which are just functions receiving props are very clear about what they do. Most parts of your application shouldn't change the application state, they should just render something to the dom.**

Now let's try to keep that pattern of changing the name in app.js but actually listening to the event in another component.But how we can handle this and change a state from another component. 

So we can use the click property of `<CompanyCard />` in `App.js` for `CompanyCard.js`, which can simply call `props.click` as click is the name of the property we defined in `App.js`.

```js
<p onClick={props.click}>{props.name} has {props.people} people.</p>

```

**An pattern for React props: you can pass methods as props so that you can call a method which might change the state in another component which doesn't have direct access to the state and which shouldn't have direct access to the state.**

###[Practice] 

1. Ok, now we can try to add a input and whenever we type something there we want to use what we type as a new name for the 2nd company, which means the 2nd company should change its name, no matter in which instance of this `CompanyCard` component I type. 

you properly need something below:

```js 
<input />
onChange 
a handler function
event.target.value

```

2.Add some CSS styling make it looks better

```
.CompanyCard {
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px azure;
  padding: 16px;
  text-align: center;
  background-color: rgb(228, 228, 228);
}
```

### Learn some css for react
#### inline-stylys

Inline-styles means define style in JavaScript.  Add some code to JavaScript just below `render() {` in `App.js` file:

```js 
const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

``` 

