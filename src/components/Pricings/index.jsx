import * as React from 'react'
import clx from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'
import * as Styles from './Pricing.module.css'

export const Pricings = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.header}>
        <div className={Styles.title}>Simple and<br />sustainable pricing.</div>
        <div className={Styles.subtitle}>
          We provide range of services to help skyrocket your<br />
          business in online world with ease and simplicity.
        </div>
        <StaticImage
          className={Styles.image}
          src="./../../images/illustrations/happy-businessman.svg"
        />
      </div>
      <div>
        <div className={clx(Styles.typeWrapper, Styles.colorGreen)}>
          <div className={Styles.typeTitle}>Small Businesses</div>
          <div className={Styles.typeBody}>
            <div>Get the full power of our platform: unlimited access to our database and collaboration features for your creative team. Find, organize & share relevant best practices!. Use endless sources of inspiration and data from best practices and case studies on the most effective marketing, understand what's working in your category and build evidence for your ideas.</div>
            <ul type="circle">
              <li>We provide range of services to help skyrocket your business in online world with ease and simplicity.</li>
              <li>No development effort on your side. Simply add a tag to your website to enable fast checkouts.</li>
              <li>Mix and match your fast checkout offering.</li>
            </ul>
          </div>
          <div className={Styles.link}>
            Chat With Us
            <span className={Styles.linkIconWrapper}>
              <StaticImage src="./../../images/IconArrowRightGreen.svg" />
            </span>
          </div>
        </div>
        <div className={clx(Styles.typeWrapper, Styles.colorOrange)}>
          <div className={Styles.typeTitle}>Startups</div>
          <div className={Styles.typeBody}>
            <div>Get the full power of our platform: unlimited access to our database and collaboration features for your creative team. Find, organize & share relevant best practices!. Use endless sources of inspiration and data from best practices and case studies on the most effective marketing, understand what's working in your category and build evidence for your ideas.</div>
            <ul type="circle">
              <li>We provide range of services to help skyrocket your business in online world with ease and simplicity.</li>
              <li>No development effort on your side. Simply add a tag to your website to enable fast checkouts.</li>
              <li>Mix and match your fast checkout offering.</li>
            </ul>
          </div>
          <div className={Styles.link}>
            Chat With Us
            <span className={Styles.linkIconWrapper}>
              <StaticImage src="./../../images/IconArrowRightOrange.svg" />
            </span>
          </div>
        </div>
        <div className={clx(Styles.typeWrapper, Styles.colorPink)}>
          <div className={Styles.typeTitle}>Brands</div>
          <div className={Styles.typeBody}>
            <div>Get the full power of our platform: unlimited access to our database and collaboration features for your creative team. Find, organize & share relevant best practices!. Use endless sources of inspiration and data from best practices and case studies on the most effective marketing, understand what's working in your category and build evidence for your ideas.</div>
            <ul type="circle">
              <li>We provide range of services to help skyrocket your business in online world with ease and simplicity.</li>
              <li>No development effort on your side. Simply add a tag to your website to enable fast checkouts.</li>
              <li>Mix and match your fast checkout offering.</li>
            </ul>
          </div>
          <div className={Styles.link}>
            Chat With Us
            <span className={Styles.linkIconWrapper}>
              <StaticImage src="./../../images/IconArrowRightPink.svg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricings