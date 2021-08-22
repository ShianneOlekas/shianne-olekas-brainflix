import './NextVideo.scss'

function NextVideo({ video, nextVideo, selectedVideo }) {
    const videos = nextVideo.filter((data) => video.id !== data.id).map((thumbnail) => (
        <div className='next-videos' key={thumbnail.id} onClick={() => {selectedVideo(thumbnail.id) }}>
           <img className='next-videos__img' src={thumbnail.image} alt=''/>
            <div className='next-info' >
                <h3 className='next-info__title' >{thumbnail.title}</h3>
                <p className='next-info__channel'>{thumbnail.channel}</p>
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