// react router in step by step

// in your main component, or index.js, you need to import this:
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// as well as all the components you want to link to

// you want to then wrap everything in a router tag
<Router></Router>

// each inividual link is known as a "route"
<Route path="/about" component={About}/>
// you can specify the path as well as which component you want it to link to

// anything that is consistantly going to be in your app in all pages, you can simply render the component inside the Route tags
<Route>
    <Header/>
</Route>
// typically headers are consistant

// you can use Switch tags to wrap around your Route tags when you have the same path on multiple Routes
<Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/shop" component={Shop}/>
</Switch>
// then use the exact keyword in the Route you want it to go everytime, otherwise all of the components will show up still


// Links


// if you want links similar to anchor tags, you will need the Link component
// in the component that contains your links, include this
import { Link } from "react-router-dom";

// wrap each link element with a Link component
<Link to="/">
    <li><a href="">Home</a></li>
</Link>
// specify where you want the link to go by adding to= to which path you want it to go
