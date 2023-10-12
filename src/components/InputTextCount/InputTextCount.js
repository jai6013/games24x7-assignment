import React from 'react'

import styles from './inputTextCount.module.scss'

const InputTextCount = ({limit, inputTextCount}) => {
  return (
    <div className={styles.count}>{inputTextCount}/{limit}</div>
  )
}

export default InputTextCount