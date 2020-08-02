// context API should only be used when you have a lot of prop drilling.
// it can be a pain to pass props down levels of components
// context api fixes by having a "global" state
// any component surrounded by the Provider can access this without having to pass down props


// first, create a Provider class component
// it is a good convention to keep the Provider in a different file
import React, { Component } from 'react'

export class Provider extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Provider


// also import createContext, built into react
import React, { Component, createContext } from 'react'


// create your context
// the context is only used in your Provider to initialize the context and pass values into it
const Context = createContext();


// now make the Context variable into jsx in the render function of Provider.js
// append a .Provider next to the Context jsx to let it know that that is the Provider.
render() {
    return (
        <div>
            <Context.Provider>

            </Context.Provider>
        </div>
    )
}


// go in App.js, and wrap Provider into all the child components.
return (
    <div className="App">
      <Provider>
        <h1>Hello</h1>
      </Provider>
    </div>
  );


// in the Provider.js, put this in the Context jsx
<Context.Provider>
    {this.props.children}
</Context.Provider>
// this will ensure that everything passed into the Provider can be used in all the children of your application


// you can now initialize "value" property in the Context.Provider jsx and pass whatever you want in there
// can be state, or any value
<Context.Provider value={{...this.state}}>
    {this.props.children}
</Context.Provider>
// this value property can be access in all child components


// to access data in another component, do the following
// import the Context.js, and have it surround your jsx
// instead of .Provider, now append a .Consumer
// only way to access the values from the provider is using an arrow function
// this arrow function takes in the "context" or the value from the provider.
// you can then return jsx and do whatever with this value
import React, { Component } from 'react';
import Context from "./Context"

export class List extends Component {
    render() {
        return (
            <Context.Consumer>
                {context => {
                    (<h1>{context.name}</h1>)
                }}
            </Context.Consumer>
        )
    }
}

export default List