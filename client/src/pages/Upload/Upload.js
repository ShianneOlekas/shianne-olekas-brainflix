import thumbnail from '../../Assets/Images/Upload-video-preview.jpg'
import './Upload.scss';

function Upload(props) {
  const submitForm = (e) => {
    e.preventDefault()
    alert('Uploading your super awesome video...')
    props.history.push('/'); 
  }

    return (
      <main className='main'>
        <h1 className='main__title'>Upload Video</h1>
        <section className='main__upload-area'>
          <div className='thumbnail'>
            <p className='thumbnail__title'>VIDEO THUMBNAIL</p>
            <img className='thumbnail__image' alt='' src={thumbnail}/>
          </div>
          <form className='upload' onSubmit={submitForm}>
            <label className='upload__label' htmlFor='title'>TITLE OF YOUR VIDEO</label>
            <input className='upload__title-input' type='text' name='title' id='title' placeholder='Add a title to your video'></input>
            <label className='upload__label' htmlFor='description'>ADD A VIDEO DESCRIPTION</label>
            <textarea className='upload__description-input' type='text' name='description' id='description' placeholder='Add a description to your video'></textarea>
            <div className='button'>
              <button className='button__publish' type='submit'>PUBLISH</button>
              <button className='button__cancel'>CANCEL</button>
          </div>
          </form>
        </section>
      </main>
    );
}

export default Upload;