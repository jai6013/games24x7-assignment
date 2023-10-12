import React from "react";
import cx from 'classnames'

import styles from './input.module.scss'

const InputWithLabel = ({inputValue, maxLimit, label, containerClassname, onChange}) => {
  return (
    <div className={cx(styles.inputContainer,containerClassname)}>
    <input maxLength={maxLimit} type="text" id="input" onChange={(e) => onChange(e.target.value)} className={styles.inputField} />
    <label for="input" className={cx(styles.inputLabel, {[styles.inputHasValue]: inputValue.length})}>{label}</label>
  </div>
  );
};

export default InputWithLabel;
