import * as React from 'react'
import clx from 'classnames'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as Styles from './Solutions.module.css'

export const Solutions = (props) => {
  const close = () => props.onClose(props.name)

  return (
    <div
      role="tooltip"
      onMouseLeave={close}
      className={clx(
        Styles.wrapper,
        props.className,
        props.open && Styles.menuOpen
      )}
    >
      <StaticImage
        className={Styles.image}
        src="./../../../images/illustrations/SolutionsBackground.svg"
      />

      <StaticImage
        className={Styles.illustration}
        src="./../../../images/illustrations/ServicesGroup.svg"
      />

      <div className={Styles.inner}>
        <div className={Styles.header}>Services We Provide</div>
        <div className={Styles.lines}>
          <span />
          <span />
          <span />
        </div>

        <div className={Styles.body}>

          <div className={Styles.service}>
            <div className={Styles.header}>
              <div className={clx(Styles.iconWrapper, Styles.iconBlue)}>
                <StaticImage className={Styles.icon} src="./../../../images/SquareStar.svg" />
              </div>
              Development
              <StaticImage className={Styles.chevron} src="./../../../images/IconChevronRightGray.svg" />
            </div>
            <div className={Styles.info}>Here at zappo we strive to build an online presence for businness to reach out to new customers all around the world.</div>
            <ul className={Styles.list}>
              <li>
                <Link to="">
                  Websites
                  <StaticImage className={Styles.chevron} src="./../../../images/IconChevronRightGray.svg" />
                </Link>
              </li>
              <li>
                <Link to="">
                  Web Applications
                  <StaticImage className={Styles.chevron} src="./../../../images/IconChevronRightGray.svg" />
                </Link>
              </li>
              <li>
                <Link to="">
                  Mobile Applications
                  <StaticImage className={Styles.chevron} src="./../../../images/IconChevronRightGray.svg" />
                </Link>
              </li>
              <li>
                <Link to="">
                  Custom Tools
                  <StaticImage className={Styles.chevron} src="./../../../images/IconChevronRightGray.svg" />
                </Link>
              </li>
            </ul>
          </div>


          <div className={Styles.service}>
            <div className={Styles.header}>
              <div className={clx(Styles.iconWrapper, Styles.iconPink)}>
                <StaticImage className={Styles.icon} src="./../../../images/Star.svg" />
              </div>
              Design
              <StaticImage className={Styles.chevron} src="./../../../images/IconChevronRightGray.svg" />
            </div>
            <div className={Styles.info}>Boost your conversion rate by up to 20% by adding a frictionless checkout to your website.</div>
            <ul className={Styles.list}>
              <li>
                <Link to="">
                  Websites
                  <StaticImage className={Styles.chevron} src="./../../../images/IconChevronRightGray.svg" />
                </Link>
              </li>
              <li>
                <Link to="">
                  Mobile Applications
                  <StaticImage className={Styles.chevron} src="./../../../images/IconChevronRightGray.svg" />
                </Link>
              </li>
            </ul>
          </div>


          <div className={Styles.service}>
            <div className={Styles.header}>
              <div className={clx(Styles.iconWrapper, Styles.iconOrange)}>
                <StaticImage className={Styles.icon} src="./../../../images/HalfSun.svg" />
              </div>
              Support
              <StaticImage className={Styles.chevron} src="./../../../images/IconChevronRightGray.svg" />
            </div>
            <div className={Styles.info}>No development effort on your side. Simply add a tag to your website to enable fast checkouts.</div>
            <ul className={Styles.list}>
              <li>
                <Link to="">
                  Maintainence
                  <StaticImage className={Styles.chevron} src="./../../../images/IconChevronRightGray.svg" />
                </Link>
              </li>
              <li>
                <Link to="">
                  Consultation
                  <StaticImage className={Styles.chevron} src="./../../../images/IconChevronRightGray.svg" />
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Solutions