import { useState } from "react";
import ProfileSidebar from "../_home/ProfileSidebar";

function MainHeader() {
    const [activeTab, setActiveTab] = useState('for-you');
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <header className="sticky top-0 z-10">
                {/* Main Header with blur */}
                <div className="bg-black/80 backdrop-blur-md border-b border-gray-800">
                    <div className="flex items-center justify-between p-4 md:hidden">
                        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white fill-current">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <div onClick={() => setSidebarOpen(true)}>

                            <img
                                src="https://via.placeholder.com/40"
                                alt="Avatar"
                                className="h-9 w-9 rounded-full object-cover border border-gray-800"
                            />
                        </div>
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

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Responsive Sidebar */}
            <ProfileSidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

        </>
    )
}

export default MainHeader
