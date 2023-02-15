import React, { useEffect, useState } from 'react'
import styles from './ChangeLanguage.module.scss'
import { useTranslation } from 'react-i18next'
import '../../i18next'

const ChangeLanguage = ({ setInfo, info }) => {
	const [localRU, setLocalRU] = useState(true)
	const [localEN, setLocalEN] = useState(true)
	const { t, i18n } = useTranslation()
	const changleLanguage = lang => {
		i18n.changeLanguage(lang)
	}

	const check = lank => {
		changleLanguage(lank)
		if (localStorage.getItem('i18nextLng')) {
			const data = localStorage.getItem('i18nextLng')
			if (data === 'ru') {
				setLocalRU(false)
				setLocalEN(true)
				setInfo('ru')
			} else {
				setLocalEN(false)
				setLocalRU(true)
				setInfo('en')
			}
		}
	}
	useEffect(() => {}, [localRU, localEN])

	return (
		<div className={styles.language__wrapper}>
			<button
				className={localRU ? '' : styles.active}
				onClick={() => check('ru')}
			>
				RU
			</button>
			<div></div>
			<button
				className={localEN ? '' : styles.active}
				onClick={() => check('en')}
			>
				EN
			</button>
		</div>
	)
}

export default ChangeLanguage
