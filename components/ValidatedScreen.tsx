import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScButtonText, ScGreenButton } from './styles/Buttons'
import {
	ScFormImage,
	ScContainer,
	ScContent,
	ScErrorTitle,
	ScSubTitle,
	ScText,
	ScTextContent,
	ScTitle,
} from './styles/Styles'

interface IProps {
	email: string
	tickets: string
	error: boolean
	setCurrentScreen?: React.Dispatch<React.SetStateAction<string>>
	setError?: React.Dispatch<React.SetStateAction<boolean>>
}

const ValidatedScreen: React.FC<IProps> = ({
	email,
	tickets,
	error,
	setCurrentScreen,
	setError,
}) => {
	return (
		<ScContainer>
			<ScTitle>{error ? 'Något gick fel' : 'Färdigt'}</ScTitle>
			<Icon
				name={error ? 'exclamation-circle' : 'check-circle'}
				size={45}
				color={error ? '#e86987' : '#00EBB0'}
			/>
			<ScContent>
				<ScFormImage source={require('../assets/images/card2.jpg')} />
				<ScTextContent>
					<ScSubTitle>Leffes beachclub</ScSubTitle>
					<ScText>Solgården, Hotell Tylösand - Halmstad</ScText>
					<ScText>2021-12-24</ScText>
				</ScTextContent>
			</ScContent>
			<ScText>
				{error
					? 'Det gick inte att ge bort biljetter eftersom e-postadressen inte är registrerad i Vip-Monkeys system.'
					: 'Allt gick bra och du har nu gett bort biljetter till nedanstående e-postadress.'}
			</ScText>
			{error ? (
				<ScErrorTitle>{email}</ScErrorTitle>
			) : (
				<ScSubTitle>{email}</ScSubTitle>
			)}

			<ScSubTitle>Antal: {tickets}</ScSubTitle>
			{error && setCurrentScreen && setError && (
				<ScGreenButton
					onPress={() => {
						setCurrentScreen('firstScreen'), setError(false)
					}}
				>
					<ScButtonText>Ändra e-postadress</ScButtonText>
				</ScGreenButton>
			)}
		</ScContainer>
	)
}

export default ValidatedScreen
