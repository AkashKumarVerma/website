import * as React from 'react'
import clx from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from './../layouts/Default'

import { Button } from './../components/Button'
import { Footer } from './../components/Footer'
import { ServiceCard } from './../components/ServiceCard'

import * as Styles from './../styles/pages/index.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <title>Website - Best Website</title>


      <section className={Styles.heroSection}>
        <h1 className={Styles.heroTitle}>
           We Build <span className={Styles.colorOrange}>Online</span> <br />
           Presence For <span className={Styles.colorOrange}>Bussiness</span>
        </h1>
        <h2 className={Styles.heroSubtitle}>
          Here at zappo we strive to build an online presence for businness to reach out to <br />new customers all around the world.
        </h2>
        <Button
          size="large"
          type="solid"
          color="primary"
          className={Styles.heroButton}
        >
          Get A Free Consultation
        </Button>
      </section>


      <section className={clx(Styles.sectionLeftAligned, Styles.sectionBlue)}>
        <div className={Styles.sectionText}>
          <StaticImage className={Styles.sectionIcon} src="./../images/SquareStar.svg" />
          <div className={Styles.sectionHeader}>Offer the <span>fastest</span> <br />checkout experience<br />available.</div>
          <div className={Styles.sectionInfo}>Mix and match your fast checkout offering.</div>
          <div className={Styles.sectionFooter}>
            <div className={Styles.sectionLink}>
              Get A Quote Now
              <StaticImage
                className={Styles.buttonArrow}
                src="./../images/IconArrowRight.svg"
              />
            </div>
          </div>
        </div>
        <div className={Styles.sectionImage}></div>
      </section>


      <section className={clx(Styles.sectionRightAligned, Styles.sectionOrange)}>
        <div className={Styles.sectionText}>
          <StaticImage
            className={Styles.sectionIcon}
            src="./../images/HalfSun.svg"
          />
          <div className={Styles.sectionHeader}>
            <span>Boost</span> Sales with frictionless<br />checkout.
          </div>
          <div className={Styles.sectionInfo}>
            Boost your conversion rate by up to 20% by adding a<br />frictionless checkout to your website.
          </div>
          <div className={Styles.sectionFooter}>
            <div className={Styles.sectionLink}>
              Get A Quote Now
              <StaticImage
                className={Styles.buttonArrow}
                src="./../images/IconArrowRight.svg"
              />
            </div>
          </div>
        </div>
        <div className={Styles.sectionImage}></div>
      </section>


      <section className={clx(Styles.sectionLeftAligned, Styles.sectionPink)}>
        <div className={Styles.sectionText}>
          <StaticImage
            className={Styles.sectionIcon}
            src="./../images/Star.svg"
          />
          <div className={Styles.sectionHeader}>
            Activate with <span>no effort</span><br />and no code.
          </div>
          <div className={Styles.sectionInfo}>
            No development effort on your side. Simply add a tag to<br />your website to enable fast checkouts.
          </div>
          <div className={Styles.sectionFooter}>
            <div className={Styles.sectionLink}>
              Get A Quote Now
              <StaticImage
                className={Styles.buttonArrow}
                src="./../images/IconArrowRight.svg"
              />
            </div>
          </div>
        </div>
        <div className={Styles.sectionImage}></div>
      </section>


      <section className={clx(Styles.sectionRightAligned, Styles.sectionGreen)}>
        <div className={Styles.sectionText}>
          <StaticImage
            className={Styles.sectionIcon}
            src="./../images/IconLeaf.svg"
          />
          <div className={Styles.sectionHeader}>
            <span>Beautiful and Accurate</span> website and application design.
          </div>
          <div className={Styles.sectionInfo}>
            A Well made design is absolutly necessary to communicate<br /> your message to the customers.
          </div>
          <div className={Styles.sectionFooter}>
            <div className={Styles.sectionLink}>
              Get A Quote Now
              <StaticImage
                className={Styles.buttonArrow}
                src="./../images/IconArrowRight.svg"
              />
            </div>
          </div>
        </div>
        <div className={Styles.sectionImage}></div>
      </section>



      <div className={Styles.sectionServices}>
        <div className={Styles.serviceHeader}>Our Services</div>
        <div className={Styles.serviceInfo}>
          We provide range of services to help skyrocket your business<br />in online world with ease and simplicity.
        </div>

        <div className={Styles.services}>
          <ServiceCard 
            icon={<StaticImage className={Styles.sectionIcon} src="./../images/IconLeaf2.svg" />}
            title="Beautiful and Accurate website and application design."
            subtitle="A Well made design is absolutly necessary to communicate your message to the customers."
          />
          <ServiceCard 
            icon={<StaticImage className={Styles.sectionIcon} src="./../images/Star.svg" />}
            title="Activate with no effort and no code."
            subtitle="No development effort on your side. Simply add a tag to your website to enable fast checkouts."
          />
          <ServiceCard 
            icon={<StaticImage className={Styles.sectionIcon} src="./../images/HalfSun.svg" />}
            title="Offer the fastest checkout experience available."
            subtitle="Mix and match your fast checkout offering."
          />
          <ServiceCard 
            icon={<StaticImage className={Styles.sectionIcon} src="./../images/Star.svg" />}
            title="Activate with no effort and no code."
            subtitle="No development effort on your side. Simply add a tag to your website to enable fast checkouts."
          />
          <ServiceCard 
            icon={<StaticImage className={Styles.sectionIcon} src="./../images/HalfSun.svg" />}
            title="Offer the fastest checkout experience available."
            subtitle="Mix and match your fast checkout offering."
          />
          <ServiceCard 
            icon={<StaticImage className={Styles.sectionIcon} src="./../images/IconLeaf2.svg" />}
            title="Beautiful and Accurate website and application design."
            subtitle="A Well made design is absolutly necessary to communicate your message to the customers."
          />
        </div>
      </div>


      <Footer />
    </Layout>
  )
}

export default IndexPage