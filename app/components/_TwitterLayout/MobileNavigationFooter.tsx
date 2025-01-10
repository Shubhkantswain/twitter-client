import { Bell, Home, Mail, Search } from 'lucide-react';
import React from 'react';
import { navItemsMobile } from '~/constants';

function MobileNavigationFooter() {


    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 md:hidden">
            <div className="flex justify-around p-4">
                {navItemsMobile.map((item, index) => (
                    <button key={index} className="p-2" aria-label={item.label}>
                        {item.svg}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default MobileNavigationFooter;
