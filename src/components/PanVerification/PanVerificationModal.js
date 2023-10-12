import React, { useCallback, useState } from 'react'

import Modal from '../Modal/Modal'
import Image from '../Image/Image'
import Heading from '../Heading/Heading'
import Content from '../Content/Content'
import VerifyButton from '../VerifyButton/VerifyButton'
import InputWithLabel from '../InputWithLabel/InputWithLabel'
import InputTextCount from '../InputTextCount/InputTextCount'

import iconPng from '../../assets/images/icon.jpg'
import panPng from '../../assets/images/pancard.png'
import closeIcon from '../../assets/images/closeIcon.png'

import styles from './panVerificationModal.module.scss';

const PanVerificationModal = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = useCallback((value) => {
    setInputValue(value)
  },[])

  return (
    <div>
      <Modal isModalOpen={true}>
        <div className={styles.topContainer}>
        <div className={styles.modalContainer}>
        <div className={styles.headingContainer}>
          <Image imageClassName={styles.iconClassName} imageSrc={iconPng}/>
          <div>
          <Heading title={'Pan verification'}/>
          <Content textContent = {'As per regulation, it is mandetory to verify your PAN details.'} />
          </div>
        </div>

        <div className={styles.modalBody}>
            <Image imageSrc={panPng} imageClassName={styles.panCardImageClassName}/>
            <div className={styles.inputAndBtnContainer}>
              <div className={styles.inputWithTextCount}>
              <InputWithLabel inputValue={inputValue} maxLimit={10} onChange={handleInputChange} label={'Enter 10-digit PAN'}/>
              <InputTextCount limit={"10"} inputTextCount={inputValue.length}/>
              </div>
              <VerifyButton disabled={!inputValue} buttonClassName={styles.verifyButtonClassName} buttonText={"Verify"} />
            </div>
        </div>
        </div>
        <Image imageSrc={closeIcon} imageClassName={styles.closeIcon}/>
        </div>
      </Modal>
    </div>
  )
}

export default PanVerificationModal;