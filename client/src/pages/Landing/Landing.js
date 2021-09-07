import Video from '../../components/Video/Video';
import Description from '../../components/Description/Description';
import Comments from '../../components/Comments/Comments';
import NextVideo from '../../components/NextVideo/NextVideo';
import { Component } from 'react';
import axios from 'axios';

class Landing extends Component {
  state = {
    video: [],
    nextVideos: [],
  }

  getVideoId(id) {
    axios
    .get(`http://localhost:8080/videos/${id}`)
    .then((response) => {
        this.setState({
          video: response.data
        });
    });
  }

  getVideo = () => {
    if (this.props.match.params.id) {
        this.getVideoId(this.props.match.params.id);
    } else {
        axios
        .get('http://localhost:8080/videos')
        .then((response) => {
            this.getVideoId(response.data[0].id);
        });
    }
  };

  componentDidMount() {
    axios
    .get('http://localhost:8080/videos')
    .then((response) => {
      console.log(response);
      if(response.status === 200) {
        return this.setState({
          nextVideos: response.data
        });
      }
    })
    this.getVideo()
  }
 

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
        this.getVideo();
    }
}

  render() {
    if (this.state.nextVideos.length === 0 || this.state.video.length === 0) {
      return <p>loading</p>
    }

    const removeVideo = this.state.nextVideos.filter(
      (video) => video.id !== this.state.video.id
    );

    return (
      <div>
       <Video video={this.state.video} />
       <main className='all-video-info'>
         <article className='description-comments'>
          <Description video={this.state.video}/> 
          <Comments video={this.state.video} />
        </article>
       <NextVideo nextVideos={removeVideo}/>
       </main>
      </div>
    );
  }
}

export default Landing;