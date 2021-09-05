import * as React from 'react'
import clx from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'

import * as Styles from './Accordian.module.css'

export const Accordian = ({ items }) => {
  const [openTab, setOpenTab] = React.useState(null)

  const toggle = (index) => () => {
    setOpenTab(index === openTab ? null : index)
  }

  return (
    <div className={Styles.wrapper}>
      {
        items.map((item, index) => (
          <div
            key={index}
            className={clx(
              Styles.item,
              index === openTab && Styles.itemOpen
            )}
          >
            <div
              role="button"
              tabIndex={index}
              onClick={toggle(index)}
              onKeyDown={toggle(index)}
              className={Styles.itemTitle}
            >
              <div className={Styles.itemTitleText}>
                {item.title}
              </div>
              <StaticImage
                className={Styles.icon}
                src="./../../images/IconChevronDown.svg"
              />
            </div>
            <div className={Styles.itemBody}>
              { item.body }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Accordian