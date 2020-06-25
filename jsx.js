// basically just html formatted code that you can use javascript in
// javascript and html mixed together kind of

<div className="App"></div>
// you must user "className" for the class of element

render() {
    // javascript goes here
    const name = "jason";
    return (
        // jsx goes here
        // javascript can be accessed thru curly braces in jsx
        <div>{name}</div>
    );
}