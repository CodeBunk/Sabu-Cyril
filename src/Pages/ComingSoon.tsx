import React from 'react';

const ComingSoon = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-pulse">
                🚧 Coming Soon
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
                We’re working hard to bring something awesome. Stay tuned!
            </p>
            <div className="text-white text-sm opacity-50">
                &copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.
            </div>
        </div>
    );
};

export default ComingSoon;
