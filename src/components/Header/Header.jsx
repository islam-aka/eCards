import React from 'react'
import logo from '../../assets/svg/Logo.svg'
import iconRightLogIn from '../../assets/svg/rightLogIn.svg'
import styles from './Header.module.scss'
import DropDown from '../DropDown/DropDown'
import { useTranslation } from 'react-i18next'
import BtnInvite from '../../UI/BtnInvite'

const Header = () => {
	const { t } = useTranslation()
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<img src={logo} alt='logo' />
				<nav className={styles.header__nav}>
					<ul>
						<li>
							<a href='#eСards'>{t('navBar.aboutECards')}</a>
						</li>
						<li>
							<a href='#'>{t('navBar.opportunities')}</a>
						</li>
						<li>
							<a href='#'>{t('navBar.conditions')}</a>
						</li>
						<li>
							<a href='#'>{t('navBar.partners')}</a>
						</li>
						<li>
							<a href='#'>{t('navBar.contacts')}</a>
						</li>
					</ul>
				</nav>
				<div className={styles.header__btn}>
					<div className={styles.btn__logIn}>
						<a href='#'>
							<p>Войти</p>
							<img src={iconRightLogIn} alt='icon right' />
						</a>
					</div>
					<BtnInvite />
					<DropDown />
				</div>
			</div>
		</div>
	)
}

export default Header
