import React, {Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory, Switch } from 'react-router';
import HomePage from './HomePage.jsx';
import NavBar from './HeaderComponent/NavBar.jsx';
import Footer from './FooterComponent/Footer.jsx';
import Greeting from './Greeting.jsx'
import Gradient from './Gradient.jsx'
import Tabs from './Tabs.jsx'
import Projects from './Projects.jsx'

class App extends Component {
    render() {
        return (
            <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Projects" component={Portfolio} />
                        <Route path="/Resume" component={Home} />
                        <Route path="/Blog" component={Home} />
                        <Route path="/Contact" component={Home} />
                    </Switch>
            </Router>
        )
    }
}

export default App;

class Home extends Component {
    render() {
        return (
            <div id="home">
                <Greeting />
                <Gradient />
                <HomePage />
            </div>
        )
    }
}

class Portfolio extends Component {
    render() {
        return (
            <div>
                <Tabs/>
            </div>
        )
    }
}