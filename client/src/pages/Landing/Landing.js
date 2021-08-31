import Video from '../../components/Video/Video';
import Description from '../../components/Description/Description';
import Comments from '../../components/Comments/Comments';
import NextVideo from '../../components/NextVideo/NextVideo';
import { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../../Utils/api'

class Landing extends Component {
  state = {
    video: [],
    nextVideos: [],
  }

  getVideoId(id) {
    axios
    .get(`https://project-2-api.herokuapp.com/videos/${id}${API_KEY}`)
    .then((response) => {
        this.setState({
          video: response.data,
        });
    });
  }

  getVideo = () => {
    if (this.props.match.params.id) {
        this.getVideoId(this.props.match.params.id);
    } else {
        axios
        .get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
        .then((response) => {
            this.getVideoId(response.data[0].id);
        });
    }
  };

  componentDidMount() {
    axios
    .get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
    .then((response) => {
      this.setState({
        nextVideos: response.data
      });
    })
    this.getVideo()
  }
 

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
        this.getVideo();
    }
}

  render() {
    if (this.state.nextVideos === undefined) {
      return <p>video does not exist</p>
    }

    if (this.state.video === undefined) {
      return <p>video does not exist</p>
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