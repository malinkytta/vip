import { useActionSheet } from '@expo/react-native-action-sheet'
import React from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styled from 'styled-components'

const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Avbryt']

interface IProps {
	tickets: string
	setTickets: React.Dispatch<React.SetStateAction<string>>
}
const Select: React.FC<IProps> = ({ tickets, setTickets }) => {
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
				setTickets(value)
			}
		)
	}

	return (
		<TextInputContainer onTouchStart={handleShowActionSheet}>
			<TextInput
				value={tickets}
				placeholder='Antal biljetter'
				placeholderTextColor='black'
			/>
			<Icon name='chevron-down' size={20} color='grey' />
		</TextInputContainer>
	)
}

export default Select

const TextInputContainer = styled(View)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border: 1px solid grey;
	border-radius: 16px;
	padding: 10px;
	margin: 10px 0px;
`
