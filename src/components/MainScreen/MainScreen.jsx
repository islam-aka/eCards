import React from 'react'
import styles from './MainScreen.module.scss'
import image from '../../assets/img/Главная.png'
import BtnInvite from '../../UI/BtnInvite'
import iconRightLogIn from '../../assets/svg/rightLogIn.svg'
import iconPlus from '../../assets/svg/plus1.svg'
import LogoSocial from '../LogoSocial/LogoSocial'

const MainScreen = () => {
	return (
		<div className={styles.container}>
			<div className={styles.container__info}>
				<p className={styles.container__title}>
					Надежное финансовое решение для арбитража рекламного трафика
				</p>
				<p className={styles.container__subTitle}>
					Безлимитный и бесплатный выпуск 3D Secure карт, хороший траст от
					Facebook, Google и др., удобный интерфейс и оперативная тех.поддержка
				</p>
				<div className={styles.container__btn}>
					<BtnInvite />
					<div>
						<a href='#'>
							Ознакомиться с условиями
							<img src={iconRightLogIn} alt='icon right' />
						</a>
					</div>
				</div>
				<div className={styles.container__info}>
					<div className={styles.info}>
						<div className={styles.info__icon}>
							<img src={iconPlus} alt='icon plus' />
						</div>
						<div>
							<h4>Доступные для оплаты сервисы</h4>
							<p>
								Возможно добавление других сервисов по индивидуальному запросу
							</p>
						</div>
					</div>
					<LogoSocial />
				</div>
			</div>
			<div className={styles.container__bg}>
				<img src={image} alt='asd' />
			</div>
		</div>
	)
}

export default MainScreen
