// CV Data Structure
// Fill in your information below - just replace the example values with your own

export const cvData = {
  about: {
    name: "Ross MacFarlane",
    title: "Staff Software Engineer",
    summary: "React / React Native App Developer specializing in building cross-platform mobile and web applications. Experienced in React, React Native, JavaScript, Android, Kotlin, and Java with a focus on delivering high-quality software solutions.",
    location: "Dunfermline, Scotland, United Kingdom",
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
      location: "Edinburgh City, Scotland, United Kingdom",
      startDate: "2022-03", // Format: YYYY-MM
      endDate: "Present", // Use "Present" for current job, or "2023-12" for past jobs
      description: "Building web and native mobile applications using React and React Native",
      achievements: [
        "Key achievement or accomplishment 1",
        "Key achievement or accomplishment 2",
        "Key achievement or accomplishment 3",
      ],
      technologies: ["React Native", "Git"], // Technologies used in this role
    },
    {
      id: 2,
      company: "FanDuel",
      position: "Senior Software Engineer",
      location: "Edinburgh City, Scotland, United Kingdom",
      startDate: "2019-08", // Format: YYYY-MM
      endDate: "2022-03", // Use "Present" for current job, or "2023-12" for past jobs
      description: "Building web and native mobile applications using React and React Native",
      achievements: [
        "Key achievement or accomplishment 1",
        "Key achievement or accomplishment 2",
        "Key achievement or accomplishment 3",
      ],
      technologies: ["React Native", "Git"], // Technologies used in this role
    },
    {
      id: 3,
      company: "FanDuel",
      position: "Software Engineer",
      location: "Edinburgh, United Kingdom",
      startDate: "2017-08", // Format: YYYY-MM
      endDate: "2019-08", // Use "Present" for current job, or "2023-12" for past jobs
      description: "Building web and native mobile applications using React and React Native",
      achievements: [
        "Key achievement or accomplishment 1",
        "Key achievement or accomplishment 2",
        "Key achievement or accomplishment 3",
      ],
      technologies: ["Android", "Kotlin"], // Technologies used in this role
    },
    {
      id: 4,
      company: "Ideagen PLC",
      position: "Development Engineer",
      location: "East Kilbride",
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
      technologies: ["Appcelerator Titanium", "JavaScript", "Alloy", "Backbone.js", "Underscore.js", "Team City", "Git", "Jasmine"], // Technologies used in this role
    },
    {
      id: 5,
      company: "Agria Pet Insurance",
      position: "Software Developer",
      location: "Aylesbury",
      startDate: "2012-06", // Format: YYYY-MM
      endDate: "2014-02", // Use "Present" for current job, or "2023-12" for past jobs
      description: "C#/C++ winforms development with SQL Server",
      achievements: [
        "C#/C++ winforms development with SQL Server",
        "Investigation of system faults providing software or data fixes where appropriate",
        "Design, development, testing and implementation of new projects or updates to existing software",
        "Work closely with customers and others in the business to ensure software is delivered on time and resolve any issues that may arise",
        "Provide regular updates of project work",
      ],
      technologies: ["C#", "C++", "SQL Server", "WinForms"], // Technologies used in this role
    },
    {
      id: 6,
      company: "Credosoft",
      position: "Consultant/Developer",
      location: "Glasgow, United Kingdom",
      startDate: "2010-06", // Format: YYYY-MM
      endDate: "2012-05", // Use "Present" for current job, or "2023-12" for past jobs
      description: "C# Winforms, windows services and ASP.net development with Oracle",
      achievements: [
        "C# Winforms, windows services and ASP.net development with Oracle",
        "Oracle PL/SQL development",
        "Software testing and documentation",
        "Provide support to customers",
        "Consultant / Trainer to customer sites worldwide",
        "Full development cycle",
      ],
      technologies: ["C#", "ASP.NET", "Oracle", "PL/SQL", "WinForms", "Windows Services"], // Technologies used in this role
    },
    {
      id: 7,
      company: "MP Locums",
      position: "Web and Database Developer",
      location: "United Kingdom",
      startDate: "2009-06", // Format: YYYY-MM
      endDate: "2009-11", // Use "Present" for current job, or "2023-12" for past jobs
      description: "Created a new website for the company and developed database features",
      achievements: [
        "Created a new website for the company",
        "Increased SEO and Social Networking Services for the company",
        "Developed the database to include new features and the way data was displayed",
      ],
      technologies: ["Web Development", "Database Development", "SEO"], // Technologies used in this role
    },
    {
      id: 8,
      company: "TomRauch.com",
      position: "Flex/Actionscript Developer",
      location: "United Kingdom",
      startDate: "2010-01", // Format: YYYY-MM
      endDate: "2010-04", // Use "Present" for current job, or "2023-12" for past jobs
      description: "Flex/Actionscript development",
      achievements: [
        "Flex/Actionscript development",
      ],
      technologies: ["Flex", "ActionScript"], // Technologies used in this role
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
      degree: "BSc(Hons)", // e.g., "Bachelor's", "Master's", "PhD"
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
      "Java",
      "Kotlin",
      "C#",
      "C++",
      "ActionScript",
      "PL/SQL",
      // Add more languages
    ],
    frameworks: [
      "React",
      "React Native",
      "ASP.NET",
      "Alloy",
      "Backbone.js",
      "Underscore.js",
      "Flex",
      // Add more frameworks/libraries
    ],
    tools: [
      "Git",
      "Team City",
      "SQL Server",
      "Oracle",
      "Jasmine",
      // Add more tools/technologies
    ],
    other: [
      "Agile/Scrum",
      "CI/CD",
      "Appcelerator Titanium",
      "Android Development",
      "iOS Development",
      "WinForms",
      "Windows Services",
      "SEO",
      // Add other skills that don't fit above categories
    ],
  },
  
  projects: [
    // Copy this structure for each project
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
