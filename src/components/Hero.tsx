import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from "next/image";
import { images } from "./data";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const introduction = "I'm Favour Orukpe";
const summary = "Full-Stack Software Engineer | Frontend Software Developer | Backend Software Developer | React, React Native, NextJS, TypeScript, PHP, Python, ViteJS, NestJs, Prisma ORM, C/C++, C#, ASP.NET, Laravel, Django";

export default function Hero() {
    const swiperRef = useRef<SwiperRef>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [progress, setProgress] = useState(0);
    const progressControls = useAnimation();

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const onSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            setIsBeginning(swiperRef.current.swiper.isBeginning);
            setIsEnd(swiperRef.current.swiper.isEnd);

            const currentIndex = swiperRef.current.swiper.activeIndex;
            const totalSlides = swiperRef.current.swiper.slides.length - Number(swiperRef.current.swiper.params.slidesPerView);
            const newProgress = (currentIndex / totalSlides) * 75;
            setProgress(newProgress);
        }
    };

    useEffect(() => {
        progressControls.start({ width: `${25 + progress}%` });
    }, [progress, progressControls]);

    return (
        <>
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
                            className={`border-2 border-white text-white p-2 rounded-full mr-2 ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handlePrev}
                            disabled={isBeginning}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            className={`border-2 border-white text-white p-2 rounded-full ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleNext}
                            disabled={isEnd}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                    <div className="relative w-[80%] mt-5 h-1 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-purple-100"
                            initial={{ width: 0 }}
                            animate={progressControls}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                <Swiper
                    ref={swiperRef}
                    spaceBetween={20}
                    slidesPerView={2}
                    onSlideChange={onSlideChange}
                    className="md:w-2/3 mt-10 md:mt-0 relative w-full h-96 rounded-xl overflow-hidden"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="rounded-xl group relative overflow-hidden">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:scale-105 duration-500"
                            />
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                                className="absolute bottom-0 justify-center grid w-full bg-black/50 backdrop-blur py-3 text-white uppercase tracking-wider text-[11px] font-semibold group-hover:scale-105 duration-500"
                            >
                                {image.alt}
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </header>
        </>
    );
}
