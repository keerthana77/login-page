import { Link } from 'react-router-dom';
import { useState } from "react";
import { menuItems } from "../../util/Constants/menuItems";
import './Navbar.scss';

const Navbar = () => {
    const [subMenuIndex, setSubMenuIndex] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isCollapse, setIsCollapse] = useState(false);
    return (
        <section className={`navbar ${isCollapse? 'collapse': ''}`}>
            <div className="navbar__header">
                <div className="navbar__header--icon-wrapper">
                    <span className="navbar__header--icon"></span>
                </div>
                {!isCollapse &&
                    <div className="navbar__header--title">
                        <span className="navbar__header--title-name">Edge Management</span>
                        <span className="navbar__header--title-sub">Medium</span>
                    </div>
                }
            </div>
            <ul className='navbar__list'>
                {menuItems.map((menu, index) => {
                    return (
                        <li className={`navbar__list--item ${activeIndex === index ? 'active': ''} ${isCollapse ? 'justify-center': ''}`} key={index} onClick={() => {setSubMenuIndex(index); setActiveIndex(index)}} onMouseEnter={() => setSubMenuIndex(index)} onMouseLeave={() => setSubMenuIndex(null)}>
                            <img src={`${activeIndex === index ? menu.activeIcon: menu.iconurl}`} alt={menu.title} />
                            <span>
                                {!isCollapse && <Link to={menu?.url}>{menu.title}</Link>}
                            </span>
                            {menu.submenus ? (
                                <ul className={`navbar__sublist ${subMenuIndex === index ? 'show' : ''}`}>
                                    {menu.submenus.map((submenu, index) => {
                                        return (
                                            <li className='navbar__sublist--item' key={index}>
                                                <Link to={submenu.url}>{submenu.title}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            ) : ''}
                        </li>
                    )
                })}
            </ul>
            <div className='navbar__collapse' onClick={() => setIsCollapse((prev) => !prev)}>
                <span className='navbar__collapse--icon'></span>
                {!isCollapse && <span className='navbar__collapse--text'>Collapse sidebar</span> }
            </div>
        </section>
    )
}

export default Navbar;