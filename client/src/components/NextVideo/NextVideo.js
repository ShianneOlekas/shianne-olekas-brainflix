import './NextVideo.scss'
import { Link } from 'react-router-dom';

function NextVideo({ nextVideos }) {

    const videoRendered = nextVideos?.map((nextVideo) => (
        <Link to={`/videos/${nextVideo.id}`} key={nextVideo.id}>
            <div className='next-videos' >
                <img className='next-videos__img' src={nextVideo.image} alt=''/>
                <div className='next-info' >
                    <h3 className='next-info__title' >{nextVideo.title}</h3>
                    <p className='next-info__channel'>{nextVideo.channel}</p>
                </div>
            </div>
        </Link>
        ))

    return (
        <section className='video-list'>
            <h3 className='video-list__title' >NEXT VIDEO</h3>
                {videoRendered}
        </section>
    );
}

export default NextVideo;