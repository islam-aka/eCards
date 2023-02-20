import React from 'react'
import styles from './Opportunities.module.scss'
import iconWallet from '../../assets/svg/wallet-money.svg'
import iconInfinitely from '../../assets/svg/infinitely.svg'
import iconPlus from '../../assets/svg/iconPlus.svg'
import iconProfile from '../../assets/svg/profile-2user.svg'
import iconDownload from '../../assets/svg/download.svg'
import iconNotification from '../../assets/svg/notification.svg'
import imgBalance from '../../assets/img/balance.png'
import imgCards from '../../assets/img/Сards illustartion container.png'
import imgDistribution from '../../assets/img/Distribution and grouping.png'
import imgExport from '../../assets/img/Экспорт таблицы.png'
import imgNotification from '../../assets/img/notification.png'

const Opportunities = () => {
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
						<img src={imgBalance} alt='image balance' />
						<div className={styles.right__iconWire}>
							<p>WIRE</p>
						</div>
						<div className={styles.right__icon}>
							<img src={iconPlus} alt='icon' />
						</div>
						<div className={styles.right__iconUSDT}>
							<p>USDT</p>
						</div>
					</div>
				</div>
				<div className={styles.opportunities__cards}>
					<div className={styles.blockBlur__cards}></div>

					<div className={styles.card__img}>
						<img src={imgCards} alt='cards image' />
					</div>
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
					<div className={styles.distribution__image}>
						<img src={imgDistribution} alt='image distribution and grouping' />
					</div>
				</div>
				<div className={styles.data}>
					<div className={styles.blockBlur__data}></div>
					<div className={styles.data__left}>
						<img src={imgExport} alt='image export data' />
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
						<img src={imgNotification} alt='image notification system' />
					</div>
					<div className={styles.blockBlur__opportunities}></div>
				</div>
			</div>
		</div>
	)
}

export default Opportunities
