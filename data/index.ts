export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "6+ years of experience",
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
    title: "Start a project together?",
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
    title: "Paloma Media",
    des: `# Paloma Media

## Paloma Media Webshop

### Front Page
![Paloma Media Front Page](/paloma.png)

---

- **Built from scratch** with a custom Shopify theme.
- Implemented a **unique quotation flow** for tailored customer experiences, overcoming challenges such as complex data modeling and seamless integration with the Shopify API.
- Focused on **modern UI/UX** and seamless design, ensuring a high-quality user experience.
- Integrated **Cloudinary** for efficient image management and optimization, reducing page load times and improving overall performance.
- Developed a **user-friendly backend** for easy quotation flow handling, streamlining the process for administrators and customers alike.

> _Currently in progress. Stay tuned for updates!_`,
    img: "/palomalogo.png",
    iconLists: ["/shopify.png", "/tail.svg", "/cloud.svg", "/js.png"],
    link: "Work in progress",
    showWebsite: false,
  },
  {
    id: 2,
    title: "Toernooi.nl",
    des: `**Toernooi.nl Planning Tool**\n\n- Developed for an international sports software organization.\n- Emphasized user experience and performance for complex data models.\n- Ensured scalability and maintainability of front-end logic.\n\n> [Visit Toernooi.nl](https://www.toernooi.nl)`,
    img: "/toernooi.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/nodejs.png", "/js.png"],
    link: "https://www.toernooi.nl",
    showWebsite: true,
  },
  {
    id: 3,
    title: "Reliving",
    des: `**Reliving Platform Enhancements**\n\n- Upgraded data tracking for comprehensive analytics.\n- Implemented multiple event-driven features.\n- Designed and built an improved product page.\n- Developed a new AI chatbot front end from scratch.\n\n> [Explore Reliving](https://www.reliving.nl)`,
    img: "/reliving.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/sass.png"],
    link: "https://www.reliving.nl",
    showWebsite: true,
  },
  {
    id: 4,
    title: "Y.Digital",
    des: `**Y.Digital Government Dashboards**\n\n- Built frontends for two AI-powered government dashboards.\n- Delivered efficient, user-friendly solutions.\n- Focused on accessibility and performance.\n\n> [See Y.Digital](https://www.y.digital/)`,
    img: "/ydigital.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.y.digital/",
    showWebsite: true,
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
    link: "https://www.linkedin.com/in/robin-gillessen",
  },
];
