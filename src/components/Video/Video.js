import './Video.scss'

function Video({ video }) {
    return (
        <video poster={video.image} className='video' controls></video>
    );
}

export default Video;