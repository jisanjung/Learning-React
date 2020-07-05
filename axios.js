// axios is a library for making ajax requests
// you must install axios "npm install axios"
// then import it in your file
import Axios from 'axios';

// utilize it by calling the object name then the method you want:
Axios.get();
Axios.post();
Axios.delete();
// etc...

// put the endpoint you want your data from
Axios.get("https://endpoint.io/posts");

// this method returns a promise, so you must attach a .then
Axios.get("https://endpoint.io/posts")
    .then(response => {
        console.log(response);
    });

// Important: it is always a good idea to wrap your axios request inside the componentDidMount() lifecycle method.
componentDidMount() {
    Axios.get("https://endpoint.io/posts")
    .then(response => {
        console.log(response);
    });
}

// you can then use setState in your promise to update your ui