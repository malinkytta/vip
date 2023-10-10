import React, { useState } from 'react'
import { Image, SafeAreaView, TextInput, Text, View, Alert } from 'react-native'
import styled from 'styled-components'
import { ButtonText, GreenButton, ScButtonClose } from '../components/Buttons'
import { useActionSheet } from '@expo/react-native-action-sheet'
import Icon from 'react-native-vector-icons/FontAwesome'

interface IProps {
	onHide: () => void
}

const Form: React.FC<IProps> = ({ onHide }) => {
	const [email, setEmail] = useState('')
	const [selectedTickets, setSelectedTickets] = useState('')
	const [error, setError] = useState(false)

	const existingEmails = ['malinkytta@gmail.com', 'difmalin@gmail.com']

	const options = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'Avbryt',
	]
	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

	const [currentScreen, setCurrentScreen] = useState('first')

	const cancelButtonIndex = options.length - 1
	const { showActionSheetWithOptions } = useActionSheet()

	const handleShowActionSheet = () => {
		const actionSheetOptions = {
			options,
			cancelButtonIndex,
		}
		showActionSheetWithOptions(
			actionSheetOptions,
			(buttonIndex?: number) => {
				if (
					buttonIndex === undefined ||
					buttonIndex === cancelButtonIndex
				) {
					return
				}
				const value = options[buttonIndex]
				setSelectedTickets(value)
			}
		)
	}

	const handlePress = (email: string, ticketsCount: string) => {
		if (!emailRegex.test(email)) {
			return Alert.alert('Du måste ange en giltig e-postadress')
		}

		if (!ticketsCount) {
			return Alert.alert('Du måste välja antal biljetter')
		}

		setCurrentScreen('second')
	}

	const handleConfirm = (email: string) => {
		if (existingEmails.includes(email)) {
			setCurrentScreen('third')
			setError(false)
		} else {
			setCurrentScreen('error')
			setError(true)
		}
	}

	const Tickets = () => {
		return (
			<>
				{error ? (
					<ScErrorTitle>{email}</ScErrorTitle>
				) : (
					<>
						<ScSubTitle>{email}</ScSubTitle>
					</>
				)}
				<ScSubTitle>Antal: {selectedTickets}</ScSubTitle>
			</>
		)
	}

	const changeEmail = () => {
		setCurrentScreen('first')
		setError(false)
	}

	return (
		<FormArea>
			{currentScreen === 'first' ? (
				<ScContainer>
					<ScTitle>Ge bort biljetter</ScTitle>
					<ScText>
						Biljettmottagaren måste ha ett registrerat VIP-monkey
						konto.
					</ScText>
				</ScContainer>
			) : currentScreen === 'third' ? (
				<ScContainer>
					<ScTitle>Färdigt</ScTitle>
					<Icon name='check-circle' size={45} color='#00EBB0' />
				</ScContainer>
			) : currentScreen === 'error' ? (
				<ScContainer>
					<ScTitle>Något gick fel</ScTitle>
					<Icon name='exclamation-circle' size={45} color='#e86987' />
				</ScContainer>
			) : null}

			<ScContent>
				<FormImage source={require('../assets/images/card2.jpg')} />
				<ScTextContent>
					<ScSubTitle>Leffes beachclub</ScSubTitle>
					<ScText>Solgården, Hotell Tylösand - Halmstad</ScText>
					<ScText>2021-12-24</ScText>
				</ScTextContent>
			</ScContent>

			{currentScreen === 'first' ? (
				<>
					<FormInput
						onChangeText={(text) => setEmail(text)}
						value={email}
						placeholder='E-postadress'
						placeholderTextColor='black'
						autoCapitalize='none'
					/>
					<TextInputContainer onTouchStart={handleShowActionSheet}>
						<TextInput
							value={selectedTickets}
							placeholder='Antal biljetter'
							placeholderTextColor='black'
						/>
						<Icon name='chevron-down' size={20} color='grey' />
					</TextInputContainer>

					<GreenButton
						onPress={() => handlePress(email, selectedTickets)}
					>
						<ButtonText>Ge bort biljett(er)</ButtonText>
					</GreenButton>
					<ScButtonClose onPress={onHide}>
						<ButtonText>Avbryt</ButtonText>
					</ScButtonClose>
				</>
			) : currentScreen === 'second' ? (
				<>
					<ScContainer>
						<ScText>
							Bekräfta att e-postadressen stämmer. OBS! Tänk på
							att det ej går att ångra senare när du valt att ge
							bort biljetter.
						</ScText>
						<Tickets />
					</ScContainer>

					<GreenButton onPress={() => handleConfirm(email)}>
						<ButtonText>Ge bort biljett(er)</ButtonText>
					</GreenButton>
					<ScButtonClose onPress={onHide}>
						<ButtonText>Avbryt</ButtonText>
					</ScButtonClose>
				</>
			) : currentScreen === 'third' ? (
				<>
					<ScContainer>
						<ScText>
							Allt gick bra och du har nu gett bort biljetter till
							nedanstående e-postadress.
						</ScText>
						<Tickets />
					</ScContainer>
					<GreenButton onPress={onHide}>
						<ButtonText>Stäng</ButtonText>
					</GreenButton>
				</>
			) : currentScreen === 'error' ? (
				<>
					<ScContainer>
						<ScText>
							Det gick inte att ge bort biljetter eftersom
							e-postadressen inte är registrerad i Vip-Monkeys
							system.
						</ScText>
						<Tickets />
					</ScContainer>
					<GreenButton onPress={changeEmail}>
						<ButtonText>Ändra e-postadress</ButtonText>
					</GreenButton>
					<ScButtonClose onPress={onHide}>
						<ButtonText>Avbryt</ButtonText>
					</ScButtonClose>
				</>
			) : null}
		</FormArea>
	)
}

export default Form

const FormArea = styled(SafeAreaView)`
	align-self: center;
	justify-content: center;
`

const FormInput = styled(TextInput)`
	border: 1px solid grey;
	border-radius: 16px;
	color: black;
	padding: 10px;
	margin: 10px 0px;
`

const TextInputContainer = styled(View)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border: 1px solid grey;
	border-radius: 16px;
	padding: 10px;
	margin: 10px 0px;
`

const ScContainer = styled(View)`
	display: flex;
	align-items: center;
	padding: 20px;
	justify-content: center;
`

const ScContent = styled(View)`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 10px;
`

const ScTextContent = styled(View)`
	padding-left: 10px;
	max-width: 200px;
`

const FormImage = styled(Image)`
	width: 120px;
	height: 80px;
	border-radius: 10px;
	margin: 10px;
`

const ScTitle = styled(Text)`
	margin-bottom: 20px;
	font-size: 20px;
	font-weight: bold;
`

const ScErrorTitle = styled(Text)`
	color: #e86987;
	padding-bottom: 8px;
	padding-top: 8px;
	font-weight: bold;
	font-size: 18px;
`

const ScSubTitle = styled(Text)`
	padding-bottom: 8px;
	padding-top: 8px;
	font-weight: bold;
	font-size: 18px;
`

const ScText = styled(Text)`
	font-size: 16px;
	padding-bottom: 5px;
`
