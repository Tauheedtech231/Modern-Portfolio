import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Problem Solver with C++ and DSA fundamentals",
    description: "Efficient code, clean logic",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "/grid.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "Job Portal Platform",
    des: "A full-featured job portal with user authentication, role-based dashboards, and job posting functionality.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    driveLink: "https://drive.google.com/file/d/1v-Y0FlEikTBmO04plu-Fi3rJsg18NoXQ/view?usp=sharing",
  },
  {
    id: 2,
    title: "Real-time Chat Application",
    des: "A chat app built with Socket.IO for real-time messaging, supporting both one-to-one and group conversations.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    driveLink: "https://drive.google.com/file/d/1coEOJwg0zpbZxtdw_i_ICcjrGfTmaRbc/view?usp=sharing",
  },

];


export const testimonials = [
  {
    quote:
      "Tauheed did a fantastic job on our university project. His technical skills and timely delivery made the whole process smooth and successful.",
    name: "Hamza",
    title: "BSSE Student – COMSATS Vehari",
  },
  {
    quote:
      "Working with Tauheed was a great experience. He understood our project needs clearly and delivered exactly what we expected — even better.",
    name: "Fida",
    title: "BSSE Student – COMSATS Vehari",
  },
  {
    quote:
      "I highly appreciate Tauheed’s professionalism and dedication. Our project was well-built and completed right on time. Highly recommended!",
    name: "Saqlain",
    title: "BSSE Student – COMSATS Vehari",
  },
  {
    quote:
      "Tauheed developed our final-year project exactly the way we envisioned. His communication and technical expertise were impressive.",
    name: "Toseef",
    title: "BSSE Student – COMSATS Vehari",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  }
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Mern Stack Developer",
    desc: "Assisted in the development of a web-based platform using React.js,Next js,Node js,Express js,Mongodb enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Bubble Io Developer",
    desc: "Designed and developed App with no Code",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
 
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/Tauheedtech231"
   
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 2,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/tauheed-khan-0781aa334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
];
