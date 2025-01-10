import React, { useState, useEffect } from 'react';
import { Home, Search, Bell, Mail, User } from 'lucide-react';

const TwitterLayout = ({ children }: {children: React.ReactNode}) => {
    const [activeTab, setActiveTab] = useState('for-you');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            const target = e.target as HTMLElement;
            const scrollTop = target.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        const scrollContainer = document.querySelector('[data-scroll-container]');
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            return () => scrollContainer.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Main container */}
            <div className="flex h-screen">
                {/* Left Sidebar - Hidden on mobile */}
                <div className="hidden md:flex md:w-64 xl:w-72 p-4 border-r border-gray-800">
                    <div className="flex flex-col space-y-4 w-full">
                        {/* Twitter Logo */}
                        <div className="p-2">
                            <svg viewBox="0 0 24 24" className="h-8 w-8 text-white fill-current">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </div>

                        {/* Navigation Items */}
                        <nav className="flex flex-col space-y-2">
                            <button className="flex items-center space-x-4 p-3 hover:bg-gray-900 rounded-full">
                                <Home className="h-7 w-7" />
                                <span className="text-xl">Home</span>
                            </button>
                            <button className="flex items-center space-x-4 p-3 hover:bg-gray-900 rounded-full">
                                <Search className="h-7 w-7" />
                                <span className="text-xl">Explore</span>
                            </button>
                            <button className="flex items-center space-x-4 p-3 hover:bg-gray-900 rounded-full">
                                <Bell className="h-7 w-7" />
                                <span className="text-xl">Notifications</span>
                            </button>
                            <button className="flex items-center space-x-4 p-3 hover:bg-gray-900 rounded-full">
                                <Mail className="h-7 w-7" />
                                <span className="text-xl">Messages</span>
                            </button>
                            <button className="flex items-center space-x-4 p-3 hover:bg-gray-900 rounded-full">
                                <User className="h-7 w-7" />
                                <span className="text-xl">Profile</span>
                            </button>
                        </nav>

                        {/* Post Button */}
                        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-6 text-lg font-bold">
                            Post
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <main className="flex-1 min-w-0 relative">
                    {/* Header - Visible on mobile */}
                    <header className="sticky top-0 z-10">
                        {/* Main Header with blur */}
                        <div className="bg-black/80 backdrop-blur-md border-b border-gray-800">
                            <div className="flex items-center justify-between p-4 md:hidden">
                                <h1 className="text-xl font-bold">Home</h1>
                                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white fill-current">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </div>
                        </div>

                        {/* For You / Following Tabs with blue background when scrolled */}
                        <div className={'transition-colors duration-200 bg-black/80 backdrop-blur-md'}>
                            <div className="flex w-full">
                                <button
                                    className={`flex-1 py-4 text-center relative ${activeTab === 'for-you' ? 'font-bold' : ''
                                        }`}
                                    onClick={() => setActiveTab('for-you')}
                                >
                                    For you
                                    {activeTab === 'for-you' && (
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full" />
                                    )}
                                </button>
                                <button
                                    className={`flex-1 py-4 text-center relative ${activeTab === 'following' ? 'font-bold' : ''
                                        }`}
                                    onClick={() => setActiveTab('following')}
                                >
                                    Following
                                    {activeTab === 'following' && (
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Scrollable Content */}
                    <div
                        data-scroll-container
                        className="h-[calc(100vh-8rem)] md:h-[calc(100vh-3.5rem)] overflow-y-auto pb-16 md:pb-0"
                    >
                        {children}
                    </div>
                </main>

                {/* Right Sidebar - Hidden on mobile */}
                <div className="hidden lg:block lg:w-80 xl:w-96 p-4 border-l border-gray-800">
                    {/* Search Bar */}
                    <div className="bg-gray-900 rounded-full p-3 mb-4">
                        <div className="flex items-center space-x-4">
                            <Search className="h-5 w-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-transparent outline-none flex-1 text-white"
                            />
                        </div>
                    </div>

                    {/* Trending Section */}
                    <div className="bg-gray-900 rounded-2xl p-4">
                        <h2 className="text-xl font-bold mb-4">What's happening</h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="space-y-1">
                                    <p className="text-sm text-gray-500">Trending</p>
                                    <p className="font-bold">Trending Topic {item}</p>
                                    <p className="text-sm text-gray-500">50.4K posts</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Footer */}
            <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 md:hidden">
                <div className="flex justify-around p-4">
                    <button className="p-2">
                        <Home className="h-6 w-6" />
                    </button>
                    <button className="p-2">
                        <Search className="h-6 w-6" />
                    </button>
                    <button className="p-2">
                        <Bell className="h-6 w-6" />
                    </button>
                    <button className="p-2">
                        <Mail className="h-6 w-6" />
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default TwitterLayout;