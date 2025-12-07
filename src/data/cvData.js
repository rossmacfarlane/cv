// CV Data Structure
// Fill in your information below - just replace the example values with your own

export const cvData = {
  about: {
    name: "Ross MacFarlane",
    title: "Staff Software Engineer",
    summary: "A brief professional summary about yourself. This will appear at the top of your CV. Write 2-3 sentences about who you are, what you do, and what you're passionate about.",
    location: "Dunfermline, Scotland",
    email: "your.email@example.com",
    linkedin: "https://www.linkedin.com/in/ross-macfarlane-65616122/",
    github: "https://github.com/rossmacfarlane", // Optional - remove if you don't have one
  },
  
  experience: [
    // Copy this structure for each job - remove the // to uncomment
    {
      id: 1,
      company: "FanDuel",
      position: "Staff Software Engineer",
      location: "Edinburgh, Scotland",
      startDate: "2022-03", // Format: YYYY-MM
      endDate: "Present", // Use "Present" for current job, or "2023-12" for past jobs
      description: "Building web and native mobile applications using React and React Native",
      achievements: [
        "Key achievement or accomplishment 1",
        "Key achievement or accomplishment 2",
        "Key achievement or accomplishment 3",
      ],
      technologies: ["React", "React Native", "TypeScript"], // Technologies used in this role
    },
    {
      id: 2,
      company: "FanDuel",
      position: "Senior Software Engineer",
      location: "Edinburgh, Scotland",
      startDate: "2019-08", // Format: YYYY-MM
      endDate: "2022-03", // Use "Present" for current job, or "2023-12" for past jobs
      description: "Building web and native mobile applications using React and React Native",
      achievements: [
        "Key achievement or accomplishment 1",
        "Key achievement or accomplishment 2",
        "Key achievement or accomplishment 3",
      ],
      technologies: ["React", "React Native", "TypeScript"], // Technologies used in this role
    },
    {
      id: 3,
      company: "FanDuel",
      position: "Software Engineer",
      location: "Edinburgh, Scotland",
      startDate: "2017-08", // Format: YYYY-MM
      endDate: "2019-08", // Use "Present" for current job, or "2023-12" for past jobs
      description: "Building web and native mobile applications using React and React Native",
      achievements: [
        "Key achievement or accomplishment 1",
        "Key achievement or accomplishment 2",
        "Key achievement or accomplishment 3",
      ],
      technologies: ["React", "React Native", "TypeScript"], // Technologies used in this role
    },
    {
      id: 4,
      company: "Ideage Ltd",
      position: "Development Engineer",
      location: "East Kilbride, Scotland",
      startDate: "2014-02", // Format: YYYY-MM
      endDate: "2017-08", // Use "Present" for current job, or "2023-12" for past jobs
      description: "Building cross-platform mobile apps for iOS and Android using Appcelerator Titanium JavaScript framework",
      achievements: [
        "Experience using Appcelerator Titanium JavaScript framework to build cross-platform apps for iOS and Android",
        "Experience using Alloy (MVC) framework",
        "Use of 3rd party libraries such as Backbone.js and Underscore.js",
        "Experience of developing and consuming APIs",
        "Agile Development process having daily stand-ups, sprint planning, sprint reviews, delivery and testing",
        "Use of CI and Source Control tools such as Team City and Git",
        "Unit testing using Jasmine",
      ],
      technologies: ["React", "React Native", "TypeScript"], // Technologies used in this role
    },
    // Add more jobs by copying the structure above
    // {
    //   id: 2,
    //   company: "Previous Company",
    //   position: "Previous Role",
    //   location: "City, Country",
    //   startDate: "2018-06",
    //   endDate: "2019-12",
    //   description: "Description here...",
    //   achievements: [
    //     "Achievement 1",
    //     "Achievement 2",
    //   ],
    //   technologies: ["Python", "Django"],
    // },
  ],
  
  education: [
    // Copy this structure for each degree/education
    {
      id: 1,
      institution: "Heriot-Watt University",
      degree: "Bachelor of Science", // e.g., "Bachelor's", "Master's", "PhD"
      field: "Computer Science", // Field of study
      location: "Edinburgh, Scotland",
      startDate: "2006-09", // Format: YYYY-MM
      endDate: "2010-06",
      description: "Additional details, honors, relevant coursework, etc. (optional)",
    },
  ],
  
  skills: {
    // Add your skills in the appropriate categories
    languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      // Add more languages
    ],
    frameworks: [
      "React",
      "Node.js",
      "Express",
      "Django",
      // Add more frameworks/libraries
    ],
    tools: [
      "Git",
      "Docker",
      "AWS",
      "MongoDB",
      "PostgreSQL",
      // Add more tools/technologies
    ],
    other: [
      "Agile/Scrum",
      "CI/CD",
      "Microservices",
      // Add other skills that don't fit above categories
    ],
  },
  
  projects: [
    // Copy this structure for each project
    {
      id: 1,
      name: "Project Name",
      description: "A detailed description of what this project does, the problem it solves, and your role in it.",
      technologies: ["React", "Node.js", "MongoDB"],
      url: "https://project-url.com", // Optional - remove if no live demo
      github: "https://github.com/username/project", // Optional - remove if not on GitHub
    },
    // Add more projects
    // {
    //   id: 2,
    //   name: "Another Project",
    //   description: "Description...",
    //   technologies: ["Python", "Flask"],
    //   url: "https://another-project.com",
    //   github: "https://github.com/username/another-project",
    // },
  ],
  
  certifications: [
    // Optional - remove this entire section if you don't have certifications
    // {
    //   id: 1,
    //   name: "Certification Name",
    //   issuer: "Issuing Organization",
    //   date: "2023-01", // Format: YYYY-MM
    //   url: "https://certificate-url.com", // Optional
    // },
  ],
};
