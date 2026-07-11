import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    "id": 1,
    "title": "React Redux Movie Site",
    "slug": "react-redux-movie-site",
    "excerpt": "A classic React Redux project that gets data from a 3rd party API and explores the common interplay between React and Redux.",
    "body": "<p>A React application that retrieves movie data from a third-party API and renders it through reusable UI components.</p><p>Redux provides centralized application state, keeping fetched data and interface updates predictable across components. The project demonstrates API integration, component composition, asynchronous data handling, and unidirectional state management.</p>",
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
    "body": "<p>A full-stack ASP.NET MVC shopping application backed by SQL and Entity Framework. It models and displays a fashion product catalog and supports the core flow of an online storefront.</p><p>ASP.NET Identity handles account registration and authentication. The project demonstrates MVC separation, relational data access through an ORM, server-rendered application flows, and authenticated user functionality.</p>",
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
    "body": "<p>A browser-based maze game built with JavaScript and jQuery. Players guide the pointer through a constrained route without touching the maze boundaries.</p><p>Canvas-based pointer tracking detects the cursor position and determines win or loss states. The project focuses on mouse events, coordinate-based collision detection, and interactive game-state updates.</p>",
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
    "body": "<p>A calculator built with React that supports chained arithmetic operations and updates the display from user input.</p><p>Calculation state and actions are organized with the useReducer hook, separating state transitions from the interface components. The project demonstrates reducer-based state management and event-driven UI updates.</p>",
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
    "body": "<p>A mobile-first tourism website built with semantic HTML and CSS.</p><p>Responsive layouts and media queries adapt the navigation, content, and imagery across phone, tablet, and desktop viewports. The project demonstrates responsive design, layout composition, and breakpoint-driven styling without a JavaScript framework.</p>",
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
