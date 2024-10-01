import React from 'react';

function Experience() {
    return (
        <div className="container mx-auto my-10 p-6 max-w-4xl border border-gray-300 rounded-lg shadow-lg">
            <h1 className="text-center text-3xl font-bold mb-10">Professional Experiences</h1>

            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <img src="https://via.placeholder.com/100x150" alt="Placeholder" className="w-2.5 h-2.5" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Director at Feel Group</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Current</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Overseeing all strategic operations, responsible for driving company growth, leading cross-functional teams, and mentoring future leaders. Collaborated with stakeholders to optimize business strategies.</p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <img src="https://via.placeholder.com/100x150" alt="Placeholder" className="w-2.5 h-2.5" />
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Senior Manager at Feel Group</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Led the management team, playing a pivotal role in key business decisions. Drove initiatives that increased operational efficiency and fostered company culture improvements.</p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <img src="https://via.placeholder.com/100x150" alt="Placeholder" className="w-2.5 h-2.5" />
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Manager at Feel Restaurant</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Managed multiple teams, implemented improved workflows, and coordinated with departments to ensure smooth day-to-day operations. Helped expand the company's service offerings.</p>
                </li>
                <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <img src="https://via.placeholder.com/100x150" alt="Placeholder" className="w-2.5 h-2.5" />
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Server at Feel Restaurant</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Began career in an entry-level role, consistently delivering excellent customer service and demonstrating a strong work ethic. Gained foundational skills in business operations and leadership.</p>
                </li>
            </ol>
        </div>
    );
}

export default Experience;
