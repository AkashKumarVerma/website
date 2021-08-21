import * as React from 'react'
import { Link } from "gatsby"

import { Button } from './../Button'
import * as Styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.wrapper}>
        <Link to="/" className={Styles.logo}>zeppo</Link>
        <div className={Styles.menu}>
          <Link to="/solutions">Solutions</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact">Contact Sales</Link>
        </div>
        <div className={Styles.controls}>
          <Button type="solid" color="ghost">Contact Us</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar