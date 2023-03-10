import React from 'react'
import styles from './Footer.module.scss'
import logo from '../../assets/svg/LogoFooter.svg'
import icons from '../../assets/img/bgFooter.png'
import icon from '../../assets/svg/icon.svg'
import iconTel from '../../assets/svg/Path.svg'
import { useTranslation } from 'react-i18next'

const Footer = () => {
	const { t } = useTranslation()
	return (
		<div className={styles.container}>
			<div className={styles.footer}>
				<div className={styles.footer__left}>
					<a href='#'>
						<img src={logo} alt='logo' />
					</a>
					<nav className={styles.footer__nav}>
						<ul>
							<li>
								<a href='#eСards'>{t('navBar.aboutECards')}</a>
							</li>
							<li>
								<a href='#opportunities'>{t('navBar.opportunities')}</a>
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
					<div className={styles.footer__info}>
						<img src={icon} alt='icon' />
						<p className={styles.info}>eCards 2023</p>
						<p>Политика конфиденциальности</p>
					</div>
				</div>
				<div className={styles.footer__right}>
					<h2>Следите за нашими новостями</h2>
					<div className={styles.btn}>
						<p>Подписаться</p>
						<img src={iconTel} alt='icon telegram' />
					</div>
					<h3>
						Служба поддержки <span>@ecards_support</span>
					</h3>
				</div>
			</div>
			<div className={styles.footer__bg}>
				<img src={icons} alt='icon' />
			</div>
		</div>
	)
}

export default Footer
