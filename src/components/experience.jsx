import React from 'react';

function Experience() {
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-center text-3xl font-bold mb-10">Experience Section</h1>

            {/* Grid to handle timeline and images */}
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li className="flex">
                    <div className="w-1/2 flex justify-end items-center">
                        <div className="w-24 h-24 bg-gray-500 flex items-center justify-center">
                            <span className="text-white">Image</span>
                        </div>
                    </div>
                    <div className="timeline-middle text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="w-1/2 mb-10 text-end">
                        <time className="font-mono italic">1984</time>
                        <div className="text-lg font-black">Macintosh</div>
                        <p>The first Macintosh revolutionized personal computing.</p>
                    </div>
                </li>

                <li className="flex flex-row-reverse">
                    <div className="w-1/2 flex justify-start items-center">
                        <div className="w-24 h-24 bg-gray-500 flex items-center justify-center">
                            <span className="text-white">Image</span>
                        </div>
                    </div>
                    <div className="timeline-middle text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="w-1/2 mb-10 text-start">
                        <time className="font-mono italic">1998</time>
                        <div className="text-lg font-black">iMac</div>
                        <p>The iMac changed desktop design forever.</p>
                    </div>
                </li>

                <li className="flex">
                    <div className="w-1/2 flex justify-end items-center">
                        <div className="w-24 h-24 bg-gray-500 flex items-center justify-center">
                            <span className="text-white">Image</span>
                        </div>
                    </div>
                    <div className="timeline-middle text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="w-1/2 mb-10 text-end">
                        <time className="font-mono italic">2001</time>
                        <div className="text-lg font-black">iPod</div>
                        <p>iPod brought music to millions.</p>
                    </div>
                </li>

                <li className="flex flex-row-reverse">
                    <div className="w-1/2 flex justify-start items-center">
                        <div className="w-24 h-24 bg-gray-500 flex items-center justify-center">
                            <span className="text-white">Image</span>
                        </div>
                    </div>
                    <div className="timeline-middle text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="w-1/2 mb-10 text-start">
                        <time className="font-mono italic">2007</time>
                        <div className="text-lg font-black">iPhone</div>
                        <p>The iPhone redefined mobile technology.</p>
                    </div>
                </li>

                <li className="flex">
                    <div className="w-1/2 flex justify-end items-center">
                        <div className="w-24 h-24 bg-gray-500 flex items-center justify-center">
                            <span className="text-white">Image</span>
                        </div>
                    </div>
                    <div className="timeline-middle text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="w-1/2 mb-10 text-end">
                        <time className="font-mono italic">2015</time>
                        <div className="text-lg font-black">Apple Watch</div>
                        <p>Apple Watch merged fitness with smart tech.</p>
                    </div>
                </li>
            </ul>

        </div>
    );
}

export default Experience;
