function RightSidebar() {
    return (
        <div className="hidden lg:block lg:w-80 xl:w-96 p-4 border-l border-gray-800">
            {/* Search Bar */}
            <div className="bg-gray-900 rounded-full p-3 mb-4">
                <div className="flex items-center space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
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
    )
}

export default RightSidebar
