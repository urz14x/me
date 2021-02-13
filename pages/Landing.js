import { motion, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';
export default function Landing() {
      const {scrollYProgress} = useViewportScroll();
      const fromLeft = {
        hidden: {
          x: -200
        },
        visible: {
          x: 0
        }
      }

    return (
        <div className="container mx-auto flex flex-col sm:justify-between">
            <div className="absolute right-0 hidden sm:px-32 lg:block ">
                <svg width={156} height={154} viewBox="0 0 156 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.03642 67.7822L107.504 10.2599L110.959 118.458L2.03642 67.7822Z" fill="url(#paint0_linear)" />
                    <path d="M65.0853 119.823L130.861 88.263L132.741 147.123L65.0853 119.823Z" fill="url(#paint1_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="107.5" y1={10} x2={68} y2="98.5" gradientUnits="userSpaceOnUse">
                            <stop offset="0.190909" stopColor="#94D888" />
                            <stop offset={1} stopColor="#CFE2CC" stopOpacity="0.3" />
                            <stop offset={1} stopColor="#FAFFFA" stopOpacity="0.49" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="130.86" y1="88.1216" x2="111.393" y2="138.436" gradientUnits="userSpaceOnUse">
                            <stop offset="0.190909" stopColor="#94D888" />
                            <stop offset={1} stopColor="#CFE2CC" stopOpacity="0.3" />
                            <stop offset={1} stopColor="#FAFFFA" stopOpacity="0.49" />
                        </linearGradient>
                    </defs>
                </svg>


            </div>

            <div className="tracking-widest flex flex-row mb-5">
                <motion.h1 variants={fromLeft} initial='hidden' animate='visible' className="text-5xl font-core text-primary font-bold w-2/3 px-5 sm:text-6xl sm:w-auto sm:px-0 dark:text-white">Hello <span className="text-5xl font-core text-secondary font-bold sm:text-6xl">I’m Ustami Razib</span></motion.h1>
                <div className="mt-7 px-5 hidden lg:block">
                    <svg width="90" height="17" viewBox="0 0 90 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="90" height="17" rx="8.5" fill="#67C457" />
                    </svg>
                </div>
            </div>

            <div className="tracking-widest">
                <motion.h1 variants={fromLeft} initial='hidden' animate='visible' className="text-5xl font-core antialiased text-secondary font-bold w-2/3 px-5 sm:text-6xl sm:w-auto sm:px-0">Front-end Web Developer</motion.h1>
            </div>

            <div className="py-48 w-1/3 px-5 sm:w-auto sm:px-0">
                <svg width="84" height="53" viewBox="0 0 84 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="6" cy="6.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="24" cy="6.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="42" cy="6.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="60" cy="6.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="78" cy="6.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="6" cy="26.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="24" cy="26.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="42" cy="26.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="60" cy="26.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="78" cy="26.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="6" cy="46.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="24" cy="46.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="42" cy="46.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="60" cy="46.5" rx="6" ry="6.5" fill="#97DE8A" />
                    <ellipse cx="78" cy="46.5" rx="6" ry="6.5" fill="#97DE8A" />
                </svg>

            </div>

        </div>
    )
}
