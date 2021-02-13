import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navs = [
        { text: "About", href: "#about" },
        { text: "Experience", href: "#experience" },
        { text: "Blogs", href: "#blogs" },
    ];

    const selectTheme = (val) => {
        localStorage.setItem('theme', val);
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
        if (val === "dark") {
            document.querySelector('html').classList.remove('light')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    };

    useEffect(() => {
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
    }, []);

    return (
        <nav>
            <header>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex justify-between items-center px-6 py-9">
                        <div className="flex items-center">
                            <Link href="#"><a className="text-4xl text-primary dark:text-white font-bold font-core container px-4">R.</a></Link>


                            <motion.button whileTap={{ scale: 1.3 }} onClick={() => selectTheme('dark')} className="focus:outline-none mr-3">
                                <svg width={43} height={43} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.8824 21.5C22.8824 23.4125 23.6239 25.1421 24.4621 26.5704C25.0986 27.6551 25.8663 28.682 26.4912 29.518C26.678 29.7678 26.852 30.0005 27.0059 30.2127C27.2394 30.5345 27.4221 30.801 27.5583 31.0233C27.2976 31.0543 26.9471 31.0758 26.4846 31.0758C19.5963 31.0758 14.5303 26.5288 14.5303 21.5C14.5303 16.4712 19.5963 11.9243 26.4846 11.9243C26.9471 11.9243 27.2976 11.9457 27.5583 11.9767C27.4221 12.199 27.2394 12.4655 27.0059 12.7873C26.852 12.9995 26.678 13.2322 26.4912 13.482C25.8663 14.318 25.0986 15.3449 24.4621 16.4296C23.6239 17.8579 22.8824 19.5875 22.8824 21.5ZM27.8234 31.555C27.8233 31.555 27.8229 31.5533 27.8223 31.55C27.8232 31.5534 27.8235 31.5551 27.8234 31.555ZM27.8234 11.445C27.8235 11.4449 27.8232 11.4466 27.8223 11.4501C27.8229 11.4467 27.8233 11.445 27.8234 11.445Z" fill="#727272" fillOpacity="0.56" stroke="#727272" strokeWidth={3} />
                                    <circle cx="21.5" cy="21.5" r={19} stroke="#727272" strokeWidth={5} />
                                </svg>
                            </motion.button>

                            <motion.button whileTap={{ scale: 1.3 }} onClick={() => selectTheme('light')} className="focus:outline-none">
                                <svg width={43} height={43} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="21.5" cy="21.5" r={19} stroke="#727272" strokeWidth={5} />
                                    <g clipPath="url(#clip0)">
                                        <path d="M22 16.5C19.5203 16.5 17.5 18.5203 17.5 21C17.5 23.4797 19.5203 25.5 22 25.5C24.4797 25.5 26.5 23.4797 26.5 21C26.5 18.5203 24.4797 16.5 22 16.5ZM33.55 20.2734L29.1109 18.0562L30.6812 13.35C30.8922 12.7125 30.2875 12.1078 29.6547 12.3234L24.9484 13.8938L22.7266 9.45C22.4266 8.85 21.5734 8.85 21.2734 9.45L19.0562 13.8891L14.3453 12.3188C13.7078 12.1078 13.1031 12.7125 13.3187 13.3453L14.8891 18.0516L10.45 20.2734C9.85 20.5734 9.85 21.4266 10.45 21.7266L14.8891 23.9437L13.3187 28.6547C13.1078 29.2922 13.7125 29.8969 14.3453 29.6813L19.0516 28.1109L21.2687 32.55C21.5687 33.15 22.4219 33.15 22.7219 32.55L24.9391 28.1109L29.6453 29.6813C30.2828 29.8922 30.8875 29.2875 30.6719 28.6547L29.1016 23.9484L33.5406 21.7313C34.15 21.4266 34.15 20.5734 33.55 20.2734V20.2734ZM26.2422 25.2422C23.9031 27.5813 20.0969 27.5813 17.7578 25.2422C15.4187 22.9031 15.4187 19.0969 17.7578 16.7578C20.0969 14.4187 23.9031 14.4187 26.2422 16.7578C28.5812 19.0969 28.5812 22.9031 26.2422 25.2422Z" fill="#D8DA79" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width={24} height={24} fill="white" transform="translate(10 9)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </motion.button>

                        </div>
                        <div>
                            <motion.button whileTap={{ scale: 1.3 }} className="focus:outline-none block lg:hidden" onClick={() => setOpen(!open)}>

                                {open ?
                                    <button className="focus:outline-none">
                                        <svg width={38} height={38} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="28.7071" y1="15.7071" x2="14.565" y2="29.8492" stroke="#333333" stroke-width="2" />
                                            <line x1="29.2929" y1="29.7071" x2="15.1508" y2="15.565" stroke="#333333" stroke-width="2" />
                                            <circle cx="21.5" cy="21.5" r="21" stroke="#333333" />
                                            <circle cx="21.5" cy="21.5" r="16" stroke="#333333" />
                                        </svg>
                                    </button>

                                    :
                                    <button className="focus:outline-none">
                                        <svg width={38} height={38} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x={10} y={13} width={24} height={3} fill="#333333" />
                                            <rect x={10} y={27} width={24} height={3} fill="#333333" />
                                            <rect x={10} y={20} width={24} height={3} fill="#333333" />
                                            <circle cx="21.5" cy="21.5" r={21} stroke="#333333" />
                                        </svg>
                                    </button>


                                }

                            </motion.button>
                        </div>
                    </div>
                    <div className={`${open ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row justify-end w-full mt-0 lg:mt-7`}>
                        <div className="flex flex-col lg:flex-row dark:text-white">
                            {navs.map((nav, index) => (
                                <div key={index}>
                                    <Link href={nav.href}><a className="block text-lg px-7 py-4 lg:px-14 font-bold font-core items-center">{nav.text}</a></Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        </nav>
    )
}
