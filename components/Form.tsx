import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import styled from 'styled-components'
import { ScButtonText, ScGreenButton, ScButtonClose } from './styles/Buttons'
import FirstScreen from './FirstScreen'
import ConfirmScreen from './ConfirmScreen'
import ValidatedScreen from './ValidatedScreen'

interface IProps {
	onHide: () => void
}

const Form: React.FC<IProps> = ({ onHide }) => {
	const [email, setEmail] = useState('')
	const [selectedTickets, setSelectedTickets] = useState('')
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)

	const [currentScreen, setCurrentScreen] = useState('firstScreen')

	return (
		<ScSafeAreaView>
			{currentScreen === 'firstScreen' && (
				<FirstScreen
					email={email}
					setEmail={setEmail}
					setCurrentScreen={setCurrentScreen}
					tickets={selectedTickets}
					setTickets={setSelectedTickets}
				/>
			)}
			{currentScreen === 'confirmScreen' && (
				<ConfirmScreen
					email={email}
					tickets={selectedTickets}
					setCurrentScreen={setCurrentScreen}
					setError={setError}
					setSuccess={setSuccess}
				/>
			)}

			{currentScreen === 'successScreen' && (
				<ValidatedScreen
					error={error}
					email={email}
					tickets={selectedTickets}
				/>
			)}

			{currentScreen === 'errorScreen' && (
				<ValidatedScreen
					error={error}
					email={email}
					tickets={selectedTickets}
					setCurrentScreen={setCurrentScreen}
					setError={setError}
				/>
			)}
			{success ? (
				<ScContainer>
					<ScGreenButton onPress={onHide}>
						<ScButtonText>Stäng</ScButtonText>
					</ScGreenButton>
				</ScContainer>
			) : (
				<ScContainer>
					<ScButtonClose onPress={onHide}>
						<ScButtonText>Avbryt</ScButtonText>
					</ScButtonClose>
				</ScContainer>
			)}
		</ScSafeAreaView>
	)
}

export default Form

const ScSafeAreaView = styled(SafeAreaView)`
	align-self: center;
	justify-content: center;
`

const ScContainer = styled(View)`
	display: flex;
	align-items: center;
	justify-content: center;
`
