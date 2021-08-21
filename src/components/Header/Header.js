import './Header.scss';
import Logo from '../../Assets/Logo/Logo-brainflix.svg';
import Search from '../../Assets/Icons/Icon-search.svg';
import Upload from '../../Assets/Icons/Icon-upload.svg';
import Avatar from '../../Assets/Images/Mohan-muruge.jpg';

function Header() {
    return (
        <header className='header'>
            <img className='header__img' src={Logo} alt=''/>
            <div className='header__search' >
                <img className='header__search-img' src={Search} alt=''/>
                <input className='header__search-bar' placeholder='Search'/>
            </div>
            <div className='header__upload'>
                <div className='header__upload-button'>
                    <img className='header__upload-logo' src={Upload} alt=''/> <p>UPLOAD</p>
                </div>
                <img className='header__upload-img' src={Avatar} alt=''/>
            </div>
        </header>
    );
}

export default Header;