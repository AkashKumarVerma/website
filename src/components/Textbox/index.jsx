import * as React from 'react'
import clx from 'classnames'
import * as Styles from './Textbox.module.css'

export const Textbox = ({ compact, placeholder }) => {
  return (
    <input
      className={clx(
        Styles.wrapper,
        compact && Styles.compact
      )}
      placeholder={placeholder}
    />
  )
}

export default Textbox
