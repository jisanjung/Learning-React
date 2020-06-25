// index.js gets content from App.js which
// App.js gets content from custom components

// component structure
import React, { Component } from "react";
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
