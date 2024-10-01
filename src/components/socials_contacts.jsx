import React from 'react';

function SocialsContacts() {
    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-center text-2xl font-bold mb-6">Socials & Contacts</h1>
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <div className="flex flex-col items-center gap-6">
                    {/* Contact details */}
                    <div className="text-center">
                        <p className="text-lg font-semibold">Phone Numbers</p>
                        <p>Myanmar: +95 XXX XXX XXX</p>
                        <p>Thailand: +66 XXX XXX XXX</p>
                    </div>

                    {/* Social media links */}
                    <div className="grid grid-flow-col gap-8">
                        {/* Facebook */}
                        <a href="https://placeholder-link.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                                </path>
                            </svg>
                        </a>
                    </div>

                    {/* Developer info */}
                    <div>
                        <p>
                            Developed by{' '}
                            <a
                                href="https://github.com/Reon1917"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-blue-500 hover:underline">
                                Lin Myat Phyo
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default SocialsContacts;
