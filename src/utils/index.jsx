import energy_tracker from "../images/energy_tracker.jpg";
import password_manager from "../images/password_manager.png";
import url_shortener from "../images/url_shortener.png";

export const landingPageContent =
  "I am Manish Kumar, a full stack web developer. I am deeply passionate and curious about new technological advancements.I am a dedicated and versatile full stack web developer with a strong passion for exploring and mastering the latest technological advancements. My curiosity drives me to continuously learn and innovate, enabling me to create dynamic, efficient, and scalable web applications. With a solid foundation in both front-end and back-end development, I thrive in transforming complex ideas into seamless user experiences.";

export const descContent =
  "As a full stack web developer, I bring a comprehensive skill set that spans both front-end and back-end technologies. I am adept at designing and implementing robust, user-friendly web applications that meet modern standards and exceed user expectations. My passion for technology is driven by an insatiable curiosity about new advancements, which motivates me to stay up-to-date with the latest trends, frameworks, and best practices in the industry. Beyond technical skills, I am a problem solver at heart. I enjoy tackling complex challenges, whether it's optimizing performance, ensuring cross-platform compatibility, or enhancing security. My approach to development is both detail-oriented and strategic, always focusing on the end user while maintaining a strong emphasis on code quality and maintainability.";

export const experiences = [
  {
    year: "2023-present",
    role: "Software developer",
    company: "Cisco",
    description:
      "Led a team in developing and maintaining web applications using React.js and Express.js. Implemented RESTful APIs and integrated with MongoDB database.",
    technologies: ["React.js", "Next.js", "Express.js", "MongoDB"],
  },
  {
    year: "2019-2023",
    role: "Backend developer",
    company: "Infosys",
    description:
      "Led a team in developing and maintaining web applications using Next.js and CI/CD pipeline. Implemented RESTful APIs, implemented sockets and integrated with PostGreSQL database.",
    technologies: ["React.js", "Next.js", "Express.js", "SQL"],
  },
];

export const projects = [
  {
    title: "Password Manager",
    image: password_manager,
    description:
      "A fully functional system with features like strength tester, password generator and password manager(vault) to store passwords of different domains of users. OSWAP and latest NIST guidelines were implemented to ensure industry-standard security and integrity if data storage, retrieval and management.",
    technologies: ["React.js", "Express.js", "HTML", "CSS", "MongoDB"],
  },
  {
    title: "Energy Tracker",
    image: energy_tracker,
    description:
      "An application where user can save and track their energy consumption. It enabled user to perform CRUD operations on the saved information. Each user is assigned with a unique consumerID",
    technologies: ["Express.js", "HTML", "CSS", "Javascript", "MongoDB"],
  },
  {
    title: "URL shortener",
    image: url_shortener,
    description:
      "A web application for generating short URLs of any long website links to improve branding and promotion for companies, and to provide convenience for general users. It is deployed and is live on render.",
    technologies: ["Express.js", "HTML", "CSS", "Javascript", "MongoDB"],
  },
];

export const contact = {
  address: "Jain Global Campus, Kanakpura Road, Karnataka - 562112, India",
  phoneNo: "+91 6783232923",
  email: "tuffmanish@gmail.com",
};
