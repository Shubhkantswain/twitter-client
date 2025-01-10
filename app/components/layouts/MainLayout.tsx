import React, { useState, useEffect } from 'react';
import { Home, Search, Bell, Mail, User } from 'lucide-react';
import LeftSidebar from '../_TwitterLayout/LeftSidebar';
import MainHeader from '../_TwitterLayout/MainHeader';
import RightSidebar from '../_TwitterLayout/RightSidebar';
import MobileNavigationFooter from '../_TwitterLayout/MobileNavigationFooter';

const TwitterLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Main container */}
            <div className="flex h-screen">
                {/* Left Sidebar - Hidden on mobile */}
                <LeftSidebar />

                {/* Main Content Area */}
                <main className="flex-1 min-w-0 relative">
                    {/* Header - Visible on mobile */}
                    <MainHeader />

                    {/* Scrollable Content */}
                    <div
                        data-scroll-container
                        className="h-[calc(100vh-8rem)] md:h-[calc(100vh-3.5rem)] overflow-y-auto pb-16 md:pb-0"
                    >
                        {children}
                    </div>
                </main>

                {/* Right Sidebar - Hidden on mobile */}
                <RightSidebar />
            </div>

            {/* Mobile Navigation Footer */}
            <MobileNavigationFooter />
        </div>
    );
};

export default TwitterLayout;