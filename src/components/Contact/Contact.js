import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='social-links'>
        <div className='social-link'>
          <a
            href={contact.social.linkedin}
            className='link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon />
          </a>
          <a
            href={contact.social.linkedin}
            className='social-link-url'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://linkedin.com/in/joseph-shen-4267a8b0,
          </a>
        </div>
        <div className='social-link'>
          <a
            href={contact.social.github}
            className='link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon />
          </a>
          <a
            href={contact.social.github}
            className='social-link-url'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://github.com/RoninSanta
          </a>
        </div>
        <div className='social-link'>
          <a
            href='mailto:JosephShenFan@gmail.com'
            className='link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <EmailIcon />
          </a>
          <a
            href='mailto:JosephShenFan@gmail.com'
            className='social-link-url'
            target='_blank'
            rel='noopener noreferrer'
          >
            JosephShenFan@gmail.com
          </a>
        </div>
        <div className='social-link'>
          <span className='link'>
            <PhoneIcon />
          </span>
          <span className='social-link-url'>+65 9002 3672</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
