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

 // to find the video that is clicked on which is then filtered out in the NextVideo component 
  findNextVideo = (selected) => {
    const foundVideo = videoDetails.find((video) => selected === video.id);
    this.setState({
      video: foundVideo,
    });
  };

  render() {
    return (
      <div className="App">
       <Header />
       <Video video={this.state.video} />
       <main className='all-video-info'>
         <article className='description-comments'>
          <Description video={this.state.video} />
          <Comments video={this.state.video} />
        </article>
       <NextVideo nextVideo={this.state.nextVideo} selectedVideo={this.findNextVideo} video={this.state.video}/>
       </main>
      </div>
    );
  }
}

export default App;
