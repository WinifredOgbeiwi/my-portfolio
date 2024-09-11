import Ebook from "../../assets/Images/projects/ebook.png"
import EbookVideo from "../../assets/videos/ebook.mp4";
import Stellar from "../../assets/Images/projects/website-builder.png" ;
import StellarVideo from "../../assets/videos/stellar.mp4";
import Firma from "../../assets/Images/projects/3.png";
import Url from "../../assets/Images/projects/url_shorten.png";
import Easei2 from "../../assets/Images/projects/5.png";
import EaseiVideo from "../../assets/videos/easei.mp4";
import Ceti from "../../assets/Images/projects/ceti.png";
import CetiVideo from "../../assets/videos/ceti.mp4";
const projectDatas = [
  {
    id: 1,
    cover: Ceti,
    video: CetiVideo,
    title: "Ceti Group",
    description:
      "Ceti Group is a real life consulting firm that specializes in investment and business advisory.",
    problem:
      "The firm needed a credible online presence to showcase their expertise and attract clients, with content accessible in both Polish and English to cater to a diverse clientele.",
    solution:
      "Built a modern, responsive, bilingual website that reflects the firm's professionalism. The site includes amongst others, detailed service descriptions and features a contact form for users to send emails directly, streamlining client communication.",
    features: "",
    github: "",
    live: "https://cetigroup.pl",
    technologies: ["React", "Tailwind", "i18next"],
  },
  {
    id: 2,
    cover: Easei2,
    video: EaseiVideo,
    title: "Easei",
    description:
      "Contributed to Easei, a real life comprehensive platform for generating and managing invoices and receipts in one place. The website provides users with a streamlined solution for creating, tracking, and organizing financial documents.",
    problem:
      "Businesses often struggle with managing multiple tools for invoicing and receipt generation, leading to inefficiencies and errors in financial record-keeping.",
    solution:
      "Created a single interface for generating invoices and receipts, reducing the need for multiple tools, and designed an intuitive dashboard for the easy creation and management of financial documents. Implemented customizable templates to streamline the invoicing and receipting processes, and integrated features for tracking and organizing past transactions for easy reference.",
    live: "https://www.easei.africa/",
    github: "",
    technologies: ["React", "Styled-Component", "Redux", "REST API"],
  },
  {
    id: 3,
    cover: Firma,
    video: null,
    title: "Firma",
    description:
      "Developed Firma, an online marketplace designed to connect clients with lawyers efficiently. The platform facilitates seamless communication between users and legal professionals and includes integrated payment processing.",
    problem:
      "Finding and engaging with the right legal professional can be challenging and inefficient, often requiring multiple steps and intermediaries.",
    solution:
      "Developed a marketplace platform where clients can easily find and connect with lawyers based on their needs, integrated a real-time chat system for direct communication between clients and lawyers, and incorporated a secure payment gateway to facilitate secure transactions between clients and legal professionals.",
    features:
      "Secure Wallet Integration, Built-in chat system, Document Management, Review and Rating System, User Dashboard",
    github: "",
    technologies: ["React", "NodeJs", "ExpressJs", "Mongoose", "Bootstrap"],
  },

  {
    id: 4,
    cover: Stellar,
    video: StellarVideo,
    title: "Steller Website Builder",
    description:
      "Steller Website Builder is a dynamic and innovative multi-paged website designed to showcase the expertise and capabilities of a company dedicated to crafting high-quality websites for clients. ",
    problem:
      "To provide a comprehensive example of a website-building tool that not only highlights a company’s web development skills but also serves as a practical resource for others seeking inspiration or a template for their own projects.",
    solution:
      "Throughout the project, a visually appealing and functional website was developed for a web development company, showcasing advanced front-end technologies. The use of React's component-based architecture was mastered to ensure a scalable and maintainable codebase, and Tailwind CSS was employed to rapidly and flexibly style the site, adhering to modern design principles and enhancing responsiveness.",
    feature: "Blog Integration, Contact Form, FAQ",
    live: "https://i-made-website-builder.vercel.app/",
    github: "",
    technologies: ["React", "Tailwind"],
  },
  {
    id: 5,
    cover: Ebook,
    video: EbookVideo,
    title: "Ebook Library",
    github: "",
    description:
      " Ebook Library is a single-page web platform developed with React and Tailwind CSS, leveraging REST and Google Books APIs. It provides a comprehensive resource for readers and authors, offering a vast collection of eBooks that are accessible from any device, anywhere.",
    live: "https://ebooks-google-api.vercel.app/",
    problem:
      "Readers often struggle to find a centralized, user-friendly platform where they can easily access a wide range of eBooks.",
    solution:
      "Integrated the Google Books API to enable users to search for eBooks, discover new content, and explore a wide range of genres and titles. Ensured a fully responsive design, allowing seamless reading on any device, whether a smartphone, tablet, or desktop. Utilized RESTful API services to dynamically manage content, ensuring the platform remains up-to-date and fully functional.",
    feature: "",
    technologies: ["React", "Tailwind", "REST Api", "Google API"],
  },

  {
    id: 6,
    cover: Url,
    video: null,
    github: "https://github.com/WinifredOgbeiwi/URL-Shortener",
    title: "URL Shorten",
    live: "https://url-shortener-winifredogbeiwi.vercel.app/",
    technologies: ["Rest API", "React", "Tailwind"],
    problem:
      "Long URLs can be cumbersome to share and track. Users need a simple, reliable tool to shorten, manage, and share URLs with ease.",
    solution: "Developed a feature that instantly converts long URLs into short, easy-to-share links and added a one-click functionality for users to quickly copy the shortened URLs.",
    feature: "",
    description:
      "LinkShortenPro is your go-to web app, designed with simplicity in mind. It allows one to quickly and effortlessly shorten long URLs into concise, shareable links. It utilizes Goggle API that allows users to shorten URL links and its built with Mobile Compatibility",
  },
  // {
  //   id: 7,
  //   cover: Lokum,
  //   video: null,
  //   title: "Lokum Health Landing Page",
  //   github: "https://github.com/WinifredOgbeiwi/Lokum-HeathCare-Service",
  //   live: "https://lokum-healthcare.netlify.app/",
  //   technologies: ["React", "Tailwind"],
  //   problem: "",
  //   solution: "",
  //   feature: "",
  //   heading: "Lokum Med-Health Care",
  //   description:
  //     "A Landing page for Lokum Med-Health Care that incorporated FAQ section",
  // },
  // {
  //   id: 3,
  //   cover: Todo,
  //   github: "https://github.com/WinifredOgbeiwi/Todo-List",
  //   live: "todo-list-winifredogbeiwi.vercel.app",
  //   lang1: "HTML",
  //   lang2: "CSS",
  //   lang3: "JavaScript",
  //   heading: "Todo List",
  //   description:
  //     "A web app inclusive of a login and sign in page that allows users to input tasks with the ability to edit and delete ",
  // },
];
export default projectDatas;
