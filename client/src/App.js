import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Landing from './pages/Landing/Landing';
import Upload from './pages/Upload/Upload';
import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <Switch>
              <Route path='/' exact component={Landing} />
              <Route path='/videos' exact component={Landing} />
              <Route path='/videos/:id' component={Landing} />
              <Route path='/upload' component={Upload} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
