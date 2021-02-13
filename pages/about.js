import { motion } from 'framer-motion';
export default function about() {
    return (
        <section id="about">
            <div className="container mx-auto py-28">
                <div className="p-6">
                    <div>
                        <h1 className="text-primary dark:text-white text-4xl font-core font-bold">About Me</h1>
                        <div>
                            <svg width="55" height="10" viewBox="0 0 55 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="55" height="10" rx="5" fill="#67C457" />
                            </svg>
                        </div>
                    </div>
                    <div className="py-16 w-9/12 tracking-wider">
                        <p className="text-primary dark:text-white text-2xl sm:text-2xl md:text-4xl font-bold mb-4">
                            Hello my name is Ustami Razib, u can call me as Ustami.
                            I’m Working as front-end Web developer
                            i enjoy using Reactjs and tailwind.
                            <svg className="hidden md:inline" width="35" height="10" viewBox="0 0 35 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="35" height="10" rx="5" fill="#67C457" />
                            </svg>
                        </p>
                        <div className="absolute">
                            <svg className="relative hidden bottom-10 right-10 md:block lg:block" width={180} height={80} viewBox="0 0 111 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx={19} cy={45} r={3} fill="#67C357" />
                                <circle cx={27} cy={45} r={3} fill="#67C357" />
                                <circle cx={35} cy={45} r={3} fill="#67C357" />
                                <circle cx={3} cy={45} r={3} fill="#67C357" />
                                <circle cx={11} cy={45} r={3} fill="#67C357" />
                                <circle cx={43} cy={45} r={3} fill="#67C357" />
                                <circle cx={51} cy={45} r={3} fill="#67C357" />
                                <line x1="53.9956" y1="44.75" x2="110.996" y2="43.75" stroke="#67C357" strokeWidth="0.5" />
                                <line x1="3.25" x2="3.25" y2={42} stroke="#67C357" strokeWidth="0.5" />
                            </svg>


                        </div>
                    </div>
                </div>
                <ul className="flex p-6 lg:p-0 space-x-6">
                    <motion.li whileHover={{ scale: 1.06 }} className="flex flex-col items-center space-y-1">
                        <div className="bg-gradient-to-tr from-gray-500 to-gray-200 p-1 rounded-full">
                            <a className="block bg-white p-1 transform hover:-rotate-6 transition rounded-full" href="https://github.com/ustamirazib" target="_blank">
                                <img className="w-14 h-14 rounded-full" src="/img/github.png" alt="Github" />
                            </a>
                        </div>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.06 }} className="flex flex-col items-center space-y-1">
                        <div className="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-1 rounded-full">
                            <a className="block bg-white p-1 transform hover:-rotate-6 transition rounded-full" href="https://www.instagram.com/razib.ustami/" target="_blank">
                                <img className="w-14 h-14 rounded-full" src="/img/instagram.png" alt="Instagram" />
                            </a>
                        </div>
                    </motion.li>
                </ul>
            </div>
        </section>
    )
}
