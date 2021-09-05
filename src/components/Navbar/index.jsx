import * as React from 'react';
import clx from 'classnames'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Button } from './../Button'
import { Solutions } from './Solutions'
import * as Styles from './navbar.module.css'

export const Navbar = () => {
  const [currentlyOpen, setCurrentlyOpen] = React.useState('')
  const selectOpen = (menu) => () => setCurrentlyOpen(menu)

  return (
    <nav className={Styles.navbar}>
      <Solutions
        open={currentlyOpen === 'solutions'}
        onClose={selectOpen('')}
        className={clx(
          Styles.menuDropdown,
          currentlyOpen === 'solutions' && Styles.menuOpen
        )}
      />
      <div className={Styles.wrapper}>
        <div className={Styles.controls}>
          <Button type="solid" color="ghost">Contact Us</Button>
        </div>
        <div className={Styles.logo}>
          <Link to="/" className={Styles.logoImage}>zeppo</Link>
          <StaticImage className={Styles.logoScratch} src="./../../images/Scratch1.svg" />
        </div>
        <div className={Styles.menu}>
          <Link onMouseEnter={selectOpen('solutions')} to="/solutions">Solutions</Link>
          <Link onMouseEnter={selectOpen('aboutus')} to="/about-us">About Us</Link>
          <Link onMouseEnter={selectOpen('contact')} to="/contact">Contact Sales</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar