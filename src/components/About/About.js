import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  const handleDownloadResume = () => {
    // Create an anchor element
    const link = document.createElement('a')

    // Set the href attribute to the URL of your PDF file on GitHub Pages
    link.setAttribute(
      'href',
      'https://github.com/RoninSanta/Portfolio/blob/main/assets/Resume.pdf'
    )

    // Set the download attribute with the desired file name
    link.setAttribute('download', 'Resume.pdf')

    // Simulate a click event to trigger the download
    link.click()
  }

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <button
            type='button'
            className='btn btn--outline'
            onClick={handleDownloadResume}
          >
            Download Resume
          </button>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About