import likes from '../../Assets/Icons/Icon-likes.svg';
import views from '../../Assets/Icons/Icon-views.svg';
import { timestamp } from '../../Utils/timestamp';
import './Description.scss';

function Description({ video }) {
    return (
        <section className='description'>
            <h1 className='description__title'>{video.title}</h1>
            <div className='description__info-container'>
                <div className='upload-info'>
                    <h2 className='upload-info__channel'>By {video.channel}</h2>
                    <p className='upload-info__date'>{timestamp(video.timestamp)}</p>
                </div>
                <div className='video-info'>
                    <p className='video-info__views'>
                        <img className='video-info__icon' src={views} alt=''></img>
                        {video.views}
                    </p>
                    <p className='video-info__likes'>
                        <img className='video-info__icon' src={likes} alt=''></img>
                        {video.likes}
                    </p>
                </div>
            </div>
            <p className='description__info'>{video.description}</p>
        </section>
    );
}

export default Description;