import React from 'react'
import { Modal, View } from 'react-native'
import Form from './Form'
import styled from 'styled-components'

interface IProps {
	visible: boolean
	onClose: () => void
}

const ModalContainer: React.FC<IProps> = ({ visible, onClose }) => {
	return (
		<>
			<Modal animationType='fade' transparent={true} visible={visible}>
				<Overlay>
					<CenteredView>
						<ModalView>
							<Form onHide={onClose} />
						</ModalView>
					</CenteredView>
				</Overlay>
			</Modal>
		</>
	)
}

export default ModalContainer

const Overlay = styled(View)`
	flex: 1;
	background-color: rgba(0, 0, 0, 0.8);
	justify-content: center;
	align-items: center;
`

const CenteredView = styled(View)`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin-top: 22px;
	border-radius: 16px;
	width: 95%;
`

const ModalView = styled(View)`
	margin: 20px;
	background-color: white;
	border-radius: 20px;
	padding: 35px;
	shadow-color: #000;
	width: 100%;
`
