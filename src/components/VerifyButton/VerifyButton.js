import React from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

const Button = ({disabled, buttonText, onClick, buttonClassName}) => {
  return (
    <button disabled={disabled} className={cx(styles.btn, styles.btnPrimary, buttonClassName, {[styles.disabled]: disabled})} onClick={onClick} >{buttonText}</button>
  )
}

export default Button