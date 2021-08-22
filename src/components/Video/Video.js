import './Video.scss'

function Video({ video }) {
    return (
        <video poster={video.image} src='' className='video' controls></video>
    );
}

export default Video;