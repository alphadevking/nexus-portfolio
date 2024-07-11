import { useEffect, useRef } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { Image, ScrollShadow } from "@nextui-org/react";
import { AcrylicCard, TestimonialCard, TextDesignCard } from "./AcrylicCard";
import { careerTimeline, certifications, skills, softSkills, testimonials } from "./data";

export default function AboutMe() {
    const controls: { [key: string]: AnimationControls; } = {
        about: useAnimation(),
        softSkills: useAnimation(),
        workExperience: useAnimation(),
        skills: useAnimation(),
        certifications: useAnimation(),
        testimonials: useAnimation()
    };

    const refs: { [key: string]: React.RefObject<HTMLDivElement>; } = {
        about: useRef(null),
        softSkills: useRef(null),
        workExperience: useRef(null),
        skills: useRef(null),
        certifications: useRef(null),
        testimonials: useRef(null)
    };

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    };

    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionName = entry.target.getAttribute('data-section');
                if (sectionName && controls[sectionName]) {
                    controls[sectionName].start("visible");
                }
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        Object.values(refs).forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });
        return () => {
            Object.values(refs).forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [options]);

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const staggerItem = {
        hidden: { opacity: 0, y: 50, rotateY: -10, willChange: "opacity, transform" },
        visible: { opacity: 1, y: 0, rotateY: 0, transition: { duration: 0.5, ease: "easeInOut" } }
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-10 bg-purple-900/5 bg-opacity-90">
            <motion.div
                className="w-full max-w-7xl"
                ref={refs.about}
                data-section="about"
                variants={staggerContainer}
                initial="hidden"
                animate={controls.about}
            >
                <motion.h1
                    className="text-3xl font-bold border-b-4 border-purple-700 pb-2 -mb-4 inline-block text-white"
                    variants={staggerItem}
                >
                    About
                </motion.h1>
            </motion.div>

            <motion.div
                className="w-full max-w-7xl grid md:flex justify-center gap-5 mt-10"
                variants={staggerContainer}
                initial="hidden"
                animate={controls.about}
            >
                <motion.div className="grid grid-flow-col gap-5" variants={staggerItem}>
                    <Image
                        src={"/images/alpha.jpg"}
                        alt="Favour Orukpe"
                        className="w-32 h-full my-5 object-cover"
                        style={{ opacity: 0.5 }}
                    />

                    <motion.div className="md:col-span-2 m-auto h-fit pt-5">
                        <h2 className="text-sm">alphadevking</h2>
                        <ScrollShadow className="w-[300px] h-[300px]">
                            <motion.p
                                className="mt-5 text-xs text-purple-100"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                                style={{ willChange: "opacity, transform" }}
                            >
                                Software Engineer, Full-Stack Developer, Graphic Designer, and Project Manager, with a passion for building scalable, dynamic, and robust web applications. I excel in both frontend and backend development, specializing in technologies such as React, NextJS, TypeScript, PHP, Python, ASP.NET, and many more.
                            </motion.p>
                            <motion.p
                                className="mt-5 text-xs text-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                                style={{ willChange: "opacity, transform" }}
                            >
                                I believe that great software development is about solving complex problems with elegant solutions and creating intuitive, enjoyable experiences for users. Whether working on a web application, a mobile app, or any other digital product, I bring a commitment to excellence and a user-centered approach to every project.
                            </motion.p>
                        </ScrollShadow>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="mb-10 mt-5 items-center justify-end"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={controls.softSkills}
                    ref={refs.softSkills}
                    data-section="softSkills"
                >
                    <h2 className="text-start text-lg font-semibold text-white">Soft Skills {`I've`} Garnered</h2>
                    <motion.div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerItem}>
                        {softSkills.map((skill, index) => (
                            <TextDesignCard
                                key={index}
                                index={index}
                                skill={skill}
                            />
                        ))}
                    </motion.div>
                </motion.div>

            </motion.div>

            <motion.div
                className="my-10 grid gap-5 w-full max-w-7xl"
                variants={staggerContainer}
                initial="hidden"
                animate={controls.workExperience}
                ref={refs.workExperience}
                data-section="workExperience"
            >
                <h2 className="flex gap-2 text-start text-lg font-semibold text-white">Work Experience <Image src="/images/rocket-dynamic-premium.png" className="inline-block w-8" /></h2>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6" variants={staggerItem}>
                    {careerTimeline.map((item, index) => (
                        <TextDesignCard
                            key={index}
                            index={index}
                            year={item.year}
                            title={item.title}
                            company={item.company}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className="mb-10 w-full max-w-7xl"
                variants={staggerContainer}
                initial="hidden"
                animate={controls.skills}
                ref={refs.skills}
                data-section="skills"
            >
                <h2 className="flex gap-2 text-start text-lg font-semibold text-white">Skills</h2>
                <motion.div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerItem}>
                    {skills.map((skill, index) => (
                        <AcrylicCard
                            key={index}
                            index={index}
                            skill={skill.name}
                            image={skill.image}
                        />
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className="mb-10 w-full max-w-7xl"
                variants={staggerContainer}
                initial="hidden"
                animate={controls.certifications}
                ref={refs.certifications}
                data-section="certifications"
            >
                <h2 className="flex gap-2 text-start text-lg font-semibold text-white">Certifications</h2>
                <motion.div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerItem}>
                    {certifications.map((cert, index) => (
                        <AcrylicCard
                            key={index}
                            index={index}
                            skill={cert.name}
                            description={cert.issuingOrganization}
                            year={cert.issueDate}
                            image={cert.image}
                        />
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className="mb-10 w-full max-w-7xl"
                variants={staggerContainer}
                initial="hidden"
                animate={controls.testimonials}
                ref={refs.testimonials}
                data-section="testimonials"
            >
                <h2 className="flex gap-2 text-start text-lg font-semibold text-white">Testimonials/Recommendations</h2>
                <motion.div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerItem}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
