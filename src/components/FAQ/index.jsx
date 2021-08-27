import * as React from 'react'
import * as Styles from './FAQ.module.css'
import { Accordian } from './../Accordian'

export const FAQ = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.header}>
        <div className={Styles.heading}>Frequently Asked Question</div>
        <div className={Styles.subheading}>We provide range of services to help skyrocket your business in online world with ease and simplicity.</div>
      </div>

      <div className={Styles.body}>
        <Accordian
          items={[
            {
              title: 'Do you have lower plan ?',
              body: `Nope, and here's why: we've heavily invested in enterprise-level infrastructure which has great speed and reliability (we don't just host our software on cheap VPS servers). And for an easy-to-use analytics product, all plans come with powerful tools like email reports, filters, website monitoring, and more. Our business model is selling software, not your data, so we’re priced for sustainability on our end and an amazing product for our customers.`
            },
            {
              title: 'What happens if I hit my plan limit ?',
              body: `Nope, and here's why: we've heavily invested in enterprise-level infrastructure which has great speed and reliability (we don't just host our software on cheap VPS servers). And for an easy-to-use analytics product, all plans come with powerful tools like email reports, filters, website monitoring, and more. Our business model is selling software, not your data, so we’re priced for sustainability on our end and an amazing product for our customers.`
            },
            {
              title: 'Can I switch to a different plan ?',
              body: `Nope, and here's why: we've heavily invested in enterprise-level infrastructure which has great speed and reliability (we don't just host our software on cheap VPS servers). And for an easy-to-use analytics product, all plans come with powerful tools like email reports, filters, website monitoring, and more. Our business model is selling software, not your data, so we’re priced for sustainability on our end and an amazing product for our customers.`
            },
            {
              title: 'How do I close my account ?',
              body: `Nope, and here's why: we've heavily invested in enterprise-level infrastructure which has great speed and reliability (we don't just host our software on cheap VPS servers). And for an easy-to-use analytics product, all plans come with powerful tools like email reports, filters, website monitoring, and more. Our business model is selling software, not your data, so we’re priced for sustainability on our end and an amazing product for our customers.`
            },
            {
              title: 'What if I have another question ?',
              body: `Nope, and here's why: we've heavily invested in enterprise-level infrastructure which has great speed and reliability (we don't just host our software on cheap VPS servers). And for an easy-to-use analytics product, all plans come with powerful tools like email reports, filters, website monitoring, and more. Our business model is selling software, not your data, so we’re priced for sustainability on our end and an amazing product for our customers.`
            },
          ]}
        />
      </div>
    </div>
  )
}

export default FAQ