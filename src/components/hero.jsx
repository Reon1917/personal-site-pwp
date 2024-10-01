import React from 'react';

function Hero() {
    return (
        <div className="hero bg-base-200 min-h-screen flex flex-col items-center justify-center text-center">
            {/* Profile picture */}
            <div className="mb-3">
                <img
                    src="https://via.placeholder.com/300" /* Placeholder image for a professional profile */
                    alt="Profile"
                    className="w-40 h-40 object-cover rounded-full shadow-2xl" /* Circular profile picture */
                />
            </div>

            {/* Text content */}
            <div className="max-w-2xl">
                <h1 className="text-5xl font-bold">Mr. Pyae Wai Phyo</h1>
                <h2 className="text-xl text-gray-600 font-semibold mt-2">Director, <span className='text-customGreen'>Feel Group</span></h2>
                <p className="py-6">
                    Mr. Pyae Wai Phyo is an experienced professional with over a decade of expertise in business management, operations, and strategic planning. As the Director of Feel Group, he has played a key role in driving organizational growth and innovation, overseeing successful projects, and ensuring operational excellence. His leadership style is rooted in collaboration, and he is passionate about developing future leaders within the industry.
                </p>
            </div>
        </div>
    );
}

export default Hero;
