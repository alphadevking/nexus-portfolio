// components/Footer.tsx
import { Image } from "@nextui-org/react";
import { socials } from "./data";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-purple-900/10 bottom-2 backdrop-blur-sm border-t py-4 w-full">
            <div className="container mx-auto md:flex items-center md:justify-between space-y-4 px-4">
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/images/alpha.jpg"
                        alt="Favour Orukpe"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                    <span className="text-sm mt-2">Made by Alphadevking</span>
                </div>
                <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {socials.map((social, index) => (
                        <motion.li
                            key={index}
                            className="flex flex-col items-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 transition duration-300 flex flex-col items-center"
                            >
                                <social.icon size="1.5em" />
                                {social.text && (
                                    <span className="text-sm mt-1">{social.text}</span>
                                )}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
