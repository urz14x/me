import Image from "next/image";
import { motion } from 'framer-motion';

export default function experience() {
    return (
        <section id="experience" className="dark:bg-gray-800">
            <div className="container mx-auto py-52">
                <div className="flex justify-between flex-col sm:flex-row items-center w-7/12 ">
                    <div>
                        <svg className="hidden md:block" width="84" height="32" viewBox="0 0 84 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="6" cy="25.5" rx="6" ry="6.5" fill="#97DE8A" />
                            <ellipse cx="24" cy="25.5" rx="6" ry="6.5" fill="#97DE8A" />
                            <ellipse cx="42" cy="25.5" rx="6" ry="6.5" fill="#97DE8A" />
                            <ellipse cx="60" cy="25.5" rx="6" ry="6.5" fill="#97DE8A" />
                            <ellipse cx="78" cy="25.5" rx="6" ry="6.5" fill="#97DE8A" />
                            <ellipse cx="6" cy="6.5" rx="6" ry="6.5" fill="#97DE8A" />
                            <ellipse cx="24" cy="6.5" rx="6" ry="6.5" fill="#97DE8A" />
                            <ellipse cx="42" cy="6.5" rx="6" ry="6.5" fill="#97DE8A" />
                            <ellipse cx="60" cy="6.5" rx="6" ry="6.5" fill="#97DE8A" />
                            <ellipse cx="78" cy="6.5" rx="6" ry="6.5" fill="#97DE8A" />
                        </svg>

                    </div>

                    <div>
                        <h1 className="text-primary dark:text-white text-4xl font-bold mb-2">Experience</h1>
                        <div>
                            <svg width="55" height="10" viewBox="0 0 55 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="55" height="10" rx="5" fill="#67C457" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div className="mt-24">

                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
                        <motion.div whileHover={{ scale: 1.05 }} className="card bg-white shadow-lg rounded-b-xl">
                            <Image
                                src="/experience_1.jpg"
                                width={1616}
                                height={1080}
                                className="w-full h-full object-cover object-top"
                                layout="responsive" />
                            <div className="px-8 py-5 bg-gradient-to-br from-secondary to-forest rounded-b-xl">
                                <h1 className="font-mono text-white text-2xl">Completion Dicoding academy</h1>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="card bg-white shadow-lg rounded-b-xl">
                            <Image
                                src="/experience_1.jpg"
                                width={1616}
                                height={1080}
                                className="w-full h-full object-cover object-top"
                                layout="responsive" />
                            <div className="px-8 py-5 bg-gradient-to-br from-secondary to-forest rounded-b-xl">
                                <h1 className="text-white font-mono text-2xl">Completion Dicoding academy</h1>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="card bg-white shadow-lg rounded-b-xl">
                            <Image
                                src="/experience_1.jpg"
                                width={1616}
                                height={1080}
                                className="w-full h-full object-cover object-top"
                                layout="responsive" />
                            <div className="px-8 py-5 bg-gradient-to-br from-secondary to-forest rounded-b-xl">
                                <h1 className="text-white font-mono text-2xl">Completion Dicoding academy</h1>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    )
}
