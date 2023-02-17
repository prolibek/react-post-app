import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/context';

const TopNavbar = () => {
    const {loggedIn, setLoggedIn} = useContext(AuthContext);

    const logout = () => {
        setLoggedIn(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className='top-navbar__wrapper'>
            <ul className='top-navbar'>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {
                    loggedIn
                    ? 
                    <li>
                        <Link onClick={() => logout()}>Sign Out</Link>
                    </li>
                    :
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                }
            </ul>
        </div>
    )
}

export default TopNavbar;