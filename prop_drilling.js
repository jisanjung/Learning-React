// prop drilling is similar to a relay race.
// data can be sent from one component to another component to another using props.

class App extends React.Component {
    render() {
        return (
            <div>
                <Todo pass="from App.js"/>
            </div>
        )
    }
}
class Todo extends React.Component {
    render() {
        return (
            <div>
                <Item pass={this.props.pass}/>
            </div>
        )
    }
}
class Item extends React.Component {
    render() {
        return (
            <div>
                <Item pass={this.props.pass}/> // will output "from App.js"
            </div>
        )
    }
}

// state managers like redux can help avoid prop drilling as it can be a bit of a mess