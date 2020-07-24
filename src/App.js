import React, { Component } from 'react';
import About from './components/AboutMeComponent';
import Header from './components/HeaderComponent';
import Gallery from './components/GalleryComponent';
import Advertisements from './components/AdvertisementsComponent';
import Commercials from './components/CommercialsComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
              <Header />
              <Switch>
                <Route path="/about" component={About} />
                {/* <Redirect to="/about" /> */}
                <Route path="/gallery" component={Gallery} />
                <Route path="/advertisements" component={Advertisements} />
                <Route path="/commercials" component={Commercials} />
              </Switch>
            </div>
          );
    }
  }

export default App;
