import { navItemsDesktop } from "~/constants";

function LeftSidebar() {
    return (
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
                    {navItemsDesktop.map((item, index) => (
                        <button
                            key={index}
                            className="flex items-center space-x-4 p-3 hover:bg-gray-900 rounded-full"
                        >
                            {item.svg}
                            <span className="text-xl">{item.label}</span>
                        </button>
                    ))}
                </nav>

                {/* Post Button */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-6 text-lg font-bold">
                    Post
                </button>
            </div>
        </div>
    );
}

export default LeftSidebar;
