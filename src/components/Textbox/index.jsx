import * as React from 'react'
import * as Styles from './Textbox.module.css'

export const Textbox = () => {
  return (
    <input className={Styles.wrapper} placeholder="Your Email Address" />
  )
}

export default Textbox
