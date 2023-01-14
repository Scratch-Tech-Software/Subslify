import links from '../utils/links';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { id, path, text } = link;
        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'active nav-link' : 'nav-link'
            }
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
