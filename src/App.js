import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import Description from './components/Description/Description';
import Comments from './components/Comments/Comments';
import NextVideo from './components/NextVideo/NextVideo';
import videoDetails from './Data/video-details.json';
import videos from './Data/videos.json';
import { Component } from 'react';

class App extends Component {
  state = {
    video: videoDetails[0],
    nextVideo: videos
  }

  render() {
    return (
      <div className="App">
       <Header />
       <Video video={this.state.video} />
       <Description video={this.state.video} />
       <Comments video={this.state.video} />
       <NextVideo nextVideo={this.state.nextVideo} />
      </div>
    );
  }
}

export default App;
