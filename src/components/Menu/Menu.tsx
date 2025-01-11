import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [activePage, setActivePage] = useState('home');
    const menuItems = [
        { key: 'home', label: 'Home' },
        { key: 'authCheck', label: 'Auth Check' },
      ];

    const menuItemClasses = 'p-4 hover:bg-gray-500 transition-all hover:scale-110';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handlePageChange = (page: string) => {
        setActivePage(page);
        setIsOpen(false);
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
                            onClick={() => handlePageChange(item.key)} 
                            className={menuItemClasses}
                          >
                            {item.label}
                          </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* to-do: call auth check page */}
            {/* {activePage === 'authCheck' && (
                <div>
                    <h2>Auth Check Placeholder Page</h2>
                    <p>This is a placeholder for the Auth Check component.</p>
                </div>
            )} */}
        </div>
    );
}

export default Menu;
