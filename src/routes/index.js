import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home'
import ProjectTemplate from './ProjectTemplate'

class index extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [
        {
          id: 1,
          type: 'web',
          title: 'Synth Lab',
          posterURL: '../images/synth.jpg',
          link: 'https://synth-lab.firebaseapp.com/',
          github: 'https://github.com/davefrancese/synth-lab',
          description: 'I love music, specifically old retro synthesizers. Synth Lab was built with responsiveness in mind. I used CSS Grid so that the images would resize and change columns depending on the users screen size. A small project for now, but in the future I would like to expand Synth Lab so that users can add more to the list.',
          tech: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'React'
          ],
          techImages: [
            '../images/html5.png',
            '../images/css3.png',
            '../images/javascript.png',
            '../images/react.png'
          ],
          solo: true,
          contributions: 'Synth Lab was a solo project. Everything was designed and developed by solely myself.'
        },
        {
          id: 2,
          type: 'web',
          title: 'Sleuth',
          posterURL: '../images/sloth.jpg',
          link: 'https://speed-sleuth.firebaseapp.com/',
          github: 'https://github.com/g64-sleuth',
          description: 'Now that net neutrality is long gone, it is time to keep ISPs accountable for the speed users pay for. That is exactly what Sleuth is for. Users can run a download speed test and Sleuth will tell the user their ISP, their download speed, where they rank among other users with the same ISP that have also used Sleuth, and it will give them the highest ranking ISP based upon download speed.',
          tech: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'React',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Knex.js',
            'Chrome Extensions'
          ],
          techImages: [
            '../images/html5.png',
            '../images/css3.png',
            '../images/javascript.png',
            '../images/react.png',
            '../images/node.png',
            '../images/express.png',
            '../images/pg.png',
            '../images/knex.png',
            '../images/chrome.png',
          ],
          solo: false,
          contributions: 'In this mammoth of a project, my skills were used to sort the data. Specifically gather all the speed tests that had been run and display the users rank according to their ISP and also gather each ISP\'s average test results and rank them compared to other ISPs. I did not play any role in the CSS of this project.'
        },
        {
          id: 3,
          type: 'web',
          title: 'Fable Forum',
          posterURL: '../images/fable.jpg',
          link: 'https://prosepros-fable.herokuapp.com/',
          github: 'https://github.com/davefrancese/fable',
          description: 'If you are a writer of short stories and want to hone in on your skills. Fable Forum is for you. Share your stories with other users and get feedback from those authors. Also, comment on other authors\' stories and share your skills to help others. Just create an account and get to writing!',
          tech: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Knex.js',
            'Handlebars.js'
          ],
          techImages: [
            '../images/html5.png',
            '../images/css3.png',
            '../images/javascript.png',
            '../images/node.png',
            '../images/express.png',
            '../images/pg.png',
            '../images/knex.png',
            '../images/handlebars.png',
          ],
          solo: false,
          contributions: 'I had my hand in every aspect of this project, from building the server, database, schemas, queries, to everything in between. I also designed the logo!'
        },
        {
          id: 4,
          type: 'web',
          title: 'MOOD.',
          posterURL: '../images/mood.jpg',
          link: 'https://mood-q1.firebaseapp.com/',
          github: 'https://github.com/davefrancese/moodProject',
          description: 'When trying to find new music to listen to, it can be pretty frustrating. A lot can depend on what kind of music you are feeling at that particular moment: the weather outside, your emotions, and also the overall vibe of the day. MOOD. sorts this out for you. Put in your location and how your feeling and MOOD. will generate a 10 song playlist for you to enjoy.',
          tech: [
            'HTML5',
            'CSS3',
            'JavaScript',
          ],
          techImages: [
            '../images/html5.png',
            '../images/css3.png',
            '../images/javascript.png',
          ],
          solo: true,
          contributions: 'MOOD. was a solo project. Everything was designed and developed by solely myself.'
        },
        {
          id: 5,
          type: 'web',
          title: 'Angular Inbox',
          posterURL: '../images/inbox.jpg',
          link: 'https://angular-inbox-5739b.firebaseapp.com/',
          github: 'https://github.com/davefrancese/inbox',
          description: 'As a human being living in the states we are always checking emails without a thought of the actual functionality of the inbox. As a developer, I had to try it out for myself!',
          tech: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'AngularJS',
            'Node.js',
            'Express',
          ],
          techImages: [
            '../images/html5.png',
            '../images/css3.png',
            '../images/javascript.png',
            '../images/angular.png',
            '../images/node.png',
            '../images/express.png',
          ],
          solo: false,
          contributions: 'Angular Inbox was a solo project. Everything was designed and developed by solely myself.'
        },
        {
          id: 6,
          type: 'web',
          title: 'TODO',
          posterURL: '../images/todo.jpg',
          link: 'https://df-todos.herokuapp.com/',
          github: 'https://github.com/davefrancese/todo-practice1',
          description: 'Server side rendering! I wanted to build a fully functional TODO application using only server side rendering. Add, update, and delete (complete) a todo. Even give it a priority level.',
          tech: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Knex.js',
            'Handlebars.js'
          ],
          techImages: [
            '../images/html5.png',
            '../images/css3.png',
            '../images/javascript.png',
            '../images/node.png',
            '../images/express.png',
            '../images/pg.png',
            '../images/knex.png',
            '../images/handlebars.png',
          ],
          solo: true,
          contributions: 'TODO was a solo project. Everything was designed and developed by solely myself.'
        },
        {
          id: 7,
          type: 'design',
          title: 'Moon Energy Guide',
          posterURL: '../images/MEGLogo.jpg',
          link: '',
          github: '',
          description: 'Aquarius Nation, an astrologer based in Santa Fe, New Mexico came to me wanting to rebrand her monthly astrology guide. I was given full reign of design concepts. Mixing astrology with astronomy and the grandiose with the intricate.',
          tech: [
            'Adobe Illustrator',
            'Adobe Photoshop',
            'Adobe InDesign'
          ],
          techImages: [],
          designImages: [
            '../images/MEGCover.jpg',
            '../images/MEGLogo.jpg',
            '../images/MEGPage.jpg',
          ],
          solo: true,
          contributions: 'The Mood Energy Guide was a solo project. Everything was designed by solely myself.'
        },
        {
          id: 8,
          type: 'design',
          title: 'Tonic',
          posterURL: '../images/tonicLogo.jpg',
          link: '',
          github: '',
          description: 'A logo for the simple, collected, and clean living lifestyle that this journal provides. Dive into this holistic approach on a day to day basis! From organic recipes to non-toxic home supplies, or just food for thought.',
          tech: [
            'Adobe Illustrator',
            'Adobe Photoshop'
          ],
          techImages: [],
          solo: true,
          contributions: 'Tonic was a solo project. Everything was designed by solely myself.'
        }
      ]
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route
            path='/:id'
            render={(props) =>
              <ProjectTemplate
                {...props}
            />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default index;
