import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
  <nav>
    <NavLink to='/' exact className="link" activeClassName="activeLink" >Home</NavLink>
    <NavLink to='/movies' className ="link" activeClassName ="activeLink">Movies</NavLink>
  </nav>
);

export default Navigation;