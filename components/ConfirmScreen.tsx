import React from 'react'
import { ScButtonText, ScGreenButton } from './styles/Buttons'

import {
	ScFormImage,
	ScContainer,
	ScContent,
	ScSubTitle,
	ScText,
	ScTextContent,
} from './styles/Styles'

interface IProps {
	email: string
	tickets: string
	setCurrentScreen: React.Dispatch<React.SetStateAction<string>>
	setError: React.Dispatch<React.SetStateAction<boolean>>
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const existingEmails = ['malinkytta@gmail.com', 'difmalin@gmail.com']

const ConfirmScreen: React.FC<IProps> = ({
	email,
	tickets,
	setCurrentScreen,
	setSuccess,
	setError,
}) => {
	const handleConfirm = (email: string) => {
		if (existingEmails.includes(email)) {
			setCurrentScreen('successScreen')
			setError(false)
			setSuccess(true)
		} else {
			setCurrentScreen('errorScreen')
			setError(true)
		}
	}
	return (
		<ScContainer>
			<ScContent>
				<ScFormImage source={require('../assets/images/card2.jpg')} />
				<ScTextContent>
					<ScSubTitle>Leffes beachclub</ScSubTitle>
					<ScText>Solgården, Hotell Tylösand - Halmstad</ScText>
					<ScText>2021-12-24</ScText>
				</ScTextContent>
			</ScContent>

			<ScText>
				Bekräfta att e-postadressen stämmer. OBS! Tänk på att det ej går
				att ångra senare när du valt att ge bort biljetter.
			</ScText>

			<ScSubTitle>{email}</ScSubTitle>
			<ScSubTitle>Antal: {tickets}</ScSubTitle>
			<ScGreenButton onPress={() => handleConfirm(email)}>
				<ScButtonText>Ge bort biljett(er)</ScButtonText>
			</ScGreenButton>
		</ScContainer>
	)
}

export default ConfirmScreen
