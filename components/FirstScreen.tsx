import React from 'react'
import Select from './Select'
import { ScButtonText, ScGreenButton } from './styles/Buttons'
import {
	ScFormImage,
	ScFormInput,
	ScContainer,
	ScContent,
	ScSubTitle,
	ScText,
	ScTextContent,
	ScTitle,
} from './styles/Styles'
import { Alert } from 'react-native'

interface IProps {
	email: string
	tickets: string
	setEmail: (value: React.SetStateAction<string>) => void
	setCurrentScreen: React.Dispatch<React.SetStateAction<string>>
	setTickets: React.Dispatch<React.SetStateAction<string>>
}

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

const ModalScreens: React.FC<IProps> = ({
	email,
	setEmail,
	setCurrentScreen,
	tickets,
	setTickets,
}) => {
	const handlePress = (email: string, ticketsCount: string) => {
		if (!emailRegex.test(email)) {
			return Alert.alert('Du måste ange en giltig e-postadress')
		}

		if (!ticketsCount) {
			return Alert.alert('Du måste välja antal biljetter')
		}

		setCurrentScreen('confirmScreen')
	}
	return (
		<>
			<ScContainer>
				<ScTitle>Ge bort biljetter</ScTitle>
				<ScText>
					Biljettmottagaren måste ha ett registrerat VIP-monkey konto.
				</ScText>
				<ScContent>
					<ScFormImage
						source={require('../assets/images/card2.jpg')}
					/>
					<ScTextContent>
						<ScSubTitle>Leffes beachclub</ScSubTitle>
						<ScText>Solgården, Hotell Tylösand - Halmstad</ScText>
						<ScText>2021-12-24</ScText>
					</ScTextContent>
				</ScContent>
			</ScContainer>
			<ScFormInput
				onChangeText={(text) => setEmail(text)}
				value={email}
				placeholder='E-postadress'
				placeholderTextColor='black'
				autoCapitalize='none'
			/>
			<Select tickets={tickets} setTickets={setTickets} />
			<ScGreenButton onPress={() => handlePress(email, tickets)}>
				<ScButtonText>Ge bort biljett(er)</ScButtonText>
			</ScGreenButton>
		</>
	)
}

export default ModalScreens
