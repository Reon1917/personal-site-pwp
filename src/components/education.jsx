import React from "react";

function Education() {
    return (
        <div className="container mx-auto my-10 p-6 max-w-4xl border border-gray-300 rounded-lg shadow-lg">
            <h1 className="text-center text-3xl font-bold mb-10">Educational Background</h1>
            <ul className="space-y-4  list-none">
                <li>
                    <h4 className="font-semibold text-lg">B.Sc (Mathematics)</h4>
                    <p className="text-sm">Yangon University</p>
                    <span className="text-sm text-gray-500">2002</span>
                </li>
                <li>
                    <h4 className="font-semibold text-lg">Food Service study course and The Workshop On Food Service Corporation Activies for Myanmar</h4>
                    <p className="text-sm">Tokyo</p>
                    <span className="text-sm text-gray-500">2014</span>
                </li>
                <li>
                    <h4 className="font-semibold text-lg">Mix Franchise Restaurant Management training</h4>
                    <p className="text-sm">Thailand</p>
                    <span className="text-sm text-gray-500">2014</span>
                </li>
                <li>
                    <h4 className="font-semibold text-lg">Miami Franchise Restaurant Management training</h4>
                    <p className="text-sm">Florida, USA</p>
                    <span className="text-sm text-gray-500">2015</span>
                </li>
                <li>
                    <h4 className="font-semibold text-lg">The Workshop On Service Business Management (NETI & HIDA JAPAN)</h4>
                    <p className="text-sm">Yangon (ENMSK)</p>
                    <span className="text-sm text-gray-500">2016</span>
                </li>
                <li>
                    <h4 className="font-semibold text-lg">Franchise And Branding Fundamentals Course Taught by Myanmar Institute of Business and FT Consulting Singapore</h4>
                    <p className="text-sm">Yangon</p>
                    <span className="text-sm text-gray-500">2016</span>
                </li>
                <li>
                    <h4 className="font-semibold text-lg">Food Production Management Course (Panyapiwat Institue of Management Thailand)</h4>
                    <p className="text-sm">Thailand</p>
                    <span className="text-sm text-gray-500">2016</span>
                </li>
                <li>
                    <h4 className="font-semibold text-lg">The Workshop On Service Business Management For Myanmar (ENMS)</h4>
                    <p className="text-sm">Japan</p>
                    <span className="text-sm text-gray-500">2017</span>
                </li>
            </ul>
        </div>
    );
}

export default Education;