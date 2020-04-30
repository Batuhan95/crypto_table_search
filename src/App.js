import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Tablo from './components/Tablo';
import CoinSearch from './components/CoinSearch';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Tablo} exact/>
             <Route path="/coinsearch" component={CoinSearch}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;