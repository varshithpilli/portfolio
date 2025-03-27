import React from 'react'
import { assets } from '@/assets/assets'
import ProjectCard from './Card'

const Projects: React.FC = () => {
  return (
    <div id='projects' className='min-h-screen pt-24'>
      <h2 className='text-center font-ct text-[40px] font-work font-semibold mb-12'>Projects</h2>

      <div className='w-11/12 md:w-3/4 flex flex-col md:flex-row justify-center items-center flex-wrap gap-10 mx-auto'>

        <ProjectCard
          image={assets.quiz_app}
          title='Static Quiz'
          desc='A JavaScript quiz game with a timer, score tracking, and answer highlighting. Features a final score display and restart option. Question to be updates manually in the script.'
          techStack={[
            assets.html,
            assets.css,
            assets.js
          ]}
          codeLink='https://github.com/varshithpilli/quiz-app'
          siteLink='https://varshithpilli.github.io/quiz-app/'
        />

        <ProjectCard
          image={assets.event_timer}
          title='Calender Event Timer'
          desc='This project manages events on a calendar, allowing users to add, delete, and view events with countdowns, while storing data in localStorage.'
          techStack={[
            assets.html,
            assets.css,
            assets.js
          ]}
          codeLink='https://github.com/varshithpilli/calender-events'
          siteLink='https://varshithpilli.github.io/calendar-events/'
        />

        <ProjectCard
          image={assets.notes_app}
          title='Note Taking'
          desc='A React-based notes app with local storage, allowing users to add, edit, and delete notes. Features dark mode and intuitive keyboard shortcuts for seamless input.'
          techStack={[
            assets.react,
            assets.tailwind,
            assets.ts
          ]}
          codeLink='https://github.com/varshithpilli/notes-app'
          siteLink='https://textsave.netlify.app/'
        />

      </div>
    </div>
  )
}

export default Projects
