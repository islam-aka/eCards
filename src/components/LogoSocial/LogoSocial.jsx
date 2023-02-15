import React from 'react'
import useWindowWidth from '../../hooks/hooksWidth'
import styles from './LogoSocial.module.scss'
import facebook from '../../assets/svg/facebook.svg'
import google from '../../assets/svg/google.svg'
import tikTok from '../../assets/svg/tikTok.svg'
import paypal from '../../assets/svg/paypal.svg'
import up from '../../assets/svg/up.svg'
import apple from '../../assets/svg/apple.svg'

const LogoSocial = () => {
	let WindowWidth = useWindowWidth()
	return (
		<>
			{' '}
			{WindowWidth > 768 ? (
				<div className={styles.social}>
					<svg
						width='80'
						height='80'
						viewBox='0 0 80 80'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M53.9355 43.3103L55.5871 32.2759H45.6774V24.5517C45.6774 21.4621 46.7097 19.0345 51.2516 19.0345H56V8.88276C53.3161 8.44138 50.4258 8 47.7419 8C39.2774 8 33.2903 13.5172 33.2903 23.4483V32.2759H24V43.3103H33.2903V71.3379C35.3548 71.7793 37.4194 72 39.4839 72C41.5484 72 43.6129 71.7793 45.6774 71.3379V43.3103H53.9355Z'
							fill='#8C8C8C'
						/>
					</svg>
					<svg
						width='80'
						height='80'
						viewBox='0 0 80 80'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M70.72 40.7276C70.72 38.4585 70.5164 36.2767 70.1382 34.1821H40V46.5603H57.2218C56.48 50.5603 54.2254 53.9494 50.8364 56.2185V64.2476H61.1782C67.2291 58.6767 70.72 50.473 70.72 40.7276Z'
							fill='#9D9D9D'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M39.9997 72.0001C48.6397 72.0001 55.8833 69.1346 61.1779 64.2473L50.836 56.2183C47.9706 58.1383 44.3051 59.2728 39.9997 59.2728C31.6651 59.2728 24.6106 53.6437 22.0942 46.0801H11.4033V54.371C16.6688 64.8292 27.4906 72.0001 39.9997 72.0001Z'
							fill='#9D9D9D'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M22.0945 46.0803C21.4545 44.1603 21.0909 42.1094 21.0909 40.0003C21.0909 37.8912 21.4545 35.8403 22.0945 33.9203V25.6294H11.4036C9.23636 29.9494 8 34.8367 8 40.0003C8 45.1639 9.23636 50.0512 11.4036 54.3712L22.0945 46.0803Z'
							fill='#CFCFCF'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M39.9997 20.7273C44.6979 20.7273 48.916 22.3418 52.2324 25.5127L61.4106 16.3345C55.8688 11.1709 48.6251 8 39.9997 8C27.4906 8 16.6688 15.1709 11.4033 25.6291L22.0942 33.92C24.6106 26.3564 31.6651 20.7273 39.9997 20.7273Z'
							fill='#9D9D9D'
						/>
					</svg>

					<svg
						width='80'
						height='80'
						viewBox='0 0 80 80'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M21.5462 49.3355C21.9282 46.1505 23.2254 44.3673 25.6699 42.5393C29.1676 40.0635 33.5367 41.464 33.5367 41.464V33.1559C34.5989 33.1286 35.6615 33.192 36.7121 33.3454V44.037C36.7121 44.037 32.3443 42.6366 28.8466 45.1136C26.4034 46.9404 25.1036 48.7249 24.7229 51.9098C24.711 53.6393 25.0333 55.9 26.5175 57.8548C26.1505 57.6653 25.7765 57.4494 25.3954 57.207C22.1259 54.9962 21.5303 51.6794 21.5462 49.3355ZM54.7521 17.7943C52.3461 15.1394 51.4362 12.4588 51.1072 10.5757H54.134C54.134 10.5757 53.5305 15.5131 57.9288 20.3687L57.9898 20.434C56.8044 19.6831 55.7173 18.7968 54.7521 17.7943ZM69.333 25.3215V35.7981C69.333 35.7981 65.4706 35.6458 62.6123 34.9135C58.6212 33.8894 56.056 32.3187 56.056 32.3187C56.056 32.3187 54.2839 31.1986 54.1407 31.1205V52.7547C54.1407 53.9593 53.8131 56.9676 52.8143 59.4767C51.5105 62.759 49.4983 64.9134 49.1283 65.3538C49.1283 65.3538 46.6811 68.2661 42.3638 70.2272C38.4722 71.9964 35.0554 71.9516 34.0341 71.9964C34.0341 71.9964 28.1277 72.2319 22.8129 68.7538C21.6636 67.9872 20.5908 67.1189 19.6084 66.1603L19.6349 66.1795C24.9511 69.6576 30.8561 69.422 30.8561 69.422C31.8787 69.3772 35.2955 69.422 39.1858 67.6529C43.4991 65.6917 45.9503 62.7794 45.9503 62.7794C46.3164 62.3391 48.3378 60.1846 49.6363 56.9011C50.6324 54.3933 50.9627 51.3837 50.9627 50.1791V28.5474C51.1059 28.6268 52.8766 29.7469 52.8766 29.7469C52.8766 29.7469 55.4432 31.3189 59.4342 32.3418C62.2939 33.074 66.155 33.2263 66.155 33.2263V25.0168C67.4761 25.3151 68.6022 25.3958 69.333 25.3215Z'
							fill='#CECECE'
						/>
						<path
							d='M66.1569 25.0168V33.2238C66.1569 33.2238 62.2958 33.0714 59.4361 32.3392C55.4451 31.3151 52.8785 29.7444 52.8785 29.7444C52.8785 29.7444 51.1078 28.6243 50.9646 28.5449V50.1817C50.9646 51.3863 50.6369 54.3959 49.6382 56.9036C48.3343 60.1872 46.3222 62.3416 45.9522 62.782C45.9522 62.782 43.5037 65.6943 39.1876 67.6555C35.2974 69.4246 31.8806 69.3798 30.858 69.4246C30.858 69.4246 24.9529 69.6601 19.6368 66.182L19.6103 66.1628C19.049 65.6156 18.5207 65.0377 18.0279 64.4321C16.3315 62.3493 15.2916 59.8863 15.0303 59.1836C15.0298 59.1806 15.0298 59.1776 15.0303 59.1746C14.6098 57.9533 13.7265 55.0206 13.8472 52.18C14.0607 47.1682 15.8115 44.0921 16.2744 43.3214C17.5004 41.2199 19.0949 39.3397 20.9871 37.7644C22.6567 36.4051 24.5493 35.3235 26.587 34.5641C28.7899 33.6724 31.1488 33.1945 33.5373 33.1559V41.464C33.5373 41.464 29.1682 40.0686 25.6718 42.5393C23.2273 44.3673 21.9301 46.1505 21.5481 49.3355C21.5322 51.6794 22.1277 54.9962 25.3946 57.2083C25.7757 57.4515 26.1498 57.6675 26.5167 57.8561C27.0875 58.6031 27.7821 59.2541 28.5726 59.7827C31.7639 61.8168 34.4379 61.9589 37.8573 60.6378C40.1373 59.7545 41.8537 57.7639 42.6495 55.5582C43.1495 54.1808 43.1429 52.7944 43.1429 51.3607V10.5757H51.1012C51.4301 12.4588 52.34 15.1394 54.7461 17.7943C55.7112 18.7968 56.7983 19.6831 57.9838 20.434C58.3339 20.7988 60.1245 22.6025 62.4231 23.7098C63.6117 24.2822 64.8645 24.7208 66.1569 25.0168Z'
							fill='#4C4C4C'
						/>
						<path
							d='M26.5868 34.5645C24.549 35.3239 22.6565 36.4055 20.9868 37.7648C19.0941 39.3437 17.4999 41.2279 16.2755 43.3334C15.8126 44.1015 14.0618 47.1802 13.8482 52.1919C13.7275 55.0325 14.6109 57.9653 15.0313 59.1866C15.0309 59.1895 15.0309 59.1925 15.0313 59.1955C15.2966 59.8919 16.3325 62.3549 18.029 64.4441C18.5217 65.0497 19.0501 65.6275 19.6113 66.1748C17.813 64.9744 16.2092 63.5232 14.8523 61.8684C13.1704 59.8036 12.1332 57.3662 11.8626 56.6468C11.8623 56.6417 11.8623 56.6365 11.8626 56.6314V56.6225C11.4408 55.4025 10.5548 52.4684 10.6782 49.624C10.8917 44.6123 12.6425 41.5361 13.1054 40.7655C14.3295 38.6597 15.9237 36.7755 17.8167 35.1969C19.4861 33.8371 21.3787 32.7555 23.4167 31.9966C24.6879 31.4875 26.0122 31.112 27.3667 30.8765C29.4079 30.5326 31.4927 30.5028 33.5436 30.7881V33.1564C31.1529 33.1941 28.7917 33.6721 26.5868 34.5645Z'
							fill='#CECECE'
						/>
						<path
							d='M51.1073 10.5756H43.149V51.3619C43.149 52.7956 43.149 54.1782 42.6556 55.5594C41.8518 57.7638 40.1421 59.7544 37.8634 60.6377C34.4427 61.9639 31.7687 61.8167 28.5788 59.7826C27.7869 59.2564 27.0905 58.6076 26.5176 57.8624C29.2353 59.2616 31.6679 59.2373 34.6814 58.0698C36.9588 57.1865 38.6712 55.1959 39.4723 52.9902C39.9737 51.6128 39.9671 50.2264 39.9671 48.7939V8H50.9561C50.9561 8 50.8328 9.01386 51.1073 10.5756ZM66.1564 22.7471V25.0168C64.8663 24.7202 63.6157 24.2817 62.4293 23.7098C60.1307 22.6025 58.3401 20.7988 57.9899 20.4339C58.3962 20.6914 58.8179 20.9256 59.2526 21.1354C62.0473 22.4821 64.7995 22.8841 66.1564 22.7471Z'
							fill='#CECECE'
						/>
					</svg>

					<svg
						width='80'
						height='80'
						viewBox='0 0 80 80'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M28.1211 69.6812L29.1855 62.6528L26.8145 62.5957H15.4927L23.3607 10.7335C23.3852 10.577 23.4645 10.431 23.5805 10.3273C23.6965 10.2236 23.8451 10.1665 23.9998 10.1665H43.0899C49.4275 10.1665 53.8012 11.5375 56.0847 14.2435C57.1552 15.5129 57.837 16.8394 58.1667 18.2993C58.5126 19.831 58.5187 21.6611 58.1809 23.8932L58.1565 24.0561V25.4863L59.227 26.1168C60.1286 26.614 60.845 27.1831 61.3945 27.8347C62.3103 28.9201 62.9026 30.2995 63.1529 31.935C63.4114 33.6169 63.3259 35.6184 62.9026 37.8843C62.4141 40.4909 61.6245 42.761 60.558 44.6186C59.577 46.3302 58.3274 47.7498 56.8438 48.85C55.4273 49.8952 53.7442 50.6885 51.8413 51.1963C49.9974 51.6956 47.895 51.9474 45.5891 51.9474H44.1035C43.0411 51.9474 42.0092 52.3451 41.1992 53.0581C40.3872 53.7859 39.8499 54.7803 39.685 55.8678L39.5731 56.5004L37.6926 68.8878L37.6071 69.3427C37.5847 69.4866 37.5461 69.5585 37.4891 69.6072C37.4382 69.6516 37.3649 69.6812 37.2937 69.6812H28.1211Z'
							fill='#A2A2A2'
						/>
						<path
							d='M60.2404 24.2212C60.1835 24.5999 60.1183 24.9871 60.0451 25.3848C57.5275 38.8217 48.9146 43.4635 37.9144 43.4635H32.3135C30.9682 43.4635 29.8346 44.479 29.625 45.8585L26.7574 64.7644L25.9454 70.1235C25.809 71.029 26.4806 71.8456 27.3598 71.8456H37.2936C38.47 71.8456 39.4692 70.9571 39.6544 69.7511L39.7521 69.2264L41.6225 56.8876L41.7426 56.2106C41.9257 55.0004 42.927 54.1118 44.1034 54.1118H45.5891C55.2135 54.1118 62.7478 50.0497 64.9499 38.2948C65.8698 33.3843 65.3936 29.2841 62.9595 26.4004C62.2227 25.5308 61.3089 24.8094 60.2404 24.2212Z'
							fill='#A2A2A2'
						/>
						<path
							d='M57.6069 23.1293C57.2223 23.013 56.8254 22.9072 56.4183 22.812C56.0093 22.7189 55.59 22.6364 55.1586 22.5644C53.6484 22.3105 51.9938 22.1899 50.2212 22.1899H35.2584C34.8901 22.1899 34.54 22.2767 34.2266 22.4332C33.5366 22.7781 33.0238 23.4572 32.8996 24.2887L29.7166 45.2469L29.625 45.8583C29.8346 44.4789 30.9682 43.4633 32.3135 43.4633H37.9144C48.9146 43.4633 57.5275 38.8194 60.0451 25.3847C60.1204 24.9869 60.1835 24.5997 60.2404 24.221C59.6034 23.8698 58.9135 23.5694 58.1707 23.3134C57.9875 23.2499 57.7982 23.1886 57.6069 23.1293Z'
							fill='#6E6E6E'
						/>
						<path
							d='M32.8998 24.2888C33.024 23.4573 33.5369 22.7782 34.2268 22.4354C34.5422 22.2789 34.8903 22.1921 35.2586 22.1921H50.2214C51.994 22.1921 53.6487 22.3127 55.1588 22.5666C55.5902 22.6385 56.0095 22.7211 56.4186 22.8141C56.8256 22.9094 57.2225 23.0151 57.6071 23.1315C57.7984 23.1907 57.9877 23.2521 58.1729 23.3135C58.9157 23.5695 59.6057 23.872 60.2427 24.2211C60.9916 19.2555 60.2366 15.8746 57.6539 12.8132C54.8067 9.44291 49.6678 8 43.0921 8H24.002C22.6587 8 21.5129 9.01554 21.3053 10.3971L13.3538 62.7925C13.1971 63.8292 13.9664 64.7643 14.9718 64.7643H26.7576L29.7168 45.2469L32.8998 24.2888Z'
							fill='#767676'
						/>
					</svg>

					<svg
						width='80'
						height='80'
						viewBox='0 0 80 80'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M57.5214 44.4406C54.5795 44.4406 51.8107 43.1948 49.3159 41.1711L49.9216 38.3049L49.936 38.2041C50.4912 35.1651 52.2001 30.0448 57.5142 30.0448C61.4944 30.0448 64.7319 33.2783 64.7319 37.2535C64.7391 41.2215 61.5016 44.4406 57.5214 44.4406ZM57.5214 22.7497C50.7364 22.7497 45.4944 27.1426 43.3456 34.3801C40.0937 29.4903 37.6205 23.6283 36.1785 18.6881H28.8815V37.6496C28.8815 41.4016 25.8387 44.4406 22.082 44.4406C18.3254 44.4406 15.2826 41.4016 15.2826 37.6496V18.6665H8V37.628C8 45.3912 14.3164 51.7645 22.0892 51.7645C29.8621 51.7645 36.1785 45.384 36.1785 37.628V34.445C37.5989 37.3976 39.3294 40.3934 41.4421 43.0147L36.9788 63.9998H44.4344L47.6719 48.7903C50.5128 50.6051 53.7647 51.7429 57.4998 51.7429C65.4962 51.7429 72 45.2112 72 37.2103C72.0072 29.2455 65.5178 22.7497 57.5214 22.7497Z'
							fill='#C3C3C3'
						/>
					</svg>

					<svg
						width='80'
						height='80'
						viewBox='0 0 80 80'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M65.549 57.8754C64.5915 60.1114 63.4581 62.1696 62.1449 64.0619C60.3549 66.6416 58.8892 68.4272 57.7597 69.4188C56.0088 71.0464 54.1328 71.88 52.1239 71.9274C50.6817 71.9274 48.9425 71.5126 46.9179 70.6711C44.8868 69.8336 43.0201 69.4188 41.3134 69.4188C39.5233 69.4188 37.6036 69.8336 35.5501 70.6711C33.4935 71.5126 31.8368 71.9511 30.5701 71.9945C28.6437 72.0775 26.7235 71.2202 24.8068 69.4188C23.5835 68.3403 22.0534 66.4915 20.2204 63.8723C18.2537 61.0753 16.6368 57.832 15.3701 54.1343C14.0135 50.1404 13.3335 46.2728 13.3335 42.5285C13.3335 38.2395 14.2504 34.5402 16.0869 31.4403C17.5303 28.9503 19.4505 26.9861 21.8537 25.5442C24.2569 24.1022 26.8536 23.3674 29.6501 23.3204C31.1802 23.3204 33.1867 23.7988 35.6803 24.7391C38.1668 25.6824 39.7633 26.1608 40.4633 26.1608C40.9866 26.1608 42.7602 25.6014 45.7669 24.4862C48.6103 23.452 51.01 23.0238 52.9759 23.1924C58.303 23.627 62.3051 25.7496 64.9667 29.5737C60.2024 32.4915 57.8457 36.5783 57.8926 41.821C57.9356 45.9046 59.4012 49.3029 62.2817 52.001C63.5871 53.2533 65.0449 54.2212 66.6668 54.9086C66.3151 55.9397 65.9438 56.9273 65.549 57.8754ZM53.3315 9.28036C53.3315 12.4811 52.1747 15.4696 49.8687 18.2357C47.086 21.5241 43.7201 23.4243 40.0701 23.1245C40.0236 22.7405 39.9966 22.3364 39.9966 21.9117C39.9966 18.839 41.32 15.5506 43.6701 12.8619C44.8434 11.5005 46.3356 10.3686 48.1452 9.46564C49.9508 8.57615 51.6588 8.08424 53.2651 8C53.312 8.42789 53.3315 8.8558 53.3315 9.28032V9.28036Z'
							fill='#616161'
						/>
					</svg>
				</div>
			) : (
				<div className={styles.social}>
					<img src={facebook} alt='logo facebook' />
					<img src={google} alt='logo google' />
					<img src={tikTok} alt='logo tikTok' />
					<img src={paypal} alt='logo paypal' />
					<img src={up} alt='logo up' />
					<img src={apple} alt='logo apple' />
				</div>
			)}
		</>
	)
}

export default LogoSocial
