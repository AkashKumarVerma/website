import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as Styles from './ServiceCard.module.css'

export const ServiceCard = (props) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.header}>{ props.icon }</div>
      <div className={Styles.title}>{ props.title }</div>
      <div className={Styles.subtitle}>{ props.subtitle }</div>
      <div className={Styles.footer}>
        <div className={Styles.text}>Get in touch now</div>
        <div className={Styles.icon}>
          <StaticImage
            className={Styles.buttonArrow}
            src="./../images/IconArrowRight.svg"
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceCard