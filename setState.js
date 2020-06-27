// setState method takes in an object to change the current state
state = {
    name: "jason"
}
<div>{this.setState({ name: "bill" })}</div>



// dynanically changing state with a function parameter on an event
// pretend we have a function that changes the state by taking in a parameter
changeName = (name) => {
    this.setState({
        name: name
    });
}
// there are 2 ways to change state. let's see the first
<div onClick={() => this.changeName("bill"))}></div>
// first way is to provide an anonymous function that returns your function with the parameter you want

// however let's see it this way
<div onClick={this.changeName.bind(this, "bill")}></div>
// this way is preferred
// changeName is binded to the current class
// "bill" is taken as an argument to changeName