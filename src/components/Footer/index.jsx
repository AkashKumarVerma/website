import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Button } from './../Button'
import * as Styles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.top}>
        <div>
          <div className={Styles.logo}>zeppo</div>
          <div className={Styles.infoText}>
            No development effort on your side. Simply add a tag to your<br />
            website to enable fast checkouts. Boost your conversion rate by up<br />
            to 20% by adding a frictionless checkout to your website.
          </div>

          <Button size="medium" type="solid" color="accent2">
            Get In Touch With Our Team
          </Button>
        </div>

        <div className={Styles.navigation}>
          <div>
            <div className={Styles.label}>Services</div>
            <ul className={Styles.navItems}>
              <li>Build</li>
              <li>Promote</li>
              <li>Manage</li>
              <li>All Features</li>
            </ul>
            <div className={Styles.link}>
              Get a quote
              <span className={Styles.linkIconWrapper}>
                <StaticImage
                  className={Styles.linkIcon}
                  src="./../../images/IconArrowRightBlue.svg"
                />
              </span>
            </div>
          </div>
          <div>
            <div className={Styles.label}>Resources</div>
            <ul className={Styles.navItems}>
              <li>Glossary</li>
              <li>Job Board Overview</li>
            </ul>
          </div>
          <div>
            <div className={Styles.label}>About zeppo</div>
            <ul className={Styles.navItems}>
              <li>About Us</li>
              <li>Carrer</li>
              <li>Contact Us</li>
            </ul>
            <div className={Styles.link}>
              Chat With Us
              <span className={Styles.linkIconWrapper}>
                <StaticImage
                  className={Styles.linkIcon}
                  src="./../../images/IconArrowRightBlue.svg"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.bottom}>
        <div>
          @2021 - zeppo solutions, inc. All rights reserved
        </div>
        <div className={Styles.legalLinks}>
          <Link to="/legal-notice">Legal Notice</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/policy">Policy</Link>
        </div>
        <div className={Styles.socialLinks}>
          <Link to="https://facebook.com">Facebook</Link>
          <Link to="https://instagram.com">Instagram</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer