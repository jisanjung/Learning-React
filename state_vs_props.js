// state 
// state is usually stored in the contructor
// its an object that can be modified.
constructor() {
    super();
    // state
    this.state = {
        name: "Jason",
        isCool: true
    };
}

// props
// props are values that are passed into that component when it is invoked and used within the component
// props should never change
<Item value={1}/> // passed similar to invoking a function
class Item extends React.Component {
    render() {
        return this.props.value // 1 is used from being passed in
    }
}


// main difference between them is that state data can be changed while props do not change.
// state is mostly done within the component while props can be used outside of the component.


<Home>{this.props.children}</Home>
// props.children returns the children elements inside given component