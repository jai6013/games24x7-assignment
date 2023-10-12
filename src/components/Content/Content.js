import React from 'react'

import styles from './content.module.scss'

const Content = ({ textContent }) => {
  return (
    <div className={styles.content}>{textContent}</div>
  )
}

export default Content