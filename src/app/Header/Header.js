import { useState } from "react";
import useOutsideClick from "../../util/Hooks/useOutsideClick";
import './Header.scss';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const closeDropdown = () => {
        setShowDropdown(false);
    }

    const dropdownRef = useOutsideClick(closeDropdown);

    return (
        <header className='header'>
            <div className='header__logo'>
                <span className="header__logo--icon"></span>
            </div>
            <div className="header__right">
                <div ref={dropdownRef} className="header__locale" onClick={() => setShowDropdown((prevState) => !prevState)}>
                    <span className="header__locale--name">EN</span>
                    <span className="header__locale--dropdown-icon"></span>
                    <ul className={`header__locale--dropdown-content ${showDropdown ? 'show' : ''}`}>
                        <li>EN</li>
                        <li>JP</li>
                        <li>CN</li>
                    </ul>
                </div>
                <div className='header__user'>
                    <span className="header__user--icon"></span>
                    <div className="header__user--name">Keerthana Kanagasundaram</div>
                </div>
            </div>
            
        </header>
    )
}

export default Header;