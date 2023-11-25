import React from "react";
import Gallery from "./Posts/Gallery";
import { compareDates, initializePostObj } from "../Utility";
import {
  PRESENT,
  RESEARCH,
  PYTHON,
  JS,
  REACT,
  PHP,
  HTML,
  NEXT,
  RUBY,
  RUBY_ON_RAILS,
  ANGULARJS,
  JAVA,
  ORACLE,
  COSMOS,
  AGILE,
  BITBUCKET,
} from "../Constants";

export const experiences = [
  {
    title: "University of Michigan",
    subtitle: "EECS 203 (Discrete Math) Instructional Aide / GSI",
    description:
      "\tAs an Instructional Aide for EECS 203, I work on variety on tasks to both directly and indirectly support student learning. I directly support students by answering questions on piazza (a Q&A forum), answer questions during online zoom lecture, and hold weekly office hours and discussion sections for students to review and practice with lecture material. Indirectly, I write and review homework and exam questions, and I worked as the lead for the exam management team where I set detailed timeline for each exam, allocate staffs for proctoring the exam, and ensuring exam question writing and grading goes smoothly.\n\tI have always loved math and teaching, and this was the perfect combination of both. The amount of responsibility as an Instructional Aide that is not directly teaching was overwhelming at first, but as a student myself, I started to notice how important getting these tasks correct is imporant. Every semester, there's always homework and exam questions with issues that are obviously not proof read/tested and is always stressful especially in an exam setting. Since realizing how important it is to make sure these errors don't occur, it has been a crucial responsibility for me as an instructional aide. Starting Fall 2021, I started sharing my knowledge managing the exam logistics with staffs from other courses in effort to streamline the student experiences during the stressful exam time overall.",
    imgs: ["m.png"],
    startDate: "08-2020",
    endDate: PRESENT,
    tags: [
      "Instructional Aide",
      "Management",
      "Discrete Math",
      "Logic",
      "Counting",
    ],
    priority: -1,
  },
  {
    title: "University of Michigan",
    subtitle: "Research Assistant",
    description:
      "I assisted in researching how the newspaper paywall effects the content and frequency of digital articles published. We tried seeing trend of the newspaper by topic (sports, politics, etc.), census region, city demographics (like average income and population). I researched data and performed topic modelling techniques like LDA and GloVe to assist in this process.",
    imgs: ["m.png"],
    startDate: "12-2021",
    endDate: PRESENT,
    tags: [RESEARCH, PYTHON, "Topic Modelling", "LDA", "GloVe"],
    priority: -1,
  },
  {
    title: "PID Inc.",
    subtitle: "Full Stack Intern",
    description:
      "I actually started this internship as just a front-end developer intern. I was given a project that would be worked on with my mentor and another intern who would of have worked on the back-end. However, the other intern quit a month into the internship due to his high school workload so I volunteered to work on the back-end as well, getting somewhat promoted (?) to a full-stack developer. I worked on developing a management system using React and Laravel that replaces an existing excel file that automates data entry, calculations, and visualizations. \n\t Working on more than 30 different web pages made me understand just how important code reusability is important. Especially in a web application setting where I have to keep styles consistent across pages. I made sure to utilize everything that was reused across different pages including, data entry and verification, pagination, and filter feature. In order to do so, I learned how to make functions and React Component as generic as I can without overcomplicating it so that I can utilize them in as many different settings as I can.",
    imgs: ["pid.jpeg"],
    startDate: "09-2020",
    endDate: "08-2021",
    tags: [REACT, JS, "Laravel", PHP],
  },
  {
    title: "Cookpad",
    subtitle: "Software Engineer Intern",
    description:
      "\tI worked on integrating SWR React on their main service website to cache API requests to 'My Folder'. This change reduced load time from around seconds to 2 milliseconds. " +
      "Further, I had the opportunity to assist with their new MVP by developing web applications using Next.js and Ruby on Rails with GraphQL API." +
      "\n\tThis was the my first time using GraphQL and I absolutely loved the flexibility it provides. I remember in my previous internship at PID Inc. I remember having to create a different API endpoint for every data to prevent over-fetching. This of course comes with multiple files to implement for each endpoint like the Controller, Service, and DAO. For GraphQL, once the server side was implemented, it felt like as if the client-side could reach into the database to access whatever data it needs with a bonus feature of validation and type checking built in to the request.",
    imgs: ["cookpad.jpeg"],
    startDate: "08-2021",
    endDate: "08-2021",
    tags: [JS, HTML, REACT, NEXT, RUBY, RUBY_ON_RAILS],
  },
  {
    title: "Nortonlifelock",
    subtitle: "Software Engineer Intern",
    description:
      "\tI was placed on the Norton Communication Platform team where I worked on a platform agnostic communication messaging platform that is used to target end users for security news, product updates, product cross-sells, and more. I had the opportunity to particupate in their the agile iterative approach using Jira, utilizing Maven, Jenkins for unit and integration testing, along with Bitbucket and git for source management to deliver features quickly and with high quality.\n\tThe most valuable skill I think I have acquired from this internship is probably reading code. Never thought this is something that need to be learned, but when there are hundreds of files in the code base, figuring out which file to look at, navigating through numerous number of files so that I can understand what a singular function does was not a skill I had going into this internship. \n\tOf course, the various languages and framework I was able to learn and interact with has also been a great experience for me. For the front-end, I provided new features to the GUI using Javascript + AngularJS to help our Customer Retention Management team intelligently configure messaging campaigns to select end-users for Nortonlifelock products. For the back-end, I implemented REST APIs through Java, interacting with the Oracle and Azure Cosmos Databases. Participated in Agile iterative approach using Jira while utilizing Maven, Jenkins for unit and integration testing, along with Bitbucket and git for source management to deliver features quickly and with high quality.",
    imgs: ["norton.png"],
    startDate: "05-2022",
    endDate: "08-2022",
    tags: [
      JS,
      ANGULARJS,
      JAVA,
      ORACLE,
      COSMOS,
      HTML,
      AGILE,
      BITBUCKET,
      "Maven",
      "Jenkins",
    ],
  },
  {
    title: "Optiver",
    subtitle: "Software Engineer Intern",
    description:
      "\tEnhanced a core trading tool by integrating an automation for a daily parameter update in WPF saving over $100K in trading operations cost each year. \n\t Further, I worked on integrating a new C# server that automates trade booking by connecting to broker API through the FIX protocol and visualizes trader errors",
    imgs: ["optiver.png"],
    startDate: "06-2023",
    endDate: "08-2023",
    tags: [
      "C#",
      "WPF",
      "Automation",
      "Fix Protocol",
      BITBUCKET,
    ],
  },
];

experiences.sort((a, b) => (compareDates(a, b) ? 1 : -1));

initializePostObj(experiences, "/ExperienceImg/");

export default function Project() {
  return <Gallery contents={experiences} />;
}
