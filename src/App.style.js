import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1200px;
	width: 100%;
	background-color: black;
	padding: 30px;
	margin: 0 auto;
`;

export const StyledButton = styled.button`
	background: ${(props) => (props.primary ? '#3cc' : 'dimgray')};
	color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;
