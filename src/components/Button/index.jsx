import * as React from 'react'
import clx from 'classnames'

import * as Styles from './button.module.css'

export const Button = ({ size, type, color, children, className }) => {
  return (
    <button
      className={clx(
        Styles.base,
        Styles[size],
        Styles[color],
        Styles[type],
        className
      )}
    >
      { children }
    </button>
  )
}

Button.defaultProps = {
  size: 'medium',
  color: 'accent',
  type: 'outlined'
}

export default Button