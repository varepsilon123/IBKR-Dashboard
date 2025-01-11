import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { key: 'home', label: 'Home', path: '/' },
        { key: 'trend', label: 'Trend Identification', path: '/trend' },
      ];

    const menuItemClasses = 'p-4 hover:bg-gray-500 transition-all hover:scale-110';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative z-50">
            <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            {isOpen && (
                <div className="animate-fadeIn absolute top-0 left-0 h-full w-64 mt-12">
                    <ul>
                        {menuItems.map((item) => (
                          <li 
                            key={item.key} 
                            onClick={() => toggleMenu()} 
                            className={menuItemClasses}
                          >
                            <Link to={item.path}>{item.label}</Link>
                          </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Menu;
