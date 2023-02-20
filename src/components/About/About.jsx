import React, { useState, useEffect } from 'react'
import styles from './About.module.scss'
import iconCard from '../../assets/svg/card.svg'
import icon from '../../assets/svg/icons.svg'
import iconDollar from '../../assets/svg/dollar-circle.svg'
import image from '../../assets//img/ОeCards.png'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const About = () => {
	const [ref, inView] = useInView({ threshold: 0.5 })

	return (
		<div className={styles.container}>
			<div className={styles.link} id='eСards'></div>
			<div className={styles.about__bg}>
				<img src={image} alt='background' />
			</div>
			<div className={styles.about}>
				<div className={styles.about__title}>
					<p className={styles.megaTitle}>О eCards в цифрах</p>
					<p className={styles.subTitle}>
						eCards одними из первых в мире представили автоматизированную
						финансовую инфраструктуру для арбитража рекламного трафика
					</p>
				</div>
				<div className={styles.about__numbers}>
					<div ref={ref}>
						<img src={iconCard} alt='icon card' />
						{inView && (
							<CountUp
								className={styles.about__title}
								start={0}
								end={700000}
								duration={1}
							/>
						)}
						<p className={styles.about__subTitle}>
							Выпущенных виртуальных карт
						</p>
					</div>
					<div>
						<img src={icon} alt='icon' />
						{inView && (
							<CountUp
								className={styles.about__title}
								start={0}
								end={5000}
								duration={1}
							/>
						)}
						<p className={styles.about__subTitle}>
							Баеров и арбитражных команд
						</p>
					</div>
					<div>
						<img src={iconDollar} alt='icon dollar' />

						<h3 className={styles.about__title}>
							Более{' '}
							{inView && (
								<CountUp
									className={styles.about__title}
									start={0}
									end={500}
									duration={1}
								/>
							)}{' '}
							млн.$
						</h3>
						<p className={styles.about__subTitle}>
							Рекламных расходов проведено через сервис
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
