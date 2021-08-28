import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Button } from './../Button'
import * as Styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.wrapper}>
        <div className={Styles.controls}>
          <Button type="solid" color="ghost">Contact Us</Button>
        </div>
        <div className={Styles.logo}>
          <Link to="/" className={Styles.logoImage}>zeppo</Link>
          <StaticImage className={Styles.logoScratch} src="./../../images/Scratch1.svg" />
        </div>
        <div className={Styles.menu}>
          <Link to="/solutions">Solutions</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact">Contact Sales</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar