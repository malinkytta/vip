import { View, Text, Image, TextInput } from 'react-native'
import styled from 'styled-components'

export const ScContainer = styled(View)`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const ScContent = styled(View)`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 10px;
`
export const ScTextContent = styled(View)`
	padding-left: 10px;
	max-width: 200px;
`

export const ScSubTitle = styled(Text)`
	padding-bottom: 8px;
	padding-top: 8px;
	font-weight: bold;
	font-size: 18px;
`
export const ScText = styled(Text)`
	font-size: 16px;
	padding-bottom: 5px;
`

export const ScFormImage = styled(Image)`
	width: 120px;
	height: 80px;
	border-radius: 10px;
	margin: 10px;
`
export const ScFormInput = styled(TextInput)`
	border: 1px solid grey;
	border-radius: 16px;
	color: black;
	padding: 10px;
	margin: 10px 0px;
`

export const ScTitle = styled(Text)`
	margin-bottom: 20px;
	font-size: 20px;
	font-weight: bold;
`

export const ScErrorTitle = styled(Text)`
	color: #e86987;
	padding-bottom: 8px;
	padding-top: 8px;
	font-weight: bold;
	font-size: 18px;
`
