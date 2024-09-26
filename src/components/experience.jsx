import React from 'react';

function Experience() {
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-center text-3xl font-bold mb-10">Experience Section</h1>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li className="flex">
                    <div className="w-1/2 flex justify-end items-center">
                        <img src="https://img.freepik.com/premium-photo/full-shot-girl-learning-math-school_23-2150470852.jpg?" alt="Placeholder" className="h-30 w-40" />
                    </div>
                    <div className="w-1/2 mb-10 text-end">
                        <time className="font-mono italic">1984</time>
                        <div className="text-lg font-black">Macintosh</div>
                        <p>The first Macintosh revolutionized personal computing.</p>
                    </div>
                </li>

                <li className="flex flex-row-reverse">
                    <div className="w-1/2 flex justify-start items-center">
                        <img src="https://via.placeholder.com/100x150" alt="Placeholder" className="h-24 w-24" />
                    </div>
                    <div className="w-1/2 mb-10 text-start">
                        <time className="font-mono italic">1998</time>
                        <div className="text-lg font-black">iMac</div>
                        <p>The iMac changed desktop design forever.</p>
                    </div>
                </li>

                <li className="flex">
                    <div className="w-1/2 flex justify-end items-center">
                        <img src="https://via.placeholder.com/100x150" alt="Placeholder" className="h-24 w-24" />
                    </div>
                    <div className="w-1/2 mb-10 text-end">
                        <time className="font-mono italic">2001</time>
                        <div className="text-lg font-black">iPod</div>
                        <p>iPod brought music to millions.</p>
                    </div>
                </li>

                <li className="flex flex-row-reverse">
                    <div className="w-1/2 flex justify-start items-center">
                        <img src="https://via.placeholder.com/100x150" alt="Placeholder" className="h-24 w-24" />
                    </div>
                    <div className="w-1/2 mb-10 text-start">
                        <time className="font-mono italic">2007</time>
                        <div className="text-lg font-black">iPhone</div>
                        <p>The iPhone redefined mobile technology.</p>
                    </div>
                </li>

                <li className="flex">
                    <div className="w-1/2 flex justify-end items-center">
                        <img src="https://via.placeholder.com/100x150" alt="Placeholder" className="h-24 w-24" />
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