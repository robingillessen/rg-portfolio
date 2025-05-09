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
    description: "Elevate Your Online Identity",
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
    des: `

## Shopify Webshop

### Front Page
![Paloma Media Front Page](/paloma.png)

---

Paloma Media is a custom Shopify webshop built from the ground up to address the unique needs of a media-focused business. The primary goal was to create a seamless, modern e-commerce experience that could handle both standard product sales and a bespoke quotation flow for tailored services.

**Why:**
- The client needed a flexible platform that could support custom service requests.
- Off-the-shelf Shopify themes were too restrictive for the desired user experience and business logic.

**How:**
- Designed and implemented a custom Shopify theme using Liquid, React, and TailwindCSS, ensuring pixel-perfect UI/UX and full control over the customer journey.
- Architected a unique quotation flow, modeling complex data relationships and integrating deeply with the Shopify API to allow customers to request and manage custom quotes.
- Integrated Cloudinary for image management, optimizing media delivery and reducing load times, which was critical for a visually rich site.
- Developed a user-friendly backend interface for administrators to manage quotations and orders efficiently, reducing manual work and errors.

**What:**
- Delivered a high-performance, scalable webshop with a modern look and feel.
- Achieved a seamless blend of e-commerce and service quotation, setting the client apart from competitors.
- The project is ongoing, with continuous improvements based on user feedback and analytics.

> _Currently in progress. Stay tuned for updates!_`,
    preview:
      "Paloma Media is a custom Shopify webshop built from the ground up to address the unique needs of a media-focused business. The primary goal was to create a seamless, modern e-commerce experience that could handle both standard product sales and a bespoke quotation flow for tailored services.",
    img: "/palomalogo.png",
    iconLists: ["/shopify.png", "/tail.svg", "/cloud.svg", "/js.png"],
    link: "Work in progress",
    showWebsite: false,
  },
  {
    id: 2,
    title: "Toernooi.nl",
    des: `

## Toernooi.nl Planning Tool

Toernooi.nl is a leading platform for organizing and managing sports tournaments internationally. I was brought in to modernize and optimize the front-end, focusing on scalability, maintainability, and user experience for both organizers and participants.

**Why:**
- The existing platform was functional but suffered from performance bottlenecks and a dated user interface.
- The client wanted to future-proof the application and make it easier to extend with new features.

**How:**
- Rebuilt the front-end using Next.js and TypeScript, introducing modular architecture and best practices for large-scale React applications.
- Refactored complex data flows to improve performance and reliability, especially for real-time scheduling and results updates.
- Collaborated closely with backend teams to ensure seamless API integration and data consistency.
- Prioritized accessibility and responsive design, making the tool usable on any device.

**What:**
- Delivered a robust, maintainable codebase that supports rapid feature development.
- Significantly improved load times and user satisfaction scores.
- The platform now serves thousands of users during peak tournament periods with minimal downtime.
`,
    preview:
      "Toernooi.nl is a leading platform for organizing and managing sports tournaments internationally. I was brought in to modernize and optimize the front-end, focusing on scalability, maintainability, and user experience for both organizers and participants.",
    img: "/toernooi.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/nodejs.png", "/js.png"],
    link: "https://www.toernooi.nl",
    showWebsite: true,
  },
  {
    id: 3,
    title: "Reliving",
    des: `

## Reliving Platform Enhancements

Reliving is a fast-growing platform in the circular economy, focused on giving furniture and home goods a second life. My role was to enhance the platform's analytics, user engagement, and product experience through targeted feature development and technical improvements.

**Why:**
- The business needed deeper insights into user behavior to drive growth and retention.
- There was a need to differentiate the product page experience and introduce innovative features like an AI chatbot.

**How:**
- Upgraded the analytics stack, implementing event-driven tracking and custom dashboards for actionable insights.
- Designed and built a new product page with improved UI/UX, leveraging React and Sass for rapid iteration and maintainability.
- Developed a custom AI chatbot front-end from scratch, integrating with backend AI services to provide real-time support and recommendations.
- Worked closely with stakeholders to prioritize features that deliver measurable business value.

`,
    preview:
      "Reliving is a fast-growing platform in the circular economy, focused on giving furniture and home goods a second life. My role was to enhance the platform's analytics, user engagement, and product experience through targeted feature development and technical improvements.",
    img: "/reliving.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/sass.png"],
    link: "https://www.reliving.nl",
    showWebsite: true,
  },
  {
    id: 4,
    title: "Y.Digital",
    des: `

## Y.Digital Government Dashboards

Y.Digital specializes in AI-powered solutions for government and enterprise clients. I was responsible for building the frontends for two complex government dashboards, with a strong focus on accessibility, performance, and maintainability.

**Why:**
- Government clients require robust, accessible, and secure solutions that can handle sensitive data and high user loads.
- The dashboards needed to present complex analytics in a clear, actionable way for non-technical users.

**How:**
- Built the dashboards using Next.js and TypeScript, applying strict accessibility standards (WCAG) and performance optimizations.
- Implemented modular, reusable components to speed up development and ensure consistency across projects.
- Collaborated with backend engineers to visualize large datasets efficiently and interactively.

**What:**
- Delivered two high-impact dashboards that empower government stakeholders to make data-driven decisions.
- Achieved high accessibility scores and fast load times, even with complex data visualizations.

`,
    preview:
      "Y.Digital specializes in AI-powered solutions for government and enterprise clients. I was responsible for building the frontends for two complex government dashboards, with a strong focus on accessibility, performance, and maintainability.",
    img: "/ydigital.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.y.digital/",
    showWebsite: true,
  },
  {
    id: 5,
    title: "WoningNet",
    des: `

## WoningNet Platform

WoningNet is a platform used by over 4 million users to search for social housing in the Netherlands. My role involved end-to-end frontend ownership, improving usability and performance while extending the data model to support new features.

**Why:**
- To provide a scalable, accessible platform that meets the housing needs of users across regions.

**How:**
- Maintained and extended the frontend architecture.
- Collaborated weekly on UI/UX with design teams.
- Integrated REST APIs with embedded logic.
- Extended the complex data model to accommodate new housing partners.
- Supported multiple SCRUM teams with knowledge sharing and onboarding.

**What:**
- Delivered stable, user-friendly updates to a live platform with high traffic.
- Mentored new developers and aligned front-end vision across teams.

`,
    preview:
      "WoningNet is a platform used by over 4 million users to search for social housing in the Netherlands. My role involved end-to-end frontend ownership, improving usability and performance while extending the data model to support new features.",
    img: "/woningnet.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/api.svg"],
    link: "https://www.woningnet.nl",
    showWebsite: true,
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
