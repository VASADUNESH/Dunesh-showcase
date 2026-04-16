import dayjs from 'dayjs';
import logo from '../../public/images/logo.svg';
import { navIcons, navLinks } from '../constants';


const Navbar = () => {
    return (
        <nav>
            <div>
                {/* Reference the public path directly as a string */}
                <img src={logo} alt="Logo" />
                <p>Dunesh's Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name }) => (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`Icon ${id}`} />
                        </li>
                    ))}
                </ul>
                <time>{dayjs().format('ddd MMM D: h:mm A')}</time>
            </div>
        </nav>
    );
};

export default Navbar;