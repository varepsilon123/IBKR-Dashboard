import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { key: 'home', label: 'Home', path: '/' },
        { key: 'trend', label: 'Trend Identification', path: '/trend' },
      ];

    const menuItemClasses = 'p-4 hover:bg-gray-600 text-gray-400 hover:text-gray-300 transition-all hover:scale-110';

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
                            <Link to={item.path}>
                                <li 
                                  key={item.key} 
                                  onClick={() => toggleMenu()} 
                                  className={menuItemClasses}
                                >
                                  {item.label}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Menu;
