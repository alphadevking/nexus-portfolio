import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { FaStar, FaTimesCircle, FaSquare } from 'react-icons/fa';

const colors = ["rgba(128, 0, 128, 0.1)", "rgba(75, 0, 130, 0.1)", "rgba(148, 0, 211, 0.1)", "rgba(255, 0, 255, 0.1)"];

const getRandomPosition = () => {
    const top = Math.random() * 100 - 50;
    const left = Math.random() * 100 - 50;
    return { top: `${top}%`, left: `${left}%` };
};

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

const AcrylicCard = ({ year, title, company, description, index, skill, image }: { year?: any, title?: any, company?: any, description?: any, index: number, skill?: string, image?: string; }) => {
    const isEven = index % 2 === 0;
    const starPosition = getRandomPosition();
    const timesCirclePosition = getRandomPosition();
    const squarePosition = getRandomPosition();
    const starColor = getRandomColor();
    const timesCircleColor = getRandomColor();
    const squareColor = getRandomColor();

    return (
        <motion.div
            className={`relative flex gap-4 md:my-5 p-5 bg-inherit backdrop-blur-xl rounded-xl shadow-xl border text-xs border-purple-200/50 transition-transform duration-300 ${isEven ? 'ml-auto' : 'mr-auto'} ${isEven ? 'rotate-1' : '-rotate-1'} w-full max-w-md md:max-w-lg lg:max-w-2xl`}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, rotateY: isEven ? 5 : -5 }}
            whileTap={{ scale: 0.95 }}
            variants={{
                hidden: { opacity: 0, y: 50, rotateY: -10 },
                visible: { opacity: 1, y: 0, rotateY: 0, transition: { duration: 0.5, ease: "easeInOut" } }
            }}
            whileInView={{
                y: [0, -5, 0],
                transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.5
                }
            }}
        >
            {image && (
                <motion.div className="flex-none w-32 h-32 overflow-hidden rounded-lg">
                    <motion.img
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.div>
            )}
            <div className="flex flex-col justify-center gap-2">
                {year && <div className="text-sm text-purple-300">{year}</div>}
                {title && <div className="font-normal opacity-70 text-white text-sm">{title} {company && <span>at <strong className="text-purple-500 font-bold">{company}</strong></span>}</div>}
                {description && <div className="text-white">{description}</div>}
                {skill && <div className="text-white">{skill}</div>}
            </div>
            <FaStar style={{ ...starPosition, position: 'absolute', color: starColor }} className="w-6 h-6" />
            <FaTimesCircle style={{ ...timesCirclePosition, position: 'absolute', color: timesCircleColor }} className="w-6 h-6" />
            <FaSquare style={{ ...squarePosition, position: 'absolute', color: squareColor }} className="w-8 h-8" />
        </motion.div>
    );
};

const TextDesignCard = ({ year, title, company, description, index, skill, image }: { year?: any, title?: any, company?: any, description?: any, index: number, skill?: string, image?: string; }) => {
    const isEven = index % 2 === 0;
    const starPosition = getRandomPosition();
    const timesCirclePosition = getRandomPosition();
    const squarePosition = getRandomPosition();
    const starColor = getRandomColor();
    const timesCircleColor = getRandomColor();
    const squareColor = getRandomColor();

    return (
        <motion.div
            className={`relative flex flex-col gap-4 md:my-5 p-5 bg-inherit backdrop-blur-xl rounded-xl shadow-xl border text-xs border-purple-200/50 transition-transform duration-300 ${isEven ? 'ml-auto' : 'mr-auto'} ${isEven ? 'rotate-1' : '-rotate-1'} w-full max-w-md md:max-w-lg lg:max-w-2xl`}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, rotateY: isEven ? 5 : -5 }}
            whileTap={{ scale: 0.95 }}
            variants={{
                hidden: { opacity: 0, y: 50, rotateY: -10 },
                visible: { opacity: 1, y: 0, rotateY: 0, transition: { duration: 0.5, ease: "easeInOut" } }
            }}
            whileInView={{
                y: [0, -5, 0],
                transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.5
                }
            }}
        >
            <div className="flex flex-col justify-center gap-2">
                {year && <div className="text-lg font-bold text-purple-300">{year}</div>}
                {title && <div className="font-normal opacity-70 text-white text-md">{title} {company && <span>at <strong className="text-purple-500 font-bold">{company}</strong></span>}</div>}
                {description && <div className="text-white text-sm">{description}</div>}
                {skill && <div className="text-white text-sm">{skill}</div>}
            </div>
            {image && (
                <motion.div className="w-full h-32 overflow-hidden rounded-lg">
                    <motion.img
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.div>
            )}
            <FaStar style={{ ...starPosition, position: 'absolute', color: starColor }} className="w-6 h-6" />
            <FaTimesCircle style={{ ...timesCirclePosition, position: 'absolute', color: timesCircleColor }} className="w-6 h-6" />
            <FaSquare style={{ ...squarePosition, position: 'absolute', color: squareColor }} className="w-8 h-8" />
        </motion.div>
    );
};

interface Testimonial {
    name: string;
    profilePicture: string;
    profileLink: string;
    relationship: string;
    position: string;
    date: string;
    context: string;
    text: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="max-w-xl mx-auto bg-purple-900/5 backdrop-blur-lg rounded-xl shadow-md p-6 relative overflow-hidden">
            <div className="flex flex-col items-center mb-4">
                <img
                    className="w-32 h-32 rounded-full border-4 border-purple-200 mb-4"
                    src={testimonial.profilePicture}
                    alt={testimonial.name}
                />
                <div className="text-center">
                    <p className="text-gray-300 italic mb-4">{`"${testimonial.text}"`}</p>
                    <div className="gap-2 items-center flex justify-center text-xl font-bold text-white">
                        <span>
                            {testimonial.name}
                        </span>
                        <Link href={testimonial.profileLink} target="_blank" as={'a'} className="hover:opacity-50 duration-500">
                            <BsArrowUpRightSquareFill />
                        </Link>
                    </div>
                    <div className="text-sm text-white mb-2">{testimonial.position}</div>
                    <p className="text-gray-300 mt-2 text-xs">{testimonial.date}</p>
                </div>
            </div>
        </div>
    );
};

export { AcrylicCard, TextDesignCard, TestimonialCard };
