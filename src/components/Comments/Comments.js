import avatar from '../../Assets/Images/Mohan-muruge.jpg';
import { timestamp } from '../../Utils/timestamp';
import '../Comments/Comments.scss'

function Comments({ video }) {

    const comment = video.comments.map((data) => (
        <div className='rendered-comments'>
            <img className='rendered-comments__avatar' alt=''/>
            <div>
                <div className='comment-data'>
                    <h4 className='comment-data__name'>{data.name}</h4>
                    <p className='comment-data__date'>{timestamp(data.timestamp)}</p>
                </div>
                <p className='comment-info'>{data.comment}</p>
            </div>
        </div>
        ))

    return (
        <section className='comment-section'>
            <h2 className='comment-section__title'>3 Comments</h2>
            <div className='form'>
                <img className='form__avatar' src={avatar} alt=''/>
                <form className='comment-input'>
                    <label className='comment-input__label' htmlFor='comments'>JOIN THE CONVERSATION</label>
                    <textarea type='text' name='comments' id='comments' className='comment-input__text' placeholder='Write comment here'></textarea>
                    <button className='comment-input__button'>COMMENT</button>
                </form>
            </div>
            <article>
                {comment}
            </article>
        </section>
    );
}

export default Comments;