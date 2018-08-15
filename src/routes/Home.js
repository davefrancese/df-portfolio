import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Bio from "./Bio";
import ProjectList from "./ProjectList";
import Contact from "./Contact";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          id: 0,
          type: "Web Development",
          title: "Emaily",
          posterURL: "../images/emaily2.jpg",
          link: "https://df-emaily.herokuapp.com",
          github: "https://github.com/davefrancese/emaily-server",
          screenShots: [
            "../images/emailySS1.jpg",
            "../images/emailySS2.jpg",
            "../images/emailySS3.jpg"
          ],
          embedVideo: "https://www.youtube.com/embed/5No9qtE7RaE?rel=0",
          description:
            "Login via Google+ and start sending surveys to your users to get feedback to see how people are liking your services. Emaily accepts credit cards thanks to Stripe handling all the payments. As soon as you pay for credits, start a survey campaign and get feedback from as many emails as you would like. See the survey results directly in your Dashboard.",
          tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React + Redux",
            "Node.js",
            "Express",
            "MongoDB",
            "Passport.js",
            "SendGrid",
            "Stripe"
          ],
          techImages: [
            "../images/html5.png",
            "../images/css3.png",
            "../images/js.png",
            "../images/react.png",
            "../images/redux.png",
            "../images/node.png",
            "../images/express.png",
            "../images/mongodb.png",
            "../images/passport.png",
            "../images/sendGrid.png",
            "../images/stripe.png"
          ],
          designImages: [],
          solo: false,
          contributions: ""
        },
        {
          id: 1,
          type: "Web Development",
          title: "Goal Coach",
          posterURL: "../images/peak.jpg",
          link: "https://df-goal-coach.firebaseapp.com/signin",
          github: "https://github.com/davefrancese/goal-coach",
          description:
            "Goal Coach allows for multiple users to sign on and see goals that their team wants to reach. It shows the goal and who added the goal. Anyone can add or complete these goals. Just log in with your email and a password and let people know what you want to accomplish!",
          tech: ["HTML5", "CSS3", "JavaScript", "React + Redux", "Firebase"],
          techImages: [
            "../images/html5.png",
            "../images/css3.png",
            "../images/js.png",
            "../images/react.png",
            "../images/redux.png",
            "../images/firebase.png"
          ],
          designImages: [],
          solo: true,
          contributions: ""
        },
        {
          id: 2,
          type: "Web Development",
          title: "Reminder Pro",
          posterURL: "../images/elephant.jpg",
          link: "https://df-reminder-pro.firebaseapp.com/",
          github: "https://github.com/davefrancese/reminder-pro",
          description:
            "Never forget an event or task you have coming up. Reminder Pro allows users to add as many reminders as they would like, along with a date that the event or task is coming up. Even after navigating away from Reminder Pro, users' reminders will be there whenever they return. Visit Reminder Pro and never forget!",
          tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React + Redux",
            "Firebase",
            "Moment"
          ],
          techImages: [
            "../images/html5.png",
            "../images/css3.png",
            "../images/js.png",
            "../images/react.png",
            "../images/redux.png",
            "../images/firebase.png",
            "../images/moment.png"
          ],
          designImages: [],
          solo: true,
          contributions: ""
        },
        {
          id: 3,
          type: "Web Development",
          title: "Synth Lab",
          posterURL: "../images/synth.jpg",
          link: "https://synth-lab.firebaseapp.com/",
          github: "https://github.com/davefrancese/synth-lab",
          description:
            "I love music, specifically old retro synthesizers. Synth Lab was built with responsiveness in mind. I used CSS Grid so that the images would resize and change columns depending on the users screen size. A small project for now, but in the future I would like to expand Synth Lab so that users can add more to the list.",
          tech: ["HTML5", "CSS3", "JavaScript", "React"],
          techImages: [
            "../images/html5.png",
            "../images/css3.png",
            "../images/js.png",
            "../images/react.png"
          ],
          solo: true,
          contributions: ""
        },
        {
          id: 4,
          type: "Web Development",
          title: "Sleuth",
          posterURL: "../images/sloth.jpg",
          link: "https://speed-sleuth.firebaseapp.com/",
          github: "https://github.com/g64-sleuth",
          description:
            "Now that net neutrality is long gone, it is time to keep ISPs accountable for the speed users pay for. That is exactly what Sleuth is for. Users can run a download speed test and Sleuth will tell the user their ISP, their download speed, where they rank among other users with the same ISP that have also used Sleuth, and it will give them the highest ranking ISP based upon download speed.",
          tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Knex.js",
            "Chrome Extensions"
          ],
          techImages: [
            "../images/html5.png",
            "../images/css3.png",
            "../images/js.png",
            "../images/react.png",
            "../images/node.png",
            "../images/express.png",
            "../images/postgresql.png",
            "../images/knex.png",
            "../images/chrome.png"
          ],
          solo: false,
          contributions: ""
        },
        {
          id: 5,
          type: "Web Development",
          title: "Fable Forum",
          posterURL: "../images/fable.jpg",
          link: "https://prosepros-fable.herokuapp.com/",
          github: "https://github.com/davefrancese/fable",
          description:
            "If you are a writer of short stories and want to hone in on your skills. Fable Forum is for you. Share your stories with other users and get feedback from those authors. Also, comment on other authors' stories and share your skills to help others. Just create an account and get to writing!",
          tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Knex.js",
            "Handlebars.js"
          ],
          techImages: [
            "../images/html5.png",
            "../images/css3.png",
            "../images/js.png",
            "../images/node.png",
            "../images/express.png",
            "../images/pg.png",
            "../images/knex.png",
            "../images/handlebars.png"
          ],
          solo: false,
          contributions: ""
        },
        {
          id: 6,
          type: "Web Development",
          title: "MOOD.",
          posterURL: "../images/mood.jpg",
          link: "https://mood-q1.firebaseapp.com/",
          github: "https://github.com/davefrancese/moodProject",
          description:
            "When trying to find new music to listen to, it can be pretty frustrating. A lot can depend on what kind of music you are feeling at that particular moment: the weather outside, your emotions, and also the overall vibe of the day. MOOD. sorts this out for you. Put in your location and how your feeling and MOOD. will generate a 10 song playlist for you to enjoy.",
          tech: ["HTML5", "CSS3", "JavaScript"],
          techImages: [
            "../images/html5.png",
            "../images/css3.png",
            "../images/js.png"
          ],
          solo: true,
          contributions: ""
        },
        {
          id: 7,
          type: "Web Development",
          title: "TODO",
          posterURL: "../images/todo.jpg",
          link: "https://df-todos.herokuapp.com/",
          github: "https://github.com/davefrancese/todo-practice1",
          description:
            "Server side rendering! I wanted to build a fully functional TODO application using only server side rendering. Add, update, and delete (complete) a todo. Even give it a priority level.",
          tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Knex.js",
            "Handlebars.js"
          ],
          techImages: [
            "../images/html5.png",
            "../images/css3.png",
            "../images/js.png",
            "../images/node.png",
            "../images/express.png",
            "../images/pg.png",
            "../images/knex.png",
            "../images/handlebars.png"
          ],
          solo: true,
          contributions: ""
        },
        {
          id: 8,
          type: "Graphic Design",
          title: "Moon Energy Guide",
          posterURL: "../images/MEGLogo.jpg",
          link: "",
          github: "",
          description:
            "Aquarius Nation, an astrologer based in Santa Fe, New Mexico came to me wanting to rebrand her monthly astrology guide. I was given full reign of design concepts. Mixing astrology with astronomy and the grandiose with the intricate.",
          tech: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
          techImages: [],
          designImages: [
            "../images/MEGCover.jpg",
            "../images/MEGLogo.jpg",
            "../images/MEGPage.jpg"
          ],
          solo: true,
          contributions: ""
        }
        // {
        //   id: 9,
        //   type: "Graphic Design",
        //   title: "Tonic",
        //   posterURL: "../images/tonicLogo.jpg",
        //   link: "",
        //   github: "",
        //   description:
        //     "A logo for the simple, collected, and clean living lifestyle that this journal provides. Dive into this holistic approach on a day to day basis! From organic recipes to non-toxic home supplies, or just food for thought.",
        //   tech: ["Adobe Illustrator", "Adobe Photoshop"],
        //   techImages: ["../images/photoshop.png", "../images/illustrator.png"],
        //   designImages: [
        //     "../images/tonicLogo.jpg",
        //     "../images/tonicLogoFull.jpg"
        //   ],
        //   solo: true,
        //   contributions: ""
        // }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        {/* <Bio /> */}
        <ProjectList projects={this.state.projects} />
        <Contact />
      </div>
    );
  }
}

export default Home;

// {
//   id: 4,
//   type: "Web Development",
//   title: "Angular Inbox",
//   posterURL: "../images/inbox.jpg",
//   link: "https://angular-inbox-5739b.firebaseapp.com/",
//   github: "https://github.com/davefrancese/inbox",
//   description:
//     "As a human being living in the states we are always checking emails without a thought of the actual functionality of the inbox. As a developer, I had to try it out for myself!",
//   tech: [
//     "HTML5",
//     "CSS3",
//     "JavaScript",
//     "AngularJS",
//     "Node.js",
//     "Express"
//   ],
//   techImages: [
//     "../images/html5.png",
//     "../images/css3.png",
//     "../images/js.png",
//     "../images/angular.png",
//     "../images/node.png",
//     "../images/express.png"
//   ],
//   solo: false,
//   contributions: ""
// },
