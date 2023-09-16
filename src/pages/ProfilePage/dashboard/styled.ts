import { styled } from "styled-components";

export const Dashboard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: 100vh;

	/* 드래그 방지 */
	-webkit-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	user-select:none;

	.dashboard__container {
		display: flex;
		flex-flow: column nowrap;
		flex: 1;
		width: 100%;
		padding: 0 5vw;

		.dashboard__container__head {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: 30px 0;

			.dashboard__container__head__user {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 35px;
				padding: 32px 0;
				color: var(--color-black-primary);
				.dashboard__container__head__user__welcome {
					position: absolute;
					top: -20px;
					left: 0;
					letter-spacing: 2px;
					font-size: medium;
				}
				.dashboard__container__head__user__img {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 80px;
					margin-right: 3rem;
					border-radius: 10px;
					border-radius: 20%;
					overflow: hidden;
					
					img {
						width: 100%;
					}
				}
			}

			/* table */
			table {
				border-collapse: collapse;
    			border-spacing: 0;
				border-collapse: collapse;
				border-radius: 10px;
				border-style: hidden;
				box-shadow: 0 0 0 1px #000;
				td {
					text-align: center;
					padding: 20px;
					border-right: 1px solid black;
				}
				.table__head {
					border-bottom: 1px solid black;
				}
			}
		}

		/* 내용 */
		.dashboard__container__content {
			display: flex;
			justify-content: space-between;

			.dashboard__container__content__product {
				width: 45%;
				padding: 20px;
				background-color: var(--color-black-primary);
				color: var(--color-white-primary);
				border-radius: 8px;
				
				/* 거래상태 변경 버튼 */
				ul { 
					display: flex;
					margin-bottom: 1rem;
				
					.dashboard__circle {
						cursor: pointer;
						margin: 5px;
						width: 15px;
						height: 15px;
						border-radius: 70%;
						background-color: red;
					}
					.dashboard__onSale {
						background-color: rgb(97, 197, 85);
						&:hover {
							background-color: rgb(77, 177, 65);
						}
					}
					.dashboard__reserved {
						background-color: rgb(245, 191, 80);
						&:hover {
							background-color: rgb(225, 171, 60);
						}
					}
					.dashboard__soldOut {
						background-color: rgb(236, 105, 95);
						&:hover {
							background-color: rgb(216, 85, 75);
						}
					}
				}



				/* 스크롤 박스 */
				.scroll-box {
					display: block;
					.scroll-box__cards {
						display: flex;
						flex-direction: column;
						flex-wrap: nowrap;
						height: 350px;
						overflow-y: auto;
						.scroll-box__cards__card {
							margin: 3rem 0;
							border-radius: 8px;
							padding: 20px;
							background-color: var(--color-white-primary);
							img {
								width: 200px;
							}
						}
					}
				}
			}
			.dashboard__container__content__post {
				display: block;
				width: 50%;
				color: var(--color-black-primary);
				background-color: var(--color-white-primary);
				border-radius: 8px;
				padding: 20px;
				
				.dashboard__container__content__post__head {
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: var(--text-size-medium);
					font-weight: 500;
					svg {
						cursor: pointer;
						padding: 0 10px;
						&:hover {
							color: var(--color-accent-dark-green);
						}
					}
				}

				.bashboard__container__content__post__scroll {
					display: flex;
					flex-direction: column;
					flex-wrap: nowrap;
					height: 350px;
					overflow-y: auto;
					margin-top: 20px;
				}
			}
		}
	}
`;
