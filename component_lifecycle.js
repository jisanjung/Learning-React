// most commonly used lifecycle methods

componentDidMount()
// executed immediately after rendering
// constructor fires first, then render method and this method is third

componentDidUpdate(prevProps, prevState)
// After component's updates are flushed to DOM
// gives back information about the previous props or previous state when this function is executed

componentWillUnmount()
// Immediately before removing component from DOM