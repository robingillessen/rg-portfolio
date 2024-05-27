export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
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
    title: "Developing web apps since 2020",
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
    description: "Favorite choices",
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
    title: "An e-commerce project for a client in the Netherlands.",
    description: "Currently working on",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
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
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Lay Design Studio",
    des: `Created a branded website for a design studio using Next.js, TypeScript, SanityCMS and Tailwind CSS.
    
    The site features a modern design and smooth animations. The website is connected to a headless CMS for content management.`,
    img: "/laydesign.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/sanity.png", "/fm.svg"],
    link: "https://laydesignstudio.nl",
  },
  {
    id: 2,
    title: "Flexnote",
    des: `Lightweight notification service for non-developer business owners. 
    
    The admin is built with Next.js, Tailwind CSS and TypeScript and the backend is built with Node.js and Express. The service is hosted on Vercel and Render.com. The widget itself is built with Vanilla JS & CSS to ensure compatibility with any website.`,
    img: "/flexnote.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/nodejs.png", "/js.png"],
    link: "https://www.flexnote.io",
  },
  {
    id: 3,
    title: "Reliving",
    des: "Involved in the development of various upgrades and features. Improved the data tracking solution by making relevant data available throughout the application and implementing multiple events. Enhanced the user experience by building out the designs for an improved product page and developed the front end for the new AI chatbot feature from scratch.",
    img: "/reliving.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/sass.png"],
    link: "https://www.reliving.com",
  },
  {
    id: 4,
    title: "Hulp met Huren",
    des: "Created a platform for home-seekers in the Netherlands. The platform is built with Next.js, Tailwind CSS and TypeScript. The site features a modern design and smooth animations. The website is connected to a backend that utilizes a Python web scraper to fetch the latest listings from various sources. The site is hosted on Vercel.",
    img: "/hmhscreen.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/nodejs.png",
      "/cloud.svg",
    ],
    link: "https://hulpmethuren.nl",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Robin was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Robin's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Robin is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Assisting in the development of a web-based platform using Next.js / React.js",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "CRO Developer",
    desc: "Let's take a look at the data and see what we can improve!",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Shopify web developer",
    desc: "Need help to build a custom Shopify theme? I'm here to help!",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Tech Consultant",
    desc: "Chosing a tech stack or modelling data can be hard, let me help you with that!",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/R92G",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/robin-gillessen-2a225314b/",
  },
];
