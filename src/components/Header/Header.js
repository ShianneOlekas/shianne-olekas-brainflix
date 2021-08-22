import './Header.scss';
import logo from '../../Assets/Logo/Logo-brainflix.svg';
import search from '../../Assets/Icons/Icon-search.svg';
import upload from '../../Assets/Icons/Icon-upload.svg';
import avatar from '../../Assets/Images/Mohan-muruge.jpg';

function Header() {
    return (
        <header className='header'>
            <img className='header__img' src={logo} alt=''/>
            <div className='header__search' >
                <img className='header__search-img' src={search} alt=''/>
                <input className='header__search-bar' placeholder='Search'/>
            </div>
            <div className='header__upload'>
                <div className='header__upload-button'>
                    <img className='header__upload-logo' src={upload} alt=''/> 
                    <p>UPLOAD</p>
                </div>
                <img className='header__upload-img' src={avatar} alt=''/>
            </div>
        </header>
    );
}

export default Header;