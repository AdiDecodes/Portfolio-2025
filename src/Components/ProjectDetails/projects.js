import cleverStudio from "../../assets/Projects/cleverstudio.png";
import cleverStudio1 from "../../assets/Projects/cs-2.png";
import cleverStudio2 from "../../assets/Projects/cs-3.png";

import igloaded from "../../assets/Projects/igloaded.png";
import igloaded1 from "../../assets/Projects/igl-1.png";
import igloaded2 from "../../assets/Projects/igl-2.png";

import vocalize1 from "../../assets/Projects/vocalize-1.png";
import vocalize2 from "../../assets/Projects/vocalize-2.png";
import vocalize3 from "../../assets/Projects/vocalize-3.png";

import techbucket from "../../assets/Projects/techbucket.png";
import techbucket1 from "../../assets/Projects/techbucket-1.png";
import techbucket2 from "../../assets/Projects/techbucket-2.png";

import peerbond from "../../assets/Projects/peerbond.png";

import farzi1 from "../../assets/Projects/farzi-1.png";
import farzi2 from "../../assets/Projects/farzi-2.png";
import farzi3 from "../../assets/Projects/farzi-3.png";

import dothedue from "../../assets/Projects/dothedue.png";
import dothedue1 from "../../assets/Projects/dothedue-1.png";
import dothedue2 from "../../assets/Projects/dothedue-2.png";

export default [
  {
    id: 1,
    name: "PeerBond (Under Dev)",
    description:
      "Peerbond is another platform for connections, interactions and updates based on college and university. It is a social media platform that connects you with your peers and helps you share your thoughts and ideas with them. Similar to LinkedIn, Peerbond is a platform where you can connect with your classmates, seniors, juniors, and other students from your college or university. You can share your thoughts, ideas, and updates with them and stay connected with them. Peerbond also provides you with the latest updates and news related to your college or university. So, if you want to stay connected with your peers and stay updated with all the latest news and updates related to your college or university, then Peerbond is the right platform for you.",
    image: [peerbond],
    myInvolvement:
      "I took full ownership of the project, managing everything from system design and architecture to full-stack development. My responsibilities included designing scalable backend systems, developing an intuitive user interface, and ensuring seamless integration between all components to deliver a fully functional and responsive website.",
    techStack: [
      "Javascript",
      "Vite",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Socket.io",
    ],
    dateStarted: "Nov 2024",
    dateCompleted: "Present",
    urls: [
      {
        name: "Website",
        url: "https://peerbond.in/",
      },
      {
        name: "GitHub",
        url: "https://www.github.com/",
      },
    ],
  },

  {
    id: 2,
    name: "IGLoaded",
    description:
      "A web app that helps you download Instagram photos and videos.",
    image: [igloaded, igloaded1, igloaded2],
    techStack: [
      "Javascript",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Google Cloud",
      "Razorpay",
      "Mailgun",
      "Third-party APIs",
    ],
    myInvolvement:
      "Overseen the whole development process and was responsible for the full-stack development of the website. Deployed the website on Google Cloud Platform",
    dateStarted: "Dec 2023",
    dateCompleted: "Feb 2024",
    urls: [
      {
        name: "Website",
        url: "https://igloaded-frontend-adidecodes-projects.vercel.app/",
      },
      {
        name: "GitHub",
        url: "https://github.com/orgs/Igloaded/repositories",
      },
    ],
  },
  {
    id: 3,
    name: "CleverStudio",
    description:
      "CleverStudio is a web development agency that provides you with the best web development services. Apart from web development, CleverStudio also provides services like SEO, SMM, and more. We have a team of experienced developers who are always ready to help you with your project. CleverStudio have worked with clients from all over the world and have delivered projects on time. CleverStudio believe in providing quality services to our clients and that is why CleverStudio have a long list of satisfied clients. So, if you are looking for a web development agency that can help you with your project, then CleverStudio is the right choice for you.",
    myInvolvement:
      "I was responsible for the front-end development and API-Integration of the website.",
    image: [cleverStudio, cleverStudio1, cleverStudio2],
    techStack: [
      "Javascript",
      "Vite",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    dateStarted: "July 2024",
    dateCompleted: "Sept 2024",
    urls: [
      {
        name: "Website",
        url: "https://cleverstudio.in/",
      },
      {
        name: "GitHub",
        url: "https://github.com/Project-Clever-Studio/web-frontend",
      },
    ],
  },
  {
    id: 4,
    name: "TechBucket",
    description:
      "TechBucket is a media agency based in Canada. TechBucket provides you with the latest tech news and reviews. TechBucket also provides services like web development, app development, and more. TechBucket have a team of experienced developers who are always ready to help you with your project. TechBucket have worked with clients from all over the world and have delivered projects on time. TechBucket believe in providing quality services to our clients and that is why TechBucket have a long list of satisfied clients. So, if you are looking for a media agency that can help you with your project, then TechBucket is the right choice for you.",
    image: [techbucket1, techbucket, techbucket2],
    myInvolvement:
      "I was responsible for designing and development of the website.",
    techStack: ["Vanilla Javascript", "HTML", "CSS", "Express"],
    dateStarted: "June 2024",
    dateCompleted: "June 2024",
    urls: [
      {
        name: "Website",
        url: "https://techbucket.ca/",
      },
    ],
  },
  {
    id: 5,
    name: "Vocalize",
    description:
      "Vocalize is a web based platform that supports realtime speech translation and captions for your meeting. ",
    image: [vocalize1, vocalize2, vocalize3],
    myInvolvement:
      "To implement the near real-time speech translation and captions feature, I used Socket.io for real-time communication, and finetuned a Pretrained ML model (OPUS) to correctly recognize sentences and translates it. To oversee the development process and ensure the integration of all components, I worked closely with the team to deliver a fully functional website.",
    techStack: [
      "Javascript",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "GSAP",
      "Machine Learning",
      "Flask",
    ],
    dateStarted: "Oct 2024",
    dateCompleted: "March 2025",
    urls: [
      // {
      // 	name: 'Website',
      // 	url: 'https://vocalize-rt-voice-translation.vercel.app/',
      // },
      {
        name: "GitHub",
        url: "https://github.com/orgs/Vocalize-RT-Voice-Translation/repositories",
      },
    ],
  },
  {
    id: 6,
    name: "Farzi.js",
    description:
      "Farzi.js is a lightweight and fast JavaScript library that simplifies the process of creating animations on the web. With Farzi.js, you can easily create animations using simple and intuitive APIs. Farzi.js provides you with a wide range of animations that you can use to create stunning effects on your website. Farzi.js is designed to be easy to use and highly performant, making it the perfect choice for developers who want to add animations to their websites without any hassle.",
    image: [farzi1, farzi2, farzi3],
    myInvolvement:
      "I myself created this library to help developers create mock data on the web easily and quickly. I designed the library to be lightweight and fast, so that it can be used in a wide range of projects without any performance issues.",
    techStack: ["Javascript", "Node.js", "NPM"],
    dateStarted: "April 2024",
    dateCompleted: "May 2024",
    urls: [
      {
        name: "NPM",
        url: "https://www.npmjs.com/package/farzi.js",
      },
      {
        name: "GitHub",
        url: "https://github.com/AdiDecodes/Farzi.js",
      },
    ],
  },
  {
    id: 7,
    name: "DoTheDue",
    description:
      "DoTheDue is a lightweight JavaScript library designed to display customizable information messages on websites with pending payment dues for their development. Ideal for web developers and agencies, DoTheDue provides an easy-to-integrate solution to notify website owners about outstanding payments. With flexible styling and behavior options, it seamlessly blends with any website design, ensuring effective communication without disrupting the user experience.",
    image: [dothedue2, dothedue, dothedue1],
    myInvolvement:
      "I myself created this whole package and designed it to be lightweight and fast, so that it can be used in a wide range of projects without any performance issues.",
    techStack: ["Typescript", "Node.js", "NPM"],
    dateStarted: "Dec 2024",
    dateCompleted: "Jan 2025",
    urls: [
      {
        name: "NPM",
        url: "https://www.npmjs.com/package/dothedue",
      },
      {
        name: "GitHub",
        url: "https://github.com/AdiDecodes/do-the-due",
      },
    ],
  },
];
