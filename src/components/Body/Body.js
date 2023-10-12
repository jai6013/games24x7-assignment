import React from 'react'

import PanVerificationModal from '../PanVerification/PanVerificationModal'

import styles from './body.module.scss'

const Body = () => {
  return (
    <div className={styles.body} >
        <PanVerificationModal/>
    </div>
  )
}

export default Body