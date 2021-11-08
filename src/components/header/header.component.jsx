import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header.component.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg';


const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            {
                currentUser ? (
                    <div 
                        className='option' 
                        onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) :
                <Link to='/signin' className='option'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ?
            null :
            <CartDropdown/>
        }
    </div>
);

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})
// export default Header;
export default connect(mapStatetoProps)(Header);