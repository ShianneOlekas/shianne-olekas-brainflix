import './NextVideo.scss'

function NextVideo({ nextVideo }) {
    const videos = nextVideo.map((video) => (
        <div className='next-videos' >
           <img className='next-videos__img' src={video.image} alt=''/>
            <div className='next-info' >
                <h3 className='next-info__title' >{video.title}</h3>
                <p className='next-info__channel'>{video.channel}</p>
            </div>
        </div>
        ))

    return (
        <section className='video-list'>
            <h3 className='video-list__title' >NEXT VIDEO</h3>
            {videos}
        </section>
    );
}

export default NextVideo;