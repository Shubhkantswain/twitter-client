import React from 'react'

type ProfileSidebarProps = {
    isSidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProfileSidebar({ isSidebarOpen, setSidebarOpen }: ProfileSidebarProps) {

    return (

        <div
            className={`fixed top-0 right-0 h-full bg-black shadow-lg z-30 transform transition-transform duration-300 ease-in-out
            w-full sm:w-96 md:w-80 lg:w-72 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Profile</h2>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Sidebar Content */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <img
                            src="/api/placeholder/48/48"
                            alt="User avatar"
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h3 className="font-medium">User Name</h3>
                            <p className="text-sm text-gray-600">@username</p>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <nav className="space-y-2">
                        {['Profile', 'Settings', 'Help', 'Logout'].map((item) => (
                            <button
                                key={item}
                                className="w-full p-3 text-left hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default ProfileSidebar

