import React from 'react'
import { Link } from 'react-router-dom'
import iconRight from '../../assets/svg/right.svg'
import styles from './Conditions.module.scss'

const Conditions = () => {
	return (
		<div className={styles.container}>
			<div className={styles.conditions__top}>
				<p className={styles.top__subTitle}>Выгодные условия работы сервиса</p>
				<p className={styles.top__title}>
					Платите только за пополнение счета eCards. У нас нет скрытых комиссий
				</p>
			</div>
			<div className={styles.conditions__middle}>
				<div className={styles.middle__left}>
					<p className={styles.left__text}>Выпуск карт</p>
					<p className={styles.left__text}>Ежемесячное обслуживание</p>
					<p className={styles.left__text}>Транзакции</p>
					<p className={styles.left__text}>Возврат средств на счет eCards</p>
					<p className={styles.left__text}>Пополнение карты со счета eCards</p>
					<p className={styles.left__text}>Пополнение счета eCards - USDT</p>
					<p className={styles.left__text}>Пополнение счета eCards - Wire</p>
					<p className={styles.bottom__text}>
						Минимальная сумма для пополнения счета eCards
					</p>
				</div>
				<div className={styles.middle__right}>
					<p className={styles.right__text}>Бесплатно</p>
					<p className={styles.right__text}>Бесплатно</p>
					<p className={styles.right__text}>Бесплатно</p>
					<p className={styles.right__text}>Бесплатно</p>
					<p className={styles.right__text}>Бесплатно</p>
					<p className={styles.right__text}>4,5%</p>
					<p className={styles.right__text}>4,5%</p>
					<p className={styles.bottom__text}>Ограничений нет</p>
				</div>
			</div>
			<div className={styles.conditions__bottom}>
				<span>
					Для крупных арбитражных команд с оборотом более 100 000$ в месяц
					возможно предоставление индивидуальных условий Получить инвайт
				</span>
				<Link to={'in'}>
					<div className={styles.btn__invite}>
						<p>Получить инвайт</p>
						<img src={iconRight} alt='icon right' />
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Conditions
