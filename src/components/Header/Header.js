import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

// Import your image asset with the new path
import profilePic from './profilePic.jpg'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <div className='header-left'>
        <img src={profilePic} alt='' className='header-image' />
      </div>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
