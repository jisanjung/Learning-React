// index.js gets content from App.js which
// App.js gets content from custom components

// component structure
import React, { Component } from "react";
import { func } from "prop-types";
// you can import css, images, other components, whatever

// class name should be file name
class App extends Component {
    render() {
        return (
            // jsx
            // can only be ONE element
            // will give error if more than one, so always wrap
            <div className="App">
                <h1>Hello World</h1>
            </div>
        );
    }
}

// this allowsthe component "App" to be imported into index.js
export default App;


// good conventions
// it's always good to write methods in the class (above the render method)
// then, use the method by doing this.method() in curly braces in jsx

// constructors
constructor() {
    // you MUST call super method
    super();
    this.name = "jason";
    // this refers to your component
}


// 2 types of components, functional and class
// functional
import React from "react";

// bsically just a function that returns jsx
const Hello = () => <h1>Hello World</h1>

export default Hello

// class components
import React, { Component } from "react";
// you must include the Component when using class components

// bsically js class that returns jsx
class Hello extends Component {
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}

export default Hello
// use functional components as much as possible
// only use class components when dealing with state