import { links } from "@/config";
import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certificates", link: "#certifications" },
  { name: "Job Simulations", link: "#simulations" },
  { name: "Contact", link: "#contact" },
] as const;

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
    title: "Currently building a app for runners to track their runs and share with friends.",
    description: "The Inside Scoop",
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
] as const;

export const projects = [
  {
    id: 1,
    title: "AI-Council: multiagent AI system for collaborative problem-solving",
    des: "A collaborative design tool with real-time collaboration, vector editing, and a responsive UI.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/Hibernate.svg", "/ts.svg", "/j.svg", "/sp.svg"],
    link: "https://github.com/shivammislankar/aicouncil-backend",
    sourceCode: "https://github.com/shivammislankar/aicouncil-backend",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/j.svg", "/ts.svg", "/sp.svg", "/Hibernate.svg"],
    link: "https://github.com/shivammislankar/auditor",
    sourceCode: "https://github.com/shivammislankar/auditor",
  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "https://ai-imaginify.netlify.app",
  //   sourceCode: "https://github.com/sanidhyy/imaginify",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://app-iphone.netlify.app",
  //   sourceCode: "https://github.com/sanidhyy/apple-clone",
  // },
] as const;

export const certifications = [
  {
    id: 1,
    title: "Attendance Hashgraph Developer",
    org: "The Hashgraph Association",
    credential_ID:"e46e0d48-eff1-4ec6-a549-8ba0455ad6f9",
    link: "https://certs.hashgraphdev.com/e46e0d48-eff1-4ec6-a549-8ba0455ad6f9.pdf",
  },
   {
    id: 2,
    title: "Prompt Engineering ",
    org: "Cognitive Class",
    credential_ID:"f5c1a3cecb064d909e3f7f1ad6c64ebc",
    link: "https://courses.cognitiveclass.ai/certificates/f5c1a3cecb064d909e3f7f1ad6c64ebc",
  },
   {
    id: 3,
    title: "Agile Project Mangement Certifications",
    org: "HP LIFE",
    credential_ID:"c8ccc899-8a01-4cf4-873e-5415ccbeb200",
    link: "https://www.life-global.org/certificate/c8ccc899-8a01-4cf4-873e-5415ccbeb200",
  }, {
    id: 4,
    title: "UI/UX For Beginners ",
    org: "Great Learning",
    credential_ID:"QDZMLPFL",
    link: "https://www.mygreatlearning.com/certificate/QDZMLPFL",
  },
];

export const simulations = [
  {
    id: 1,
    company: "J.P. Morgan",
    role: "Software Engineering Simulation",
    platform: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_Zi7g93shjs3TKcqzv_1725189886841_completion_certificate.pdf",
  },
  {
    id: 2,
    company: "Electronic Arts",
    role: "Software Engineering Job Simulation",
    platform: "Forage",
    link: "https://www.theforage.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_Zi7g93shjs3TKcqzv_1773746237633_completion_certificate.pdf",
  },
  {
    id: 3,
    company: "Hewlett Packard Enterprise",
    role: " Software Engineering Job Simulation",
    platform: "Forage",
    link: "https://www.theforage.com/completion-certificates/fgHAi6dLhpRsGKyyN/da2T3WZCbMAJD7bNB_fgHAi6dLhpRsGKyyN_Zi7g93shjs3TKcqzv_1773751049067_completion_certificate.pdf",
  },


];
export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

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
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
 
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/shivammislankar",
  },
  
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shivam-mislankar/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "JavaScript"],
  stack2: ["Java", "Spring Boot", "Hibernate"],
} as const;
