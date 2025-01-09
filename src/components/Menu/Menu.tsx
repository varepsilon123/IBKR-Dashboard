import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [activePage, setActivePage] = useState('home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handlePageChange = (page: string) => {
        setActivePage(page);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            {isOpen && (
                <div className="absolute top-0 left-0 h-full w-64 mt-12">
                    <ul className="flex flex-col">
                        <li onClick={() => handlePageChange('home')} className="p-4 hover:bg-gray-500">Home</li>
                        <li onClick={() => handlePageChange('authCheck')} className="p-4 hover:bg-gray-500">Auth Check</li>
                    </ul>
                </div>
            )}
            {activePage === 'authCheck' && (
                <div>
                    <h2>Auth Check Placeholder Page</h2>
                    <p>This is a placeholder for the Auth Check component.</p>
                </div>
            )}
        </div>
    );
}

export default Menu;
