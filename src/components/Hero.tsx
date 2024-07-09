// components/Hero.tsx
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { images } from "./data";

const introduction = "I'm Favour Orukpe";
const summary = "Full-Stack Software Engineer | Frontend Software Developer | Backend Software Developer | React, React Native, NextJS, TypeScript, PHP, Python, ViteJS, NestJs, Prisma ORM, C/C++, C#, ASP.NET, Laravel, Django";

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const controls = useAnimation();
    const carouselRef = useRef(null);
    const containerRef = useRef(null);

    const handlePrev = () => {
        if (currentImage > 0) {
            setCurrentImage((prevImage) => prevImage - 1);
        }
    };

    const handleNext = () => {
        if (currentImage < images.length - 2) {
            setCurrentImage((prevImage) => prevImage + 1);
        }
    };

    useEffect(() => {
        controls.start({ x: -currentImage * 51 + "%" });
    }, [currentImage, controls]);

    const progress = ((currentImage + 1) / (images.length - 1)) * 100;

    const canDrag = currentImage >= 0 && currentImage < images.length - 2 || currentImage < images.length - 2;

    return (
        <header className="flex flex-col md:flex-row items-center justify-between min-h-screen p-10 pt-16 bg-purple-900/5 text-white gap-2">
            <div className="md:w-1/3 flex flex-col items-start gap-0.5">
                <motion.h4
                    className="text-lg font-semibold"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    Hi,
                </motion.h4>
                <motion.h1
                    className="text-4xl md:text-5xl font-bold"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {introduction}
                </motion.h1>
                <motion.p
                    className="mt-4 text-sm"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.70 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                >
                    {summary}
                </motion.p>

                <div className="flex items-center mt-4">
                    <button
                        className={`border-2 border-white text-white p-2 rounded-full mr-2 ${currentImage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handlePrev}
                        disabled={currentImage === 0}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className={`border-2 border-white text-white p-2 rounded-full ${currentImage === images.length - 2 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleNext}
                        disabled={currentImage === images.length - 2}
                    >
                        <FaChevronRight />
                    </button>
                </div>
                <div className="my-5 relative flex-1 h-1 py-[1px] w-full md:max-w-[90%]">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                <motion.div className="mb-5"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <Link
                        as={'button'}
                        href="https://github.com/alphadevking/"
                        size="md"
                        className="relative overflow-hidden bg-gradient-to-br hover:bg-gradient-to-tr from-purple-900 via-gray-950 to-purple-950 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
                    >
                        Explore My Work
                    </Link>
                </motion.div>
            </div>
            <div className="md:w-2/3 mt-10 md:mt-0 relative w-full h-96 overflow-hidden" ref={containerRef}>
                <motion.div
                    className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500 ease-in-out gap-4"
                    animate={controls}
                    drag={canDrag ? "x" : false}
                    dragConstraints={containerRef}
                    ref={carouselRef}
                    whileTap={{ cursor: canDrag ? "grabbing" : "default" }}
                    onDragEnd={(event, info) => {
                        if (info.offset.x < -50 && currentImage < images.length - 2) {
                            handleNext();
                        } else if (info.offset.x > 50 && currentImage > 0) {
                            handlePrev();
                        }
                    }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="flex-none w-1/2 h-full relative px-5 rounded-xl overflow-hidden">
                            <motion.div
                                className="w-full h-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:scale-105 duration-500"
                                />
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                                    className="absolute bottom-0 justify-center grid w-[105%] bg-black/50 -ml-5 backdrop-blur py-3 text-white uppercase tracking-wider text-[11px] font-semibold"
                                >
                                    {image.alt}
                                </motion.div>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </header>
    );
}
