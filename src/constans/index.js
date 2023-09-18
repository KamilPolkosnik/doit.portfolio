import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  postman,
  reactjs,
  redux,
  tailwind,
  next,
  nodejs,
  git,
  firebase,
  threejs,
  freelance,
  moose,
  ups,
  eswse,
  sms,
  fdapp,
  saintify,
  soon,
  kostro,
  michal,
  viktor,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "AI prompt creator",
    icon: creator,
  },
  {
    title: "Tell me what else you need, I'll learn!",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Freelancer - React-Native Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "white",
    date: "10.2020 - 03.2022",
    points: [
      "Developing and maintaining web and mobile applications using React.js/React-Native and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Searching for projects or tasks for freelancers with my technology stack.",
    ],
  },
  {
    title: "React/React-Native Developer Internship",
    company_name: "Moose INC",
    icon: moose,
    iconBg: "white",
    date: "04.2022 - 07.2022",
    points: [
      "Developing and maintaining web and mobile applications using React.js/React-Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and receiving constructive feedback from other experienced developers.",
    ],
  },
  {
    title: "React/React-Native Developer",
    company_name: "Moose INC",
    icon: moose,
    iconBg: "white",
    date: "07.2022 - 06.2023",
    points: [
      "Developing and maintaining web and mobile applications using React.js/React-Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and receiving/providing constructive feedback to/from other developers.",
    ],
  },
  {
    title: "Freelancer - React with Next.js/React-Native Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "white",
    date: "07.2023 - Present",
    points: [
      "Developing and maintaining web and mobile applications using React.js/Next.js/React-Native and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Searching for projects or tasks for freelancers with my technology stack.",
    ],
  },
  {
    title: "Freelancer - React with Next.js/React-Native Developer",
    company_name: "UPS Białystok",
    icon: ups,
    iconBg: "white",
    date: "08.2023 - Present",
    points: [
      "Developing and maintaining two web application using React.js and Next.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaboration with other freelance developers to deliver high-quality applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Kamil is a pleasure. He is sociable, gets along well with the team and has a sense of humor.",
    name: "Michał Dymek",
    designation: "React Developer",
    company: "Moose INC",
    image: michal,
    linkedin: "https://www.linkedin.com/in/micha%C5%82-dymek-641a2a25b/",
  },
  {
    testimonial:
      "Kamil has never been afraid to ask questions, he learns quickly and always tries to find a solution to the task entrusted to him.",
    name: "Viktor Zanozin",
    designation: "Fullstack Developer",
    company: "Moose INC",
    image: viktor,
    linkedin: "https://www.linkedin.com/in/viktor-zanozin-a5b8071a4/",
  },
];

const projects = [
  {
    name: "ESWSE",
    description:
      "The aim of the project is to develop a system for electronic monitoring of people with special needs during evacuation from the buildings in which they stay.",
    status:
      "Unfortunately, I cannot provide a link to github (lack of permission from the application owner) and url because the application has not been published yet.",
    isDone: false,
    tags: [
      {
        name: "react-native-web",
        color: "blue-text-gradient",
      },
      {
        name: "react-native-paper",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: eswse,
    source_code_link: null,
    live_link: null,
  },
  {
    name: "UPS SMS sender",
    description:
      "First individual commercial project. The mobile application is to improve the work of the UPS warehouse through facilities for sending repetitive text messages to customers.",
    status: null,
    isDone: false,
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo-sms",
        color: "green-text-gradient",
      },
    ],
    image: sms,
    source_code_link: "https://github.com/KamilPolkosnik/UPS-SMS-APP",
    live_link: null,
  },
  {
    name: "Finance and Discipline",
    description:
      "An mobile application for managing private finances and good habits that help maintain daily discipline. The application also offers various articles on health, good financial habits, etc.",
    status: null,
    isDone: false,
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: fdapp,
    source_code_link: "https://github.com/KamilPolkosnik/FD-App",
    live_link: null,
  },
  {
    name: "Saintify.AI",
    description:
      "SaaS web application that uses artificial intelligence to enable interaction with Saints of the Catholic Church generated by artificial intelligence. The user can chat with several free characters, after subscribing through stripe, the user can chat with all available characters.",
    status:
      "I'm currently working on this project in my spare time. It will be ready soon.",
    isDone: false,
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "prismadb",
        color: "green-text-gradient",
      },
      {
        name: "chatGPT",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
    ],
    image: saintify,
    source_code_link: null,
    live_link: null,
  },
  {
    name: "The name has not been invented yet",
    description:
      "Application for managing teams and tasks in the company. The administrator can edit blocks containing the employee's surname or surname and assigned tasks. Blocks can be moved across the entire workspace using the drag&drop option.",
    status: "I'm currently working on this commercial project.",
    isDone: false,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-beautiful-dnd",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: soon,
    source_code_link: null,
    live_link: null,
  },
  {
    name: "AI generator",
    description:
      "AI-powered SaaS application for creating queries (chatGPT), music, images, programming code and more. Currently, the application is just an idea that requires planning and refinement.",
    status: "A project to do in the future.",
    isDone: false,
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "prismadb",
        color: "green-text-gradient",
      },
      {
        name: "chatGPT",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
    ],
    image: soon,
    source_code_link: null,
    live_link: null,
  },
  {
    name: "Kostro Konsulting",
    description:
      "My first static website design after 2 months of learning programming. Tragic design, but it's nice to go back to those times sometimes :)",
    status: "Well... :D",
    isDone: true,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: kostro,
    source_code_link: "https://github.com/SuroKamilCode/ProjektKostro",
    live_link: "https://surokamilcode.github.io/ProjektKostro/",
  },
];

export { services, technologies, experiences, testimonials, projects };
