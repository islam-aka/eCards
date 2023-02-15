import React from 'react'
import styles from './UI.module.scss'
import iconRight from '../assets/svg/right.svg'

const BtnInvite = () => {
	return (
		<div className={styles.btn__invite}>
			<a href='#'>
				<p>Получить инвайт</p>
				<img src={iconRight} alt='icon right' />
			</a>
		</div>
	)
}

export default BtnInvite
