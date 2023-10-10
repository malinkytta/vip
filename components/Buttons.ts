import { Pressable, Text } from "react-native";
import styled, { css } from "styled-components";


const commonButtonStyles = css`
border-radius: 20px;
padding: 10px;
align-items: center;
height: 40px; 
width: 350px;
padding: 10px;
margin-top: 10px;
align-items: center;
justify-content: center;
`

export const ScButtonClose = styled(Pressable)`
background-color: #eee;
${commonButtonStyles}
`

export const GreenButton = styled(Pressable)`
background-color: #00EBB0;
opacity: ${props => (props.disabled ? 0.4 : 1)};
${commonButtonStyles};
`

export const ButtonText = styled(Text)`
text-transform: uppercase;
font-weight: 600;
`
