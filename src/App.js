/**
 * @description imports
 */
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Team from './Views/Team';
import Specs from './Views/Specs';
import Roadmap from './Views/Roadmap';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-120056080-1');
/**
 * @description Add fragment to remove extra div
 */
const Fragment = React.Fragment;

class App extends React.Component {
    tracking() {
        ReactGA.pageview(window.location.hash);
    }

    render() {
        return (
            /**
             * @description wrap everything in the router
             */
            <Router onUpdate={this.tracking}>
                {/*location to determine what route is being rendered in switch*/}
                <Route render={({ location }) => (
                    <Fragment>
                        {/*header*/}
                        <header className='fixed-top'>
                            <Menu />
                        </header>
                        {/*routes*/}
                        <Switch location={location}>
                            <Route path="/" exact component={Home} />
                            <Route path="/team"  component={Team} />
                            <Route path="/specs"  component={Specs} />
                            <Route path="/roadmap" component={Roadmap}/>
                        </Switch>
                        {/*footer*/}
                        <Footer></Footer>
                    </Fragment>
                )} />
            </Router>
        );
    }
}

export default App;