import React from 'react'
import styles from './Opportunities.module.scss'
import iconWallet from '../../assets/svg/wallet-money.svg'
import iconInfinitely from '../../assets/svg/infinitely.svg'
import iconProfile from '../../assets/svg/profile-2user.svg'
import iconDownload from '../../assets/svg/download.svg'
import iconNotification from '../../assets/svg/notification.svg'
import imgBalance from '../../assets/img/BalanceBG.png'
import imgCardOne from '../../assets/img/cardOne.png'
import imgCardTwo from '../../assets/img/cardTwo.png'
import imgCardThree from '../../assets/img/cardThree.png'
import icons from '../../assets/svg/$.svg'
import imgGroupOne from '../../assets/img/group1.png'
import imgGroupTwo from '../../assets/img/group2.png'
import imgExport from '../../assets/img/Экспорт таблицы.png'
import imgNotification from '../../assets/img/notification.png'
import { useInView } from 'react-intersection-observer'
import Circle from '../Circle/Circle'
import CountUp from 'react-countup'

const Opportunities = () => {
	const [ref, inView] = useInView({ threshold: 0.5 })
	const [refImg, inViewImg] = useInView({ threshold: 0.5 })
	return (
		<div id='opportunities' className={styles.container}>
			<div className={styles.container__title}>
				<p>eCards предоставляет</p>
				<h2>Возможности и фичи</h2>
			</div>
			<div className={styles.blockBlur__score}></div>
			<div className={styles.opportunities}>
				<div className={styles.opportunities__score}>
					<div className={styles.score__left}>
						<div className={styles.score__icon}>
							<img src={iconWallet} alt='wallet icon' />
						</div>
						<div className={styles.score__block}>
							<p>Пополнение</p>
							<h2>Пополнение счета eCards различными способами</h2>
							<p>
								Пополняйте свой счет eCards c помощью отправки wire или USDT.
								Затем распределяйте деньги по картам и байрам на свое усмотрение
							</p>
						</div>
					</div>
					<div className={styles.score__right}>
						<div className={styles.img}>
							<img src={imgBalance} alt=' balance' />
						</div>
						<div className={styles.ani}>
							<Circle ref={ref} inView={inView} className={styles.ani} />

							<div ref={ref} className={styles.statistics}>
								<img src={icons} alt='icon' />
								{inView && (
									<div>
										<CountUp
											className={styles.statistics__title}
											start={0}
											end={98}
										/>
										.
										<CountUp
											className={styles.statistics__title}
											start={0}
											end={879}
										/>
										.
										<CountUp
											className={styles.statistics__title}
											start={0}
											end={87}
										/>
									</div>
								)}
								<p className={styles.about__subTitle}>Весь оборот в USDT</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.opportunities__cards}>
					<div className={styles.blockBlur__cards} ref={ref}></div>
					{inView && (
						<div className={styles.card__img}>
							<div className={styles.card__imgTwo}>
								<img src={imgCardOne} alt='card ' />
							</div>
							<div className={styles.card__imgOne}>
								<img src={imgCardTwo} alt='card ' />
							</div>
							<div className={styles.card__imgThree}>
								<img src={imgCardThree} alt='card ' />
							</div>
						</div>
					)}
					<div className={styles.card__info}>
						<div className={styles.card__icon}>
							<img src={iconInfinitely} alt='wallet icon' />
						</div>
						<div className={styles.card__block}>
							<p>Пополнение</p>
							<h2>Пополнение счета eCards различными способами</h2>
							<p>
								Пополняйте свой счет eCards c помощью отправки wire или USDT.
								Затем распределяйте деньги по картам и байрам на свое усмотрение
							</p>
						</div>
					</div>
				</div>
				<div className={styles.blockBlur__opportunities}></div>
				<div className={styles.distribution}>
					<div className={styles.distribution__info}>
						<div className={styles.distribution__icon}>
							<img src={iconProfile} alt='wallet icon' />
						</div>
						<div className={styles.distribution__block}>
							<p>Распределение и группировка</p>
							<h2>Распределение карт по баерам и группировка сотрудников</h2>
							<p>
								Подключайте неограниченное количество сотрудников к своему
								аккаунту, создавайте группы баеров и распределяйте карты между
								ними
							</p>
						</div>
					</div>
					<div ref={refImg} className={styles.distribution__image}>
						{inViewImg && (
							<div>
								<div className={styles.imageOne}>
									<img src={imgGroupOne} alt='distribution and grouping' />
								</div>
								<div className={styles.imageTwo}>
									<img src={imgGroupTwo} alt=' distribution and grouping' />
								</div>
							</div>
						)}
					</div>
				</div>
				<div className={styles.data}>
					<div className={styles.blockBlur__data}></div>
					<div className={styles.data__left}>
						<img src={imgExport} alt=' export data' />
						<div className={styles.checked__one}>
							<div className={styles.checked}></div>
							<p>В формате СSV</p>
						</div>
						<div className={styles.checked__two}>
							<div className={styles.checked}></div>
							<p>Таблица Excel</p>
						</div>
					</div>
					<div className={styles.data__right}>
						<div className={styles.data__icon}>
							<img src={iconDownload} alt='icon download' />
						</div>
						<div className={styles.data__block}>
							<p>Распределение и группировка</p>
							<h2>Распределение карт по баерам и группировка сотрудников</h2>
							<p>
								Подключайте неограниченное количество сотрудников к своему
								аккаунту, создавайте группы баеров и распределяйте карты между
								ними
							</p>
						</div>
					</div>
				</div>
				<div className={styles.notification}>
					<div className={styles.notification__left}>
						<div className={styles.notification__icon}>
							<img src={iconNotification} alt='icon notification' />
						</div>
						<div className={styles.notification__block}>
							<p>Распределение и группировка</p>
							<h2>Распределение карт по баерам и группировка сотрудников</h2>
							<p>
								Подключайте неограниченное количество сотрудников к своему
								аккаунту, создавайте группы баеров и распределяйте карты между
								ними
							</p>
						</div>
					</div>
					<div className={styles.notification__right}>
						<img src={imgNotification} alt=' notification system' />
					</div>
					<div className={styles.blockBlur__opportunities}></div>
				</div>
			</div>
		</div>
	)
}

export default Opportunities
