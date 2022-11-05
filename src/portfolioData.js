/* this file contains all the objects ,
 one object or an array for each container (section) */

const colorContainerData = {
  fontIcon: "fas fa-cog",
  paragraphOne: `Choose your favorite color`,
  paragraphTwo: `default color`,
};

const defaultColor = {
  defaultColor: "#2ecc71",
};
 


const colorList = [
  { id: 1, color: "#fb7813" },
  { id: 2, color: "#f54291" },
  { id: 3, color: "#0779e4" },
  { id: 4, color: "#efa8e4" },
  { id: 5, color: "#fd5e53" },
];

const navbarLinks = [
  { id: 1, navigateTo: "#about", label__span__title: "About" },
  { id: 2, navigateTo: "#skills", label__span__title: "Skills" },
  { id: 3, navigateTo: "#projects", label__span__title: "Projects" },
  { id: 4, navigateTo: "#resume", label__span__title: "Resume" },
  { id: 5, navigateTo: "#contact", label__span__title: "Contact" },
];

const logoData = [
  {
    id: 1,
    name__ariaLabel: "Shubham Gohad",
    first__word: "Shubham",
    inspan: "Gohad",
  },
];

const headerInfo = {
  imgURL:require("./images/Shubham1.png"),
  name: "I'm Shubham",
  job: "Full Stack Web Developer ",
  resumeLink: require("./download/ShubhamGohad_Resume.pdf"),
  fontIcon: "fas fa-download",
  AnchorText: "download resume",
};
const headerImage = {
  headerImage_src: require("./images/header_image-Recovered-Recovered.png"),
  // ./images/header_image-Recovered-Recovered.png
};
const projectsData = [
  {
    id: 1,
    liveDemo: "https://eclectic-paletas-0001f4.netlify.app/",
    projectName: "Clone of Mytheresa.com",
    imgURL: require("./images/mytheresa.png"),
    liveDemoText: "Live Demo",
    project__info:
      "Mytheresa.com is an online store for men, women, and kids. You can buy a wide range of branded clothes, apparel, accessories, and shoes online It was a group project, with 5 members. Tech Stack: HTML, CSS, JavaScript",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/ArjunSinghBhakuni/Mytheresa-clone-website",
    filter__word: "javascript",
  },
  {
    id: 2,
    liveDemo: "https://deluxe-faun-2ed95e.netlify.app/",
    projectName: "Clone of NORDSTROM.com",
    imgURL: require("./images/nordstrom.png"),
    liveDemoText: "Live Demo",
    project__info:
      "It is a leading fashion retailer offering compelling clothing, shoe accessories for men, women, kids. Tech Stack: HTML, CSS, JavaScript",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/shivambais/projectAllFileInOne ",
    filter__word: "javascript",
  },
  {
    id: 3,
    liveDemo: "https://inquisitive-cupcake-904272.netlify.app/",
    projectName: "Clone of urbancompany.com",
    imgURL: require("./images/urbancompany.png"),
    liveDemoText: "Live Demo",
    project__info:
      "Urban Company is your one-stop destination for expert local services. Get dozens of trusted professionals near you to take care of all your home and beauty product provider. Tech Stack: React, CSS, JavaScript, Chakra UI, Redux",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/shubhamgohad221997/gratis-shoe-2388 ",
    filter__word: "react",
  },
  
  {
    id: 4,
    liveDemo: "https://clockifyy.netlify.app//",
    projectName: "Clone of Clockify ",
    imgURL: require("./images/time.png"),
    liveDemoText: "Live Demo",
    project__info:
      "Clockify is one of the best Time tracking website. In this website you can easily track your time and manage also. It was a group project, with 5 members. My task in this project was to create a Sidebar, Time tracker page and Manage the backend of time tracker page. Tech Stack: React, CSS, JavaScript, Chakra UI, Redux, MongoDB, express, nodemon ",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/Durgashankar001/clockify_clone",
    filter__word: "react",
  },
  
];

const portfolioSection = {
  title: "projects",
  paragraph: `Here are some of my projects. You can check the projects out using
          live preview, and most of these projects are open source code feel
          free to take a copy of your own. I would love to receive your feedback
          about my work through an email or contact section.`,
};

const portfolioList = [
  { id: 1, filtering: ".all", list__word: "All", active: "custom__active" },
  { id: 2, filtering: ".javascript", list__word: "JavaScript", active: "" },
  { id: 3, filtering: ".react", list__word: "React", active: "" },
  { id: 4, filtering: ".react", list__word: "React", active: "" },
];
const SkillsSection = {
  id: "skills",
  title: "Skills",
  // skillsImage: require("./images/skills.png"),
};

const SkillsImages = [
  {
    id: 1,
    // imgURL: require("./images/html5.svg"),
    skillName: "HTML5",
  },
  {
    id: 2,
    skillName: "CSS3",
  },
  {
    id: 3,
    skillName: "JavaScript",
  },
  {
    id: 4,
    skillName: "React",
  },
  {
    id: 5,
    skillName: "Redux",
  },
  {
    id: 6,
    skillName: "Bootstrap",
  },
  {
    id: 7,
    skillName: "Chakra-ui",
  },
  {
    id: 8,
    skillName: "JSON",
  },
  {
    id: 9,
    skillName: "API",
  },
  {
    id: 10,
    skillName: "Git-Hub",
  },
];

const AboutSection = {
  id: "about",
  title: "about me",
  paragraph: `✨ I'm a Full Stack Web Developer 👨🏻‍💻 who loves building and developing applications and websites. I'd love to combine my passion for programming and learning with my Full Stack web Developer skills to continue building 🧑‍💻 more personalized applications and websites for people.`,
  paragraph2: `I have a passion to learn everything new ❤, contributing to the progress of mankind, and show creativity and possibilities in everything I do ✨.`,
};
const AboutServices = {
  title: "services",
};


const resumeData = {
  id: "resume",
  resumeInfo: ` If you would like to learn more about me or have PDF copy of my resume
          please feel free to click the download button, The resume provides
          detailed information about me and more contact information.`,
  resumeAnchorText: "Download Resume",
  resumeURL: require("./download/ShubhamGohad_Resume.pdf"),
};

const contactData = {
  id: "contact",
  contactText: "contact me",
  submitButton: "Submit",
  inputName: "Your name",
  inputEmail: "Email",
  inputSubject: "Subject",
  textArea: "message",
};

const FooterData = {
  FooterText: "find me on",
};

const footerSocialData = [
 
  {
    id: 1,
    socialName: "Linkedin",
    socialImg: "fab fa-linkedin",
    socialURL: "https://www.linkedin.com/in/shubham-gohad-895321230/",
  },
  {
    id: 2,
    socialName: "Github",
    socialImg: "fab fa-github",
    socialURL: "https://github.com/shubhamgohad221997",
  },
  {
    id: 3,
    socialName: "Gmail-id",
    socialImg: "fa fa-envelope",
    socialURL: "mailto:shubhamgohad221997@gmail.com",
  },
  {
    id: 4,
    socialName: "Medium",
    socialImg: "fa fa-blog",
    socialURL: "",
  },
  {
    id: 5,
    socialName: "Mobile",
    socialImg: "fa fa-mobile",
    socialURL: "tel:+917507321727",
  },

];

const copyright = {
  first__word: "Copyright",
  second__word: "Shubham Gohad 2022",
};

export {
  defaultColor,
  colorContainerData,
  colorList,
  navbarLinks,
  logoData,
  headerInfo,
  headerImage,
  projectsData,
  portfolioList,
  portfolioSection,
  SkillsImages,
  SkillsSection,
  AboutSection,
  AboutServices,
  resumeData,
  contactData,
  FooterData,
  footerSocialData,
  copyright,
};
