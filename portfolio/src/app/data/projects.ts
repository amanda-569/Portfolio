import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    "id": 1,
    "title": "React Redux Movie Site",
    "slug": "react-redux-movie-site",
    "excerpt": "A classic React Redux project that gets data from a 3rd party API and explores the common interplay between React and Redux.",
    "body": "<p>This project is a quintessential example of a React Redux application, skillfully designed to seamlessly retrieve and manipulate data sourced from a third-party API. Leveraging the power of React, a popular JavaScript library for building user interfaces, and Redux, a state management library, this project delves into the intricate interplay between these two technologies.</p><p>At its core, the application showcases the fundamental principles of React, emphasizing the creation of reusable and modular components that efficiently render dynamic user interfaces. Through the integration of Redux, the state of the application is meticulously managed, ensuring a single source of truth for data throughout the entire application.</p>",
    "url": "https://final-movie-project.vercel.app/",
    "published_date": "2024-02-20",
    "image": "Cropped_Movie_Project.png",
    "thumb": null,
    "category_id": 1,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 1, "slug": "full-stack", "name": "Full Stack" },
    "tags": [
      {
        "id": 3,
        "name": "React",
        "slug": "react",
        "pivot": { "projects_id": 2, "tags_id": 3 }
      }
    ]
  },
  {
    "id": 2,
    "title": "C# Shopping Site",
    "slug": "csharp-shopping-site",
    "excerpt": "Built from Entity and Identity framework of the ASP.NET, this is a fully functional fashion brand site that is ready to accept retail orders.",
    "body": "<p>The heart of the site lies in the robust architecture provided by the Entity Framework, ensuring efficient and secure data handling. Leveraging the power of the Entity Framework, the website effortlessly manages the intricacies of the fashion brand's product catalog, offering a responsive and dynamic interface that showcases the latest trends and collections.</p><p>The integration of the Identity framework fortifies the site's security measures and enables a user-friendly authentication system. Visitors can seamlessly create accounts, log in securely, and enjoy personalized experiences tailored to their preferences. This not only enhances user engagement but also establishes a trustworthy environment for retail transactions.</p><p>Beyond its technical prowess, the website stands as a testament to the seamless fusion of aesthetics and functionality. The user interface is thoughtfully designed to provide an intuitive and visually appealing experience, showcasing the fashion brand's identity with elegance and style. Smooth navigation, interactive product displays, and a streamlined checkout process contribute to a satisfying journey for online shoppers.</p>",
    "url": null,
    "published_date": null,
    "image": "Cropped_CProject.png",
    "thumb": null,
    "category_id": 2,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 1, "slug": "full-stack", "name": "Full Stack" },
    "tags": [
      {
        "id": 4,
        "name": "C#",
        "slug": "csharp",
        "pivot": { "projects_id": 4, "tags_id": 4 }
      },
      {
        "id": 5,
        "name": "SQL",
        "slug": "sql",
        "pivot": { "projects_id": 4, "tags_id": 5 }
      },
      {
        "id": 6,
        "name": "MVC",
        "slug": "mvc",
        "pivot": { "projects_id": 4, "tags_id": 6 }
      },
    ]
  },
  {
    "id": 3,
    "title": "Cursed Corridors",
    "slug": "cursed-corridors",
    "excerpt": "A spooky maze game where you use your mouse to escape from your scary confinement.",
    "body": "<p>This game has been built using a combination of vanilla javascript and JQuery.</p></p>Canvas has also been utilized in order to keep track of where the mouse lays, to determine if the user loses or wins the game.</p>",
    "url": "https://cursed-corridors.vercel.app/",
    "published_date": "2023-12-01",
    "image": "Cropped_Cursed_Corridors.png",
    "thumb": null,
    "category_id": null,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 2, "slug": "front-end", "name": "Front End" },
    "tags": [
      {
        "id": 1,
        "name": "JavaScript",
        "slug": "javascript",
        "pivot": { "projects_id": 5, "tags_id": 1 }
      }
    ]
  },
  {
    "id": 4,
    "title": "React Calculator",
    "slug": "android-app",
    "excerpt": "A bold calculator using React.",
    "body": "<p>This project is a fully functioning calculator.</p></p>It uses the useReducer hook in order to handle multiple calculations while keeping the code organized and scalable.</p>",
    "url": "https://calculator-iota-puce-73.vercel.app/",
    "published_date": "2023-11-15",
    "image": "Cropped_Calculator.png",
    "thumb": null,
    "category_id": null,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 2, "slug": "front-end", "name": "Front End" },
    "tags": [
      {
        "id": 3,
        "name": "React",
        "slug": "react",
        "pivot": { "projects_id": 6, "tags_id": 3 }
      }
    ]
  },
  {
    "id": 5,
    "title": "Tourism Website",
    "slug": "tourism-website",
    "excerpt": "A mobile-first responsive tourism website.",
    "body": "<p>This website uses html and css styling to create an enticing display for attracting tourists.</p><p>Media queries were used in order to make the page responsive, with functional designs at every viewport width.</p>",
    "url": "https://cloudtop-resort.vercel.app/",
    "published_date": "2023-10-31",
    "image": "Cropped_Tourism_Website.png",
    "thumb": null,
    "category_id": 3,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 2, "slug": "front-end", "name": "Front End" },
    "tags": [
      {
        "id": 2,
        "name": "CSS",
        "slug": "css",
        "pivot": { "projects_id": 7, "tags_id": 2 }
      },
      {
        "id": 6,
        "name": "HTML",
        "slug": "html",
        "pivot": { "projects_id": 7, "tags_id": 6 }
      }
    ]
  },
  // {
  //   "id": 6,
  //   "title": "MongoDB Backend Design",
  //   "slug": "mongodb-backend-design",
  //   "excerpt": "Using CRUD operations with a MongoDB database.",
  //   "body": "<p>MongoDB was used as the selected database to add, edit, read details, and delete data entries.</p><p>Routing knowledge was also applied to organize those requests.</p>",
  //   "url": null,
  //   "published_date": "2023-10-31",
  //   "image": null,
  //   "thumb": null,
  //   "category_id": 1,
  //   "created_at": "2023-02-23T22:31:23.000000Z",
  //   "updated_at": "2023-02-23T22:31:23.000000Z",
  //   "category": { "id": 1, "slug": "back-end", "name": "Back End" },
  //   "tags": [
  //     {
  //       "id": 7,
  //       "name": "MongoDB",
  //       "slug": "mongodb",
  //       "pivot": { "projects_id": 8, "tags_id": 7 }
  //     }
  //   ]
  // }
]
