import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    "id": 6,
    "title": "Garmin AI Running Coach",
    "slug": "garmin-ai-running-coach",
    "excerpt": "A closed-loop running coach I can actually talk to: one that understands the context behind my Garmin data and turns our conversations into approved, structured workouts on my watch.",
    "body": `
      <p class="project-modal-lead">
        Many fitness apps give you a score or a prewritten insight. Even when AI is added, the feedback can still amount to, “You hit your target,” or, “You missed your target, but good work anyway!” I wanted a coach I could have a real conversation with: one I could question, challenge with new information, and ask to adjust my training. I built a closed-loop running coach that connects ChatGPT with my Garmin data. The same system that analyzes a completed run can use the rest of my training and recovery context to discuss why it happened, decide what should come next, and send the approved workout directly to my Garmin watch.
      </p>

      <p class="project-modal-callout">
        <strong>I do not export files, copy statistics, or upload screenshots.</strong> I can simply ask ChatGPT, “Pull up Tuesday's interval workout,” and it calls my private API, retrieves the right Garmin records, and starts analyzing them.
      </p>

      <div class="project-principles">
        <p>
          <strong>Evidence before recommendations</strong>
          <span>Strength and rehab recommendations are limited to a curated library built from peer-reviewed exercise guidance, rather than whatever exercise the model happens to recall.</span>
        </p>
        <p>
          <strong>Injuries before generic advice</strong>
          <span>My actual physiotherapy history, symptoms, aggravating movements, and prescribed stability work constrain what the coach can recommend.</span>
        </p>
        <p>
          <strong>Completion is not the same as good execution</strong>
          <span>The coach evaluates individual repetitions against their targets, looks for pacing fade, considers recent training load and recovery, and turns the result into constructive adjustments rather than automatically congratulating every completed workout.</span>
        </p>
      </div>

      <h3>A real training decision</h3>
      <p>
        Imagine a quality session that falls apart after the second repetition. Instead of simply marking the workout complete or failed, the coach compares every repetition with its prescribed target and identifies the pacing fade. I can then ask whether a hike with 1,400 metres of elevation gain two days earlier may have mattered. It retrieves that activity alongside my sleep, HRV, recent training load, and recovery data, revises its interpretation if the evidence supports it, and recommends a proportionate adjustment to the rest of the week. If I approve the change, the replacement workout, including its exact pace or heart-rate targets, is scheduled directly to my Garmin watch.
      </p>

      <h3>Much more than uploading screenshots</h3>
      <p>
        A screenshot gives ChatGPT a frozen, incomplete picture. Through the conversation, the coach can retrieve the underlying laps, intervals, heart rate, cadence, sleep, stress, HRV, training readiness, menstrual-cycle context, and other recorded activities whenever they become relevant. I can ask why I struggled, request a comparison of every interval against its target, and then ask how the evidence should change the rest of my training week.
      </p>

      <h3>The AI explains; the software proves</h3>
      <p>
        The coach is not trusted to guess at the important math. The backend calculates completed repetitions, target ranges, pace deviations, first-to-last changes, and completion percentages. Missing values remain missing instead of being invented. Recovery, menstrual-cycle, and recent-activity data can suggest possible contributing factors, but the coach does not force an explanation when it may simply have been a bad run. It uses those verified facts and uncertainties to explain what happened and make proportionate changes to the training plan.
      </p>

      <h3>From a training plan to my wrist</h3>
      <p>
        The coach can design a full progression of easy runs, long runs, quality sessions, and recovery days around a goal, then revisit the plan as new Garmin data comes in. That makes it useful not only for completing workouts, but for athletes managing progression, fatigue, recovery, and performance across an entire training block. Each scheduled workout can include the exact pace or heart-rate targets we discussed. Before anything is sent to Garmin, I see a readable preview and choose whether to approve it. Once approved, the workouts are converted into Garmin's format, added to my calendar, and synced to my watch to guide each run.
      </p>

      <h3>Built so AI has fewer chances to be wrong</h3>
      <p>
        I did not rely on a prompt simply telling the model not to hallucinate. Typed data models restrict what it can submit, deterministic backend calculations handle facts that should not be left to an LLM, and curated evidence constrains exercise recommendations. Every approved workout is stored as an immutable draft, meaning the exact workout I preview is the one that gets uploaded. The AI cannot quietly alter it after approval. Duplicate uploads are prevented, and uncertain external writes stop safely instead of blindly retrying.
      </p>
    `,
    "url": null,
    "published_date": "2026-08-09",
    "image": "Garmin_AI_Coach_Architecture.svg",
    "thumb": null,
    "category_id": 1,
    "created_at": "2026-08-09T00:00:00.000000Z",
    "updated_at": "2026-08-09T00:00:00.000000Z",
    "category": { "id": 1, "slug": "full-stack", "name": "AI Integration · Backend" },
    "tags": [
      { "id": 8, "name": "Python", "slug": "python", "pivot": { "projects_id": 6, "tags_id": 8 } },
      { "id": 9, "name": "FastAPI", "slug": "fastapi", "pivot": { "projects_id": 6, "tags_id": 9 } },
      { "id": 10, "name": "Pydantic", "slug": "pydantic", "pivot": { "projects_id": 6, "tags_id": 10 } },
      { "id": 11, "name": "Garmin Connect", "slug": "garmin-connect", "pivot": { "projects_id": 6, "tags_id": 11 } },
      { "id": 12, "name": "OpenAPI", "slug": "openapi", "pivot": { "projects_id": 6, "tags_id": 12 } },
      { "id": 13, "name": "GPT Actions", "slug": "gpt-actions", "pivot": { "projects_id": 6, "tags_id": 13 } },
      { "id": 14, "name": "Vercel", "slug": "vercel", "pivot": { "projects_id": 6, "tags_id": 14 } },
      { "id": 15, "name": "Vercel Blob", "slug": "vercel-blob", "pivot": { "projects_id": 6, "tags_id": 15 } }
    ]
  },
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
