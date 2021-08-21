import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import Description from './components/Description/Description';
import videoDetails from './Data/video-details.json';
import { Component } from 'react';

class App extends Component {
  state = {
    video: videoDetails[0]
  }

  render() {
    return (
      <div className="App">
       <Header />
       <Video video={this.state.video}/>
       <Description video={this.state.video}/>
      </div>
    );
  }
}

export default App;
