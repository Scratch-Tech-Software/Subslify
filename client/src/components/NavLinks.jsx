import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const NavLinks = ({ toggleSidebar }) => {
  // const { toggleSidebar } = useAppContext();
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { id, path, text } = link;
        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
