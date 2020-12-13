import { css } from 'styled-components';
import theme from './theme';

const { colors } = theme;

const mixins = {

	flexCenter: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,

	flexBetween: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`,

	sectionContainer: css`
		padding: 0.8rem;
		position: relative;
		width: 100%;
	`,

	fadeinEnter: css`
    text-align: left;
    opacity: 0;
    transform: translateY(-60px);
    transition-property: transform, opacity;
    transition-duration: 400ms;
	`,

	fadeinActive: css`
		transform: translateY(0);
		opacity: 1;
	`,

	imageItem: css`
		padding: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	`,

	inlineLink: css`
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		transition: ${theme.transition};
		cursor: pointer;
		
		&:hover,
		&:focus,
		&:active {
			text-decoration: underline
		}
	`,

	divShadow: css`
		width: 100%;
		margin: 0.3rem;
		padding: 0.4rem;
		position: inline-block;
		border-radius: 5px;
		box-shadow: 0px 7px 15px -3px var(--theme-ui-colors-shadow,rgba(64,87,253,0.3));
		transition: ${theme.transition};
		&:hover,
		&:focus {
			box-shadow: 0 8px 15px 5px var(--theme-ui-colors-shadow,rgba(64,87,253,0.3));
		}
	`,

	boxShadow: css`
		box-shadow: 0 4px 15px 0px ${colors.black};
		transition: ${theme.transition};
		&:hover,
		&:focus {
			box-shadow: 0 8px 15px 5px ${colors.black};
		}
	`,
};

export default mixins;