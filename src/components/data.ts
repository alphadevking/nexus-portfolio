import { SiLinkedin, SiWhatsapp, SiMedium, SiGithub, SiReddit, SiHashnode, SiTwitch, SiLinktree, SiX } from 'react-icons/si';

const images = [
    {
        src: "/images/ai-cloud-concept-with-robot-arm.jpg",
        alt: "AI Integration"
    },
    {
        src: "/images/digital-cloud-data-storage-digit.jpg",
        alt: "Cloud Computing"
    },
    {
        src: "/images/3d-cryptocurrency-rendering-desi.jpg",
        alt: "Blockchain Solutions"
    },
    {
        src: "/images/3d-internet-secuirty-badge_1048.jpg",
        alt: "Data Security"
    }
];

const careerTimeline = [
    {
        year: "March 2024 - Present",
        title: "IT Specialist (Volunteering)",
        company: "Delta State Contributory Health Commission, Asaba",
        description: "Providing ICT Support for the other departments of the Commission. Data sourcing, analysis, and visualization.",
        image: "/images/sample1.jpg"
    },
    {
        year: "2023 - Present",
        title: "Team Lead & Full-Stack Software Engineer",
        company: "Alpha Developer Systems",
        description: "Providing purpose-driven solutions for technology and design problems as a team lead. Overseeing operations, implementing design structures, and building software projects.",
        image: "/images/sample2.jpg"
    },
    {
        year: "2022 - Present",
        title: "Software Engineer (Remote)",
        company: "$mart Earners Team, Lagos",
        description: "Working as a Senior Frontend Engineer. Designing user-friendly interfaces, implementing blockchain interactions, and elevating performance of web apps.",
        image: "/images/sample3.jpg"
    },
    {
        year: "2022",
        title: "Web Development Tutor",
        company: "Aisotech Computers, On-site",
        description: "Tutored students on front-end development. Hosted lectures on backend development with JavaScript, Python, and PHP.",
        image: "/images/sample4.jpg"
    }
];

const skills = [
    { name: "React", image: "/images/react.png" },
    { name: "React Native", image: "/images/react-native.png" },
    { name: "NextJS", image: "/images/nextjs.png" },
    { name: "Tailwind CSS", image: "/images/tailwind-css.png" },
    { name: "TypeScript", image: "/images/typescript.png" },
    { name: "Python", image: "/images/python.png" },
    { name: "PHP", image: "/images/php.png" },
    { name: "ASP.NET", image: "/images/aspnet.png" }
];

const softSkills = [
    "Team Collaboration",
    "Problem-Solving",
    "Time Management",
    "Communication",
    "Technical Support",
    "Program Creation"
];

const certifications = [
    {
        name: "Google Analytics Individual Qualification",
        issuingOrganization: "Google",
        issueDate: "August 2023",
        expirationDate: "August 2024",
        credentialId: "182488552",
        skills: ["Google Analytics", "Data Analysis", "Software Development"],
        image: "/images/google.png"
    },
    {
        name: "Programming in C++ Certification",
        issuingOrganization: "Programming Hub",
        issueDate: "August 2023",
        credentialId: "1691747450807",
        skills: ["C++", "Software Development"],
        image: "/images/cpp.png"
    },
    {
        name: "Programming in Lua Certification",
        issuingOrganization: "Programming Hub",
        issueDate: "August 2023",
        credentialId: "1691771480891",
        skills: ["Lua", "Software Development"],
        image: "/images/lua.png"
    }
];

const testimonials = [
    {
        name: "Justice Ekemezie",
        profilePicture: "/images/justice-ekemezie.jpg",
        profileLink: "https://www.linkedin.com/in/ttebify/",
        relationship: "1st degree connection",
        position: "Software Developer and Technical Writer 📝, React, Typescript, PHP | Core contributor to @envless | Content caddy maintainer",
        date: "August 11, 2023",
        context: "Justice worked with Favour on the same team",
        text: "His diligence and dedication to his work are especially noticeable to anyone he works with. I recommend him for any role he has experience in."
    }
];

const socials = [
    { icon: SiLinkedin, link: 'https://www.linkedin.com/in/favour-orukpe/', text: 'LinkedIn' },
    { icon: SiWhatsapp, link: 'https://wa.me/2348140389939/', text: 'Whatsapp' },
    { icon: SiMedium, link: 'https://medium.com/@alphadevking/', text: 'Medium' },
    { icon: SiGithub, link: 'https://www.github.com/alphadevking/', text: 'Github' },
    { icon: SiReddit, link: 'https://www.reddit.com/u/Agile_Challenge_9747/', text: 'Reddit' },
    { icon: SiHashnode, link: 'https://www.hashnode.com/@alphadevking', text: 'Hashnode' },
    { icon: SiTwitch, link: 'https://www.twitch.tv/alphadevking/', text: 'Twitch' },
    { icon: SiX, link: 'https://www.x.com/alphadevking_1/', text: 'X' },
    { icon: SiLinktree, link: 'https://linktr.ee/alphadevking/', text: 'Linktree' }
];

export {
    images,
    careerTimeline,
    skills,
    softSkills,
    certifications,
    testimonials,
    socials
};
