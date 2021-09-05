import React from 'react'
import clx from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from './../layouts/Default'
import { Button } from './../components/Button'
import { Textbox } from './../components/Textbox'

import * as Styles from './../styles/pages/contactUs.module.css'

const services = [
  {
    label: 'Website Design',
    value: 'web-design'
  },
  {
    label: 'Website Development',
    value: 'web-development'
  },
  {
    label: 'Mobile Application Design',
    value: 'app-design'
  },
  {
    label: 'Mobile Application Development',
    value: 'app-development'
  },
  {
    label: 'Buying New Domain',
    value: 'new-domain'
  },
]

const otherContacts = [
  {
    label: '+91 (7667) 50 5004',
    type: 'phone',
    value: '+917667505004'
  },
  {
    label: '+91 (7667) 50 5004',
    type: 'whatsapp',
    value: '+917667505004'
  },
  {
    label: 'zeoppo@contact.com',
    type: 'email',
    value: 'zeoppo@contact.com'
  },
  {
    label: 'facebook.com/zeoppo',
    type: 'facebook',
    value: 'https://facebook.com/zeoppo'
  },
  {
    label: 'twitter.com/zeoppo',
    type: 'twitter',
    value: 'https://twitter.com/zeoppo'
  },
]


const ContacUs = () => {
  const [selectedTags, selectTag] = React.useState([])

  const toggleTag = (tag) => () => {
    const current = new Set(selectedTags)

    if(current.has(tag)) {
      current.delete(tag)
    } else {
      current.add(tag)
    }

    selectTag([...current])
  }

  return (
    <Layout>
      <title>zeppo | Contact us</title>
      <div className={Styles.wrapper}>
        <StaticImage className={Styles.illustration} src="./../images/illustrations/ContactUs.svg" />

        <section className={Styles.formSection}>
          <h1>Thanks for your interest.</h1>
          <p>
            Please provide us with a little more details so that we can better resolve your query. <br/>
            Our team will reach back to you within 24 hours.
          </p>

          <div className={Styles.inputsWrapper}>
            <div className={Styles.inputs}>
              <span>What's your fullname ?</span>
              <Textbox compact />
            </div>
            <div className={Styles.inputs}>
              <span>What's your email ?</span>
              <Textbox compact />
            </div>
          </div>

          <div className={Styles.services}>
            <span>What service are you looking to avail ?</span>
            <div className={Styles.tags}>
              {
                services.map(service => (
                  <div
                    key={service.value}
                    onClick={toggleTag(service.value)}
                    className={clx(
                      Styles.tag,
                      selectedTags.includes(service.value) && Styles.tagSelected
                    )}
                  >
                    <div className={Styles.tagCircle} />
                    {service.label}
                  </div>
                ))
              }
            </div>
          </div>

          <Button
            size="medium"
            type="solid"
            color="primary"
          >
            Send Message
          </Button>
        </section>

        <section className={Styles.otherContacts}>
          <h3>Other ways to reach us</h3>
          <div className={Styles.contact}>
            <StaticImage className={Styles.icon} src="./../images/IconPhone.svg" />
            +91 (7667) 50 5004
          </div>
          <div className={Styles.contact}>
            <StaticImage className={Styles.icon} src="./../images/IconWhatsapp.svg" />
            +91 (7667) 50 5004
          </div>
          <div className={Styles.contact}>
            <StaticImage className={Styles.icon} src="./../images/IconMail.svg" />
            zeoppo@contact.com
          </div>
          <div className={Styles.contact}>
            <StaticImage className={Styles.icon} src="./../images/IconFacebook.svg" />
            facebook.com/zeoppo
          </div>
          <div className={Styles.contact}>
            <StaticImage className={Styles.icon} src="./../images/IconTwitter.svg" />
            twitter.com/zeoppo
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ContacUs