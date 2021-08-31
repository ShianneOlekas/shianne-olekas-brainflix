import './Header.scss';
import logo from '../../Assets/Logo/Logo-brainflix.svg';
import search from '../../Assets/Icons/Icon-search.svg';
import upload from '../../Assets/Icons/Icon-upload.svg';
import avatar from '../../Assets/Images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <Link to='/' className='header__link'><img className='header__img' src={logo} alt=''/></Link>
            <div className='header__search' >
                <img className='header__search-img' src={search} alt=''/>
                <input className='header__search-bar' placeholder='Search'/>
            </div>
            <div className='header__upload'>
                <Link to='/upload' className='header__upload-link'>
                    <div className='header__upload-button'>
                        <img className='header__upload-logo' src={upload} alt=''/> 
                        <p>UPLOAD</p>
                    </div>
                </Link>
                <img className='header__upload-img' src={avatar} alt=''/>
            </div>
        </header>
    );
}

export default Header;